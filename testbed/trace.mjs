// CDP Tracing harness for the omnitable testbed benchmark scenarios.
// For each scenario: fresh load -> prep -> start CDP tracing (devtools.timeline
// + invalidation tracking) -> run the measured action -> stop -> write trace
// JSON to /home/coder/Trace-testbed-<scenario>.json and print an attribution
// summary (top timeline events by self-time, script self-time by source URL,
// style/layout invalidation reasons).
//
// Usage: node testbed/trace.mjs [--only scroll-1,jump-end] [--reps 1]
//        [--several 10] [--widen 120] [--rows 10000] [--seed 42]
import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

import { benchMeasure, benchOpenPanel, benchPrep } from './actions.mjs';

const args = process.argv.slice(2);
const arg = (name, def) => {
	const i = args.indexOf('--' + name);
	return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const REPS = Number(arg('reps', 1));
const SEVERAL = Number(arg('several', 10));
const WIDEN = Number(arg('widen', 120));
const ROWS = Number(arg('rows', 10000));
const SEED = Number(arg('seed', 42));
const ONLY = (
	arg('only', 'scroll-1,scroll-several,jump-end,widen,narrow,hide') || ''
)
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);
const OUTDIR = arg('out-dir', 'testbed/results');

const PORT = 8123;
const URL = `http://127.0.0.1:${PORT}/testbed/index.html?rows=${ROWS}&seed=${SEED}`;
const VIEWPORT = { width: 1600, height: 900 };
const TRACE_CATEGORIES = [
	'devtools.timeline',
	'devtools.timeline.frame',
	'disabled-by-default-devtools.timeline.invalidationTracking',
];

// ------------------------------------------------------------ analysis
const base = (url) => {
	if (!url) return null;
	try {
		const u = new URL(url, 'http://x');
		const p = u.pathname;
		if (p.startsWith('/node_modules/')) {
			const parts = p.split('/');
			return parts[2] + '/' + (parts[3] || '') + '/' + (parts[4] || '');
		}
		return p;
	} catch {
		return url.split('/').slice(-3).join('/');
	}
};

const selfTime = (events) => {
	// events with dur (us). Nesting pass per (pid|tid).
	const byThread = new Map();
	for (const e of events) {
		const key = e.pid + ':' + (e.tid ?? 0);
		(byThread.get(key) ?? byThread.set(key, []).get(key)).push(e);
	}
	for (const list of byThread.values()) {
		list.sort((a, b) => a.ts - b.ts || b.dur - a.dur);
		const stack = [];
		for (const e of list) {
			while (
				stack.length &&
				stack[stack.length - 1].ts + stack[stack.length - 1].dur <= e.ts
			) {
				stack.pop();
			}
			const parent = stack[stack.length - 1];
			if (parent) {
				parent._childSelf = (parent._childSelf ?? 0) + e.dur;
			}
			stack.push(e);
		}
	}
	for (const e of events) {
		e._self = Math.max(0, e.dur - (e._childSelf ?? 0));
	}
};

const analyze = (events, label) => {
	const tl = events.filter(
		(e) =>
			typeof e.dur === 'number' &&
			String(e.cat).split(',').includes('devtools.timeline')
	);
	selfTime(tl);

	// main thread = the thread with the most timeline time
	const byThread = new Map();
	for (const e of tl) {
		const k = e.pid + ':' + (e.tid ?? 0);
		byThread.set(k, (byThread.get(k) ?? 0) + e.dur / 1000);
	}
	const mainKey = [...byThread.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
	const main = tl.filter((e) => e.pid + ':' + (e.tid ?? 0) === mainKey);
	const bg = tl.filter((e) => !main.includes(e));

	const agg = (list) => {
		const byName = new Map();
		for (const e of list) {
			const a = byName.get(e.name) ?? {
				name: e.name,
				count: 0,
				total: 0,
				self: 0,
			};
			a.count += 1;
			a.total += e.dur / 1000;
			a.self += e._self / 1000;
			byName.set(e.name, a);
		}
		return byName;
	};
	const printNames = (byName, label2) => {
		console.log(`\n=== ${label}: ${label2} (self time) ===`);
		const tops = [...byName.values()]
			.filter((a) => a.count > 2 || a.self > 1)
			.sort((a, b) => b.self - a.self)
			.slice(0, 14);
		for (const a of tops) {
			console.log(
				a.name.padEnd(40),
				`count:${String(a.count).padStart(6)}`,
				`total:${a.total.toFixed(1).padStart(8)}ms`,
				`self:${a.self.toFixed(1).padStart(8)}ms`
			);
		}
	};
	const mainNames = agg(main);
	printNames(mainNames, 'main thread');
	printNames(agg(bg), 'background threads');

	// script self-time by source URL (main thread only)
	const byUrl = new Map();
	for (const e of main) {
		if (e.name !== 'FunctionCall') continue;
		const d = e.args?.data ?? {};
		const key = base(d.url) ?? `(fn) ${d.functionName ?? '?'}`;
		const a = byUrl.get(key) ?? { key, self: 0, count: 0 };
		a.self += e._self / 1000;
		a.count += 1;
		byUrl.set(key, a);
	}
	const topUrls = [...byUrl.values()]
		.sort((a, b) => b.self - a.self)
		.slice(0, 12);
	if (topUrls.length) {
		console.log(`--- ${label}: FunctionCall self-time by source (main) ---`);
		for (const a of topUrls) {
			console.log(
				a.key.padEnd(62),
				`self:${a.self.toFixed(1).padStart(8)}ms`,
				`n:${a.count}`
			);
		}
	}

	// EventDispatch breakdown by event type
	const byType = new Map();
	for (const e of main) {
		if (e.name !== 'EventDispatch') continue;
		const type = e.args?.data?.type ?? '?';
		byType.set(type, (byType.get(type) ?? 0) + e._self / 1000);
	}
	if (byType.size) {
		console.log(`--- ${label}: EventDispatch self-time by type ---`);
		for (const [type, ms] of [...byType.entries()]
			.sort((a, b) => b[1] - a[1])
			.slice(0, 8)) {
			console.log(
				('dispatch:' + type).padEnd(56),
				`self:${ms.toFixed(1).padStart(8)}ms`
			);
		}
	}

	// invalidation reasons (main thread only)
	const byReason = new Map();
	for (const e of main) {
		const cat = String(e.cat);
		if (!cat.includes('invalidationTracking')) continue;
		const d = e.args?.data ?? {};
		const key = `${e.name.replace('InvalidationTracking', '')}: ${
			d.reason ?? '?'
		}`;
		const a = byReason.get(key) ?? { key, count: 0, dur: 0 };
		a.count += 1;
		a.dur += (e.dur ?? 0) / 1000;
		byReason.set(key, a);
	}
	const topReasons = [...byReason.values()]
		.sort((a, b) => b.count - a.count)
		.slice(0, 12);
	if (topReasons.length) {
		console.log(`--- ${label}: invalidation reasons (main) ---`);
		for (const a of topReasons) {
			console.log(a.key.padEnd(58), `n:${String(a.count).padStart(6)}`);
		}
	}
	return {
		mainNames: [...mainNames.values()],
		topUrls,
		topReasons,
		mainThread: mainKey,
	};
};

// ------------------------------------------------------------ main
await (async () => {
	try {
		const res = await fetch(URL);
		if (!res.ok) throw new Error(String(res.status));
	} catch {
		console.error('Testbed not reachable; start the wds server first.');
		process.exit(1);
	}
})();

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
const cdp = await ctx.newCDPSession(page);
await cdp.send('Performance.enable');

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
	await page.goto(URL, { waitUntil: 'load' });
	await page.waitForFunction(
		() => !!window.__testbed?.ready && window.__testbed.info().mountedRows > 0,
		{ timeout: 60000 }
	);
};

