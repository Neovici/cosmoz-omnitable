// In-page benchmark actions for the omnitable testbed.
// Every function here is standalone (no closures, no imports) so it can be
// passed directly to page.evaluate / driver.evaluate. Runs against the same
// page as testbed/main.js and uses its window.__testbed hooks.

// Prep before a measured window. For scroll modes also parks at the anchor.
// Returns {rowH, w0}. Forces GC when available.
export const benchPrep = async ({ anchor = 5000, scroll = false } = {}) => {
	const t = window.__testbed;
	const sc = t.scroller();
	const sr = t.omnitable.shadowRoot;

	const settle = async (n, cap = 600) => {
		const raf = () => new Promise((r) => requestAnimationFrame(r));
		let q = 0;
		let last = null;
		let i = 0;
		while (q < n && i < cap) {
			await raf();
			const now = window.__benchMuts;
			if (now === last) {
				q += 1;
			} else {
				q = 0;
				last = now;
			}
			i += 1;
		}
		return i;
	};

	// mutation counter installed at boot (see bench.mjs addInitScript)
	if (scroll) {
		sc.scrollTop = anchor;
	}
	if (window.gc) {
		window.gc();
		window.gc();
	}
	await settle(2);
	const rowH = Math.round(sc.scrollHeight / t.info().dataRows);
	const nub = sr.querySelector('cosmoz-omnitable-resize-nub');
	const w0 = nub
		? Math.round(nub.previousElementSibling.getBoundingClientRect().width)
		: 0;
	return { rowH, w0, scrollTop: Math.round(sc.scrollTop) };
};

// One measured window. Returns a sample:
// { mode, ms, activeMs, frames, maxFrameMs, longtasks, before, after }
export const benchMeasure = async ({
	mode,
	several = 10,
	widenDelta = 120,
	targetW = 0,
} = {}) => {
	const raf = () => new Promise((r) => requestAnimationFrame(r));
	const t = window.__testbed;
	const sc = t.scroller();
	const sr = t.omnitable.shadowRoot;

	// --- instrument ---
	let muts = 0;
	const mo = new MutationObserver((list) => (muts += list.length));
	mo.observe(sr, {
		childList: true,
		subtree: true,
		attributes: true,
		characterData: true,
	});
	const longs = [];
	const lto = new PerformanceObserver((l) => {
		for (const e of l.getEntries()) longs.push([e.startTime, e.duration]);
	});
	lto.observe({ entryTypes: ['longtask'] });

	const quiet = async (n, cap = 600) => {
		let q = 0;
		let last = null;
		let i = 0;
		while (q < n && i < cap) {
			await raf();
			if (muts === last) {
				q += 1;
			} else {
				q = 0;
				last = muts;
			}
			i += 1;
		}
		return i;
	};

	const firstRow = () => sr.querySelector('cosmoz-omnitable-item-row');
	const stamp = () => {
		const row = firstRow();
		const cell = row && row.querySelector(':scope > .cell');
		return {
			mountedRows: sr.querySelectorAll('cosmoz-omnitable-item-row').length,
			cellsFirstRow: row ? row.querySelectorAll(':scope > .cell').length : 0,
			firstCellWidth: cell ? Math.round(cell.getBoundingClientRect().width) : 0,
			firstId: row && row.item ? row.item.id : null,
			lastId: (() => {
				const rows = sr.querySelectorAll('cosmoz-omnitable-item-row');
				const r = rows[rows.length - 1];
				return r && r.item ? r.item.id : null;
			})(),
			scrollTop: Math.round(sc.scrollTop),
			scrollLeft: Math.round(sc.scrollLeft),
		};
	};

	// frame loop (stop by setting the flag object's property — the loop
	// yields at `await raf()` between checks)
	const frameCtl = { stopped: false };
	const frames = [];
	let prevMuts = 0;
	let prevT = performance.now();
	let lastActive = 0;
	const fl = (async () => {
		while (!frameCtl.stopped) {
			await raf();
			const now = performance.now();
			if (muts !== prevMuts) {
				lastActive = now;
				prevMuts = muts;
			}
			frames.push({ t: now, dt: now - prevT });
			prevT = now;
		}
	})();

	const measure = async (action) => {
		await quiet(2); // baseline silence inside armed observers
		const before = stamp();
		const t0 = performance.now();
		await action();
		await quiet(3);
		const t1 = performance.now();
		const after = stamp();
		const fw = frames.filter((x) => x.t >= t0);
		const dts = fw.map((x) => x.dt).slice(1);
		const lt = longs.filter(([s]) => s >= t0).map(([, d]) => d);
		return {
			mode,
			ms: t1 - t0,
			activeMs: lastActive > t0 ? lastActive - t0 : 0,
			frames: dts.length,
			maxFrameMs: dts.length ? Math.max(...dts) : 0,
			avgFrameMs: dts.length ? dts.reduce((a, b) => a + b, 0) / dts.length : 0,
			longtasks: {
				count: lt.length,
				sum: lt.length ? Math.round(lt.reduce((a, b) => a + b) * 100) / 100 : 0,
			},
			before,
			after,
		};
	};

	const fireResize = (w) => {
		const nub = sr.querySelector('cosmoz-omnitable-resize-nub');
		nub.dispatchEvent(
			new CustomEvent('column-resize', {
				bubbles: true,
				composed: true,
				detail: { newWidth: w, column: nub.column },
			})
		);
	};

	let sample;
	switch (mode) {
		case 'scroll-several':
		case 'scroll-1': {
			const rowH = Math.round(sc.scrollHeight / t.info().dataRows);
			const delta = mode === 'scroll-1' ? rowH : rowH * several;
			sample = await measure(async () => {
				sc.scrollTop += delta;
			});
			sample.rowH = rowH;
			break;
		}
		case 'jump-end': {
			sample = await measure(async () => {
				sc.scrollTop = sc.scrollHeight;
			});
			break;
		}
		case 'widen': {
			const nub = sr.querySelector('cosmoz-omnitable-resize-nub');
			const w0 = Math.round(
				nub.previousElementSibling.getBoundingClientRect().width
			);
			sample = await measure(async () => fireResize(w0 + widenDelta));
			sample.w0 = w0;
			break;
		}
		case 'narrow': {
			sample = await measure(async () => fireResize(targetW));
			break;
		}
		case 'hide': {
			let cb = null;
			sample = await measure(async () => {
				const sets = sr.querySelector('cosmoz-omnitable-settings');
				const ui =
					sets && sets.shadowRoot.querySelector('cosmoz-omnitable-settings-ui');
				cb = ui.shadowRoot.querySelector('.item input.checkbox');
				cb.click();
			});
			break;
		}
		default:
			throw new Error('unknown mode: ' + mode);
	}

	frameCtl.stopped = true;
	await fl;
	mo.disconnect();
	lto.disconnect();
	sample.muts = muts;
	return sample;
};

