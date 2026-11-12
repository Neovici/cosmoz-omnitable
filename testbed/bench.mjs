// Deterministic benchmark driver for the omnitable testbed.
//
// Load-units (one fresh page load each; all measured windows inside):
//   scroll-1        scroll exactly one row height from a parked anchor
//   scroll-several  scroll N rows (default 10) from a parked anchor
//   jump-end        jump to the end of the table (full page render)
//   resize          widen the first column by N px, then narrow it back
//                   (the same column-resize event a real nub drag fires)
//   hide            hide the first column via the settings panel checkbox
//                   (panel open is unmeasured; the toggle is measured)
//
// Protocol per measured window: quiesce -> gc -> armed observers
// (MutationCounter + frame loop + longtask observer) -> CDP Performance
// metrics before -> action -> settle (3 quiet frames) -> metrics after.
// A fresh page load precedes every rep so state never leaks between reps.
//
// Usage: node testbed/bench.mjs [--reps 5] [--several 10] [--widen 120]
//        [--rows 10000] [--seed 42] [--only scroll-1,resize,hide] [--out f]
import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

import { benchMeasure, benchOpenPanel, benchPrep } from './actions.mjs';

const args = process.argv.slice(2);
const arg = (name, def) => {
	const i = args.indexOf('--' + name);
	return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const REPS = Number(arg('reps', 5));
const SEVERAL = Number(arg('several', 10));
const WIDEN = Number(arg('widen', 120));
const ROWS = Number(arg('rows', 10000));
const SEED = Number(arg('seed', 42));
const VAR = Number(arg('var', 0));
const ONLY = (arg('only', 'scroll-1,scroll-several,jump-end,resize,hide') || '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);
const OUT = arg('out', '');

const PORT = Number(arg('port', '8123'));
const SPEED = Number(arg('speed', 0));
const SPEEDPARAM = SPEED ? `&speed=${SPEED}` : '';
const URL = `http://127.0.0.1:${PORT}/testbed/index.html?rows=${ROWS}&seed=${SEED}${VAR ? `&var=${VAR}` : ''}${SPEEDPARAM}`;
const VIEWPORT = { width: 1600, height: 900 };

const preflight = async () => {
	try {
		const res = await fetch(URL);
		if (!res.ok) throw new Error(String(res.status));
	} catch {
		console.error(
			`Testbed server not reachable at ${URL}\nStart it with:\n` +
				`  cd /home/coder/omni-1953 && npx web-dev-server --config wds.config.mjs --hostname 127.0.0.1 --port ${PORT}`,
		);
		process.exit(1);
	}
};

const median = (xs) => {
	if (!xs.length) return 0;
	const s = [...xs].sort((a, b) => a - b);
	const m = Math.floor(s.length / 2);
	return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const pct = (xs, p) => {
	if (!xs.length) return 0;
	const s = [...xs].sort((a, b) => a - b);
	return s[Math.min(s.length - 1, Math.floor((p / 100) * s.length))];
};
const round2 = (n) => Math.round(n * 100) / 100;

const METRIC_KEYS = [
	'LayoutCount',
	'LayoutDuration',
	'RecalcStyleCount',
	'RecalcStyleDuration',
	'ScriptDuration',
	'TaskDuration',
	'TaskCount',
	'JSHeapUsedSize',
];
const metricsToObj = (metrics) => {
	const o = {};
	for (const m of metrics) o[m.name] = m.value;
	return o;
};
const metricDelta = (a, b) => {
	const d = {};
	for (const k of METRIC_KEYS) d[k] = b[k] - a[k];
	return d;
};

const report = (results) => {
	console.log('\n=== omnitable testbed benchmark ===');
	console.log(
		`rows=${ROWS} cols=50 seed=${SEED} var=${VAR || 0} reps=${REPS} viewport=${VIEWPORT.width}x${VIEWPORT.height}`,
	);
	console.log(
		'scenario'.padEnd(15),
		'med ms'.padStart(8),
		'active'.padStart(8),
		'frames'.padStart(7),
		'maxFr'.padStart(7),
		'long'.padStart(5),
		'l.sum'.padStart(7),
		'layout#'.padStart(8),
		'style#'.padStart(7),
		'rowsΔ'.padStart(6),
		'mutΔ'.padStart(7),
		'first cell w / id moved',
	);
	for (const id of [
		'scroll-1',
		'scroll-several',
		'jump-end',
		'widen',
		'narrow',
		'hide',
	]) {
		const s = results.summary[id];
		if (!s) continue;
		console.log(
			id.padEnd(15),
			String(s.ms.median).padStart(8),
			String(s.activeMs).padStart(8),
			String(s.frames).padStart(7),
			String(s.maxFrameMs).padStart(7),
			String(s.longtasks.count).padStart(5),
			String(s.longtasks.sum).padStart(7),
			String(s.metrics.LayoutCount).padStart(8),
			String(s.metrics.RecalcStyleCount).padStart(7),
			String(s.rowsDelta).padStart(6),
			String(s.mutsDelta).padStart(7),
			`${s.firstCellWidth}  idMoved:${s.idMoved}`,
		);
	}
};

// ------------------------------------------------------------------ main
await preflight();

const browser = await chromium.launch({
	args: [
		'--js-flags=--expose-gc',
		'--disable-background-timer-throttling',
		'--disable-renderer-backgrounding',
		'--disable-backgrounding-occluded-windows',
	],
});
const ctx = await browser.newContext({ ...VIEWPORT, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const pageErrors = [];
page.on('pageerror', (e) => pageErrors.push(String(e)));
const cdp = await ctx.newCDPSession(page);
await cdp.send('Performance.enable');

// arm a document-level mutation counter used by benchPrep's settle
await page.addInitScript(`
  const arm = () => {
    const sr = document.querySelector('cosmoz-omnitable')?.shadowRoot;
    if (!sr || window.__benchMutsObserver) return;
    let c = 0;
    new MutationObserver((l) => { c += l.length; window.__benchMuts = c; })
      .observe(sr, { childList: true, subtree: true, attributes: true, characterData: true });
  };
  document.addEventListener('DOMContentLoaded', arm);
  window.addEventListener('load', () => setTimeout(arm, 50));
`);

const gotoReady = async () => {
	const t0 = Date.now();
	await page.goto(URL, { waitUntil: 'load' });
	await page.waitForFunction(
		() => !!window.__testbed?.ready && window.__testbed.info().mountedRows > 0,
		{ timeout: 60000 },
	);
	return Date.now() - t0;
};

// A load-unit performs zero or more measured windows on one page load.
const UNITS = [
	{ id: 'scroll-1', windows: ['scroll-1'] },
	{ id: 'scroll-several', windows: ['scroll-several'] },
	{ id: 'jump-end', windows: ['jump-end'] },
	{ id: 'resize', windows: ['widen', 'narrow'] },
	{ id: 'hide', windows: ['hide'] },
];

// Aggregate samples per measured window id.
const samplesById = {};
for (const w of [
	'scroll-1',
	'scroll-several',
	'jump-end',
	'widen',
	'narrow',
	'hide',
]) {
	samplesById[w] = [];
}
const results = { samples: samplesById };

const runUnit = async (unit, record) => {
	const loadMs = await gotoReady();
	if (!record) return;
	const inOnly = ONLY.includes(unit.id);
	if (!inOnly) return;

	const prep = await page.evaluate(benchPrep, {
		scroll:
			unit.windows[0].startsWith('scroll') || unit.windows[0] === 'jump-end',
	});

	for (const w of unit.windows) {
		if (w === 'hide') {
			const opened = await page.evaluate(benchOpenPanel);
			if (!opened) throw new Error('settings panel did not open');
		}
		const m0 = metricsToObj((await cdp.send('Performance.getMetrics')).metrics);
		const opts = { mode: w };
		if (w === 'scroll-several') opts.several = SEVERAL;
		if (w === 'widen') opts.widenDelta = WIDEN;
		if (w === 'narrow') opts.targetW = prep.w0;
		const sample = await page.evaluate(benchMeasure, opts);
		const m1 = metricsToObj((await cdp.send('Performance.getMetrics')).metrics);
		sample.metrics = metricDelta(m0, m1);
		sample.loadMs = loadMs;
		sample.w0 = prep.w0;
		sample.rowH = prep.rowH;
		results.samples[w].push(sample);
	}
};

const pass = async (record) => {
	for (const unit of UNITS) await runUnit(unit, record);
};

console.error(
	`Running benchmark: reps=${REPS} several=${SEVERAL} widen=${WIDEN}px rows=${ROWS} seed=${SEED}`,
);

for (let i = 0; i < 1; i++) {
	await pass(false); // warmup (JIT, decodes, parse caches) — discarded
}

console.error('warmup done');
for (let rep = 0; rep < REPS; rep++) {
	await pass(true);
	console.error(`rep ${rep + 1}/${REPS} done`);
}

if (pageErrors.length) {
	console.error('PAGE ERRORS (non-fatal):');
	for (const e of pageErrors) console.error('  ' + e.slice(0, 200));
}

await browser.close();

// ---------------------------------------------------------------- report
const summary = {};
for (const [id, arr] of Object.entries(results.samples)) {
	if (!arr.length) continue;
	const ms = arr.map((s) => s.ms);
	const key = (sel) => median(arr.map(sel));
	const idMoved = median(
		arr.map(
			(s) =>
				(s.after.lastId !== s.before.lastId ? 1 : 0) +
				(s.after.firstId !== s.before.firstId ? 1 : 0),
		),
	);
	summary[id] = {
		n: arr.length,
		ms: {
			median: round2(median(ms)),
			min: round2(Math.min(...ms)),
			max: round2(Math.max(...ms)),
			p90: round2(pct(ms, 90)),
		},
		activeMs: round2(key((s) => s.activeMs)),
		frames: round2(key((s) => s.frames)),
		maxFrameMs: round2(key((s) => s.maxFrameMs)),
		longtasks: {
			count: round2(key((s) => s.longtasks.count)),
			sum: round2(key((s) => s.longtasks.sum)),
		},
		metrics: Object.fromEntries(
			METRIC_KEYS.map((k) => [k, round2(key((s) => s.metrics[k]))]),
		),
		rowsDelta: Math.round(
			median(arr.map((s) => s.after.mountedRows - s.before.mountedRows)),
		),
		mutsDelta: Math.round(median(arr.map((s) => s.muts))),
		idMoved,
		firstCellWidth: `${Math.round(
			median(arr.map((s) => s.before.firstCellWidth)),
		)} -> ${Math.round(median(arr.map((s) => s.after.firstCellWidth)))}`,
	};
}

report({ summary });

const stamp = new Date().toISOString().replace(/[\u003a.]/gu, '-');
const outFile =
	OUT ||
	path.join('/home/coder/omni-1953/testbed/results', `bench-${stamp}.json`);
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(
	outFile,
	JSON.stringify(
		{
			meta: {
				date: new Date().toISOString(),
				url: URL,
				reps: REPS,
				several: SEVERAL,
				widen: WIDEN,
				rows: ROWS,
				seed: SEED,
				viewport: VIEWPORT,
				protocol:
					'fresh-load-per-rep; parked anchor 5000px; gc pre-window; settle=3 quiet frames; longtask>=50ms; metrics=CDP Performance deltas',
			},
			summary,
			samples: results.samples,
		},
		null,
		1,
	),
);
console.log('\nresults written to ' + outFile);