// warmup once: JIT + decodes
await gotoReady();
await page.evaluate(benchPrep, { scroll: true });
await page.evaluate(benchMeasure, { mode: 'jump-end' });

const UNITS = [
	{ id: 'scroll-1', windows: ['scroll-1'] },
	{ id: 'scroll-several', windows: ['scroll-several'] },
	{ id: 'jump-end', windows: ['jump-end'] },
	{ id: 'resize', windows: ['widen', 'narrow'] },
	{ id: 'hide', windows: ['hide'] },
];

for (let rep = 0; rep < REPS; rep++) {
	for (const unit of UNITS) {
		if (!unit.windows.some((w) => ONLY.includes(w))) continue;
		await gotoReady();
		const prep = await page.evaluate(benchPrep, {
			scroll:
				unit.windows[0].startsWith('scroll') || unit.windows[0] === 'jump-end',
		});
		for (const w of unit.windows) {
			if (!ONLY.includes(w)) continue;
			if (w === 'hide') {
				const opened = await page.evaluate(benchOpenPanel);
				if (!opened) throw new Error('settings panel did not open');
			}
			const chunks = [];
			const onData = (ev) => chunks.push(...(ev.value ?? []));
			const complete = new Promise((res) => {
				const handler = () => {
					cdp.off('Tracing.tracingComplete', handler);
					res();
				};
				cdp.on('Tracing.tracingComplete', handler);
			});
			cdp.on('Tracing.dataCollected', onData);
			await cdp.send('Tracing.start', {
				traceConfig: {
					recordMode: 'recordAsMuchAsPossible',
					includedCategories: TRACE_CATEGORIES,
				},
			});
			const opts = { mode: w };
			if (w === 'scroll-several') opts.several = SEVERAL;
			if (w === 'widen') opts.widenDelta = WIDEN;
			if (w === 'narrow') opts.targetW = prep.w0;
			const sample = await page.evaluate(benchMeasure, opts);
			await cdp.send('Tracing.end');
			await complete;
			cdp.off('Tracing.dataCollected', onData);

			const suffix = REPS > 1 ? `-${rep + 1}` : '';
			fs.mkdirSync(OUTDIR, { recursive: true });
			const file = path.join(OUTDIR, `Trace-testbed-${w}${suffix}.json`);
			const payload = {
				traceEvents: chunks,
				metadata: { scenario: w, sample },
			};
			fs.writeFileSync(file, JSON.stringify(payload));
			const big = Buffer.from(JSON.stringify(payload));
			fs.writeFileSync(file.replace('.json', '.json.gz'), zlib.gzipSync(big));

			console.log(
				`\n[scenario ${w}] measured ms=${sample.ms} active=${sample.activeMs} frames=${sample.frames} muts=${sample.muts}`
			);
			const summary = analyze(chunks, w);
			fs.writeFileSync(
				path.join(OUTDIR, `trace-summary-${w}${suffix}.json`),
				JSON.stringify({ file, sample, summary }, null, 1)
			);
		}
	}
}

await browser.close();
console.log('\ntraces written to ' + OUTDIR + '/');