// Unmeasured helpers ---------------------------------------------------

export const benchHideToggleBack = async () => {
	const sr = window.__testbed.omnitable.shadowRoot;
	const raf = () => new Promise((r) => requestAnimationFrame(r));
	const sets = sr.querySelector('cosmoz-omnitable-settings');
	const ui = sets.shadowRoot.querySelector('cosmoz-omnitable-settings-ui');
	const cb = ui.shadowRoot.querySelector('.item input.checkbox');
	cb.click();
	for (let i = 0; i < 60; i++) {
		await raf(); // ~1s
	}
	return true;
};

export const benchOpenPanel = async () => {
	const sr = window.__testbed.omnitable.shadowRoot;
	const raf = () => new Promise((r) => requestAnimationFrame(r));
	const sets = sr.querySelector('cosmoz-omnitable-settings');
	const trig = sets.shadowRoot
		.querySelector('cosmoz-dropdown')
		.shadowRoot.querySelector('#dropdownButton');
	trig.click();
	for (let i = 0; i < 90; i++) {
		await raf();
	}
	const ui = sets.shadowRoot.querySelector('cosmoz-omnitable-settings-ui');
	return !!ui && ui.shadowRoot.querySelectorAll('.item').length > 0;
};

export const benchScrollTo = async (px) => {
	const raf = () => new Promise((r) => requestAnimationFrame(r));
	const sc = window.__testbed.scroller();
	sc.scrollTop = px;
	for (let i = 0; i < 90; i++) {
		await raf();
	}
	return Math.round(sc.scrollTop);
};

// Mutation counter bridge (installed once by the driver):
export const benchStartMutationCounter = () => {
	if (window.__benchMutsObserver) {
		return 'already';
	}
	let count = 0;
	const sr = window.__testbed.omnitable.shadowRoot;
	window.__benchMutsObserver = new MutationObserver((list) => {
		count += list.length;
		window.__benchMuts = count;
	});
	window.__benchMutsObserver.observe(sr, {
		childList: true,
		subtree: true,
		attributes: true,
		characterData: true,
	});
	return 'ok';
};
