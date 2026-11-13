import { setupIgnoreWindowResizeObserverLoopErrors } from '@lit-labs/virtualizer/support/resize-observer-errors.js';
import { assert, fixture, html, nextFrame } from '@open-wc/testing';

import '../src/grouped-list/index';

// Variable-height rows: every row's content height differs, so the first
// ResizeObserver measurement round shifts the prefix away from the
// bind-time defaults. The recycler must re-place still-bound slots when
// measured heights change — otherwise rows overlap / leave gaps.
const renderItem = (item, index) => html`
		<div
			class="row-content"
			style="height: ${40 + (Math.floor(item.id / 2) % 2) * 40}px; box-sizing: border-box;"
		>
			I:${item.id}:${index}
		</div>
	`,
	fixtureHtml = html`
		<div style="height: 300px; overflow-y: auto; display: block">
			<cosmoz-grouped-list .renderItem=${renderItem}></cosmoz-grouped-list>
		</div>
	`,
	DATA = Array.from({ length: 80 }, (_, id) => ({ id }));

const rafOnce = () => new Promise((r) => requestAnimationFrame(r));
const settle = async () => {
	// poll until the recycler state stops changing (bounded)
	const rec = window.__rec;
	assert.isOk(rec, 'recycler debug instance (window.__rec) available');
	const state = () =>
		JSON.stringify([
			rec._pool.map((s) => s.bound ?? -1),
			rec._prefix.length,
			rec._prefix[rec._items.length],
			rec._canvas.style.transform,
			rec._pumpCount ?? 0,
		]);
	let prev = state(),
		stable = 0;
	for (let i = 0; i < 120 && stable < 4; i++) {
		await nextFrame();
		await nextFrame();
		const cur = state();
		stable = cur === prev ? stable + 1 : 0;
		prev = cur;
	}
	await nextFrame();
};

const boundSlots = () => {
	const rec = window.__rec;
	assert.isOk(rec, 'recycler debug instance (window.__rec) available');
	const clip = rec._clip;
	assert.isOk(clip, 'clip (viewport wrapper) present');
	const clipTop = clip.getBoundingClientRect().top,
		scrollTop = rec._scroller.scrollTop;
	return rec._pool
		.filter(
			(slot) => slot.bound != null && slot.el.style.visibility !== 'hidden',
		)
		.map((slot) => ({
			idx: slot.bound,
			want: clipTop + rec._offset(slot.bound) - scrollTop,
			got: slot.el.getBoundingClientRect().top,
			off: rec._offset(slot.bound),
		}));
};

const assertPositions = (tag) => {
	const slots = boundSlots();
	assert.isNotEmpty(slots, `${tag}: has bound slots`);
	const bad = slots
		.filter((s) => Math.abs(s.want - s.got) > 1)
		.map(
			(s) =>
				`idx:${s.idx} off:${s.off} want:${Math.round(s.want)} got:${Math.round(s.got)}`,
		);
	assert.isEmpty(
		bad,
		`${tag}: ${bad.length} misplaced slots → ${bad.slice(0, 6).join('; ')}`,
	);
};

suite('variable-height positions', function () {
	/* eslint-disable-next-line no-invalid-this */
	this.timeout(20000);
	setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

	let element;

	setup(async () => {
		const wrapper = await fixture(fixtureHtml);
		element = wrapper.querySelector('cosmoz-grouped-list');
		element.data = DATA;
		await settle();
	});

	test('slots sit at their prefix offsets on first measurement', () => {
		assertPositions('initial');
	});

	test('no row overlaps while scrolling by steps', async () => {
		const rec = window.__rec,
			sc = rec._scroller,
			scan = () => {
				const slots = rec._pool
					.filter(
						(slot) =>
							slot.bound != null && slot.el.style.visibility !== 'hidden',
					)
					.map((slot) => ({
						idx: slot.bound,
						top: slot.el.getBoundingClientRect().top,
						h: slot.el.getBoundingClientRect().height,
					}))
					.sort((a, b) => a.idx - b.idx);
				const bad = [];
				for (let i = 0; i + 1 < slots.length; i++) {
					if (slots[i + 1].idx !== slots[i].idx + 1) {
						continue; // adjacent indexes only
					}
					const gap = slots[i + 1].top - (slots[i].top + slots[i].h);
					if (gap < -1 || gap > 1) {
						bad.push(
							`idx${slots[i].idx}/idx${slots[i + 1].idx} gap:${Math.round(gap)}`,
						);
					}
				}
				return bad;
			};
		let roCalls = 0,
			delivCount = 0;
		const origOn = rec._onResize;
		rec._onResize = (ents) => {
			roCalls += 1;
			delivCount += ents?.length ?? 0;
			return origOn.call(rec, ents);
		};
		sc.scrollTop = 0;
		await settle();
		for (let k = 1; k <= 24; k++) {
			sc.scrollTop += 100;
			await settle();
			const bad = scan();
			if (bad.length === 0) {
				continue;
			}
			const d = bad[0].match(/idx(\d+)\/idx(\d+)/u),
				probe = (idx) => {
					const s = rec._pool.find((x) => x.bound === Number(idx));
					return s
						? `elH:${Math.round(s.el.getBoundingClientRect().height)} slotH:${s.h ?? 'null'} hm:${rec._heights[idx] ?? 'def'} m:${rec._measured[idx] ?? 0}`
						: 'unbound';
				};
			assert.isEmpty(
				bad,
				`step ${k} (${sc.scrollTop}px): ${bad.slice(0, 4).join('; ')}` +
					` | diag: ${d[1]}=[${probe(d[1])}] ${d[2]}=[${probe(d[2])}]` +
					` roCalls:${roCalls} deliv:${delivCount}`,
			);
		}
	});

	test('pool spans in measured row heights, not a hardcoded floor', async () => {
		const rec = window.__rec;
		await settle();
		const pool = rec._pool.length;
		// viewport 300px, measured minimum row height 40 (the fixture's
		// smallest), 12-row cushion on each side: span = ceil(300/40) + 24
		assert.isAtMost(
			pool,
			Math.ceil(300 / 40) + 24 + 1,
			`pool must be sized by the measured minimum (got ${pool})`,
		);
		// away and back: the pool must not grow past the same span
		rec._scroller.scrollTop = 4000;
		await settle();
		rec._scroller.scrollTop = 0;
		await settle();
		assert.isAtMost(
			rec._pool.length,
			Math.ceil(300 / 40) + 24 + 1,
			`pool must not grow after roundtrip (got ${rec._pool.length})`,
		);
	});

	test('unknown rows are estimated with the running measured average', async () => {
		// the prefix contribution of a row we have never seen must be the
		// exact mean of all real measurements, not a hardcoded default
		const rec = window.__rec,
			{ _scroller: sc, _prefix: prefix, _heights: heights } = rec,
			n = rec._items.length;
		await settle();
		// snapshot after settle, jump far (all rows beyond the initial window
		// are unknown except the landing window, which binds with real
		// measures), and verify the algebraic identity on the current state
		sc.scrollTop = sc.scrollHeight;
		await rafOnce();
		await rafOnce();
		let sum = 0,
			count = 0;
		for (let i = 0; i < n; i++) {
			if (rec._measured[i]) {
				sum += heights[i] ?? 0;
				count++;
			}
		}
		assert.isAbove(count, 0, 'landing window rows are measured');
		const avg = sum / count;
		const expected = sum + avg * (n - count);
		const got = prefix[n] ?? 0;
		assert.closeTo(
			got,
			expected,
			0.5,
			`unmeasured rows estimated at avg ${avg.toFixed(2)} — got ${got} total (expected ${expected.toFixed(2)})`,
		);
	});

	test('measured heights never regress (total dips test)', async () => {
		// once a row has a real measured height its entry must never go
		// DOWN during/after scrolling (that was the expanded-row
		// oscillation bug: a total dip meant a row losing its height
		// state). The total itself may legitimately shift while the
		// running average converges — the per-index rule is the invariant.
		const rec = window.__rec,
			{ _scroller: sc, _heights: heights, _measured: measured } = rec,
			n = rec._items.length;
		sc.scrollTop = 0;
		await settle();
		const before = Array.from(heights).map((v2, i) =>
			measured[i] ? v2 : null,
		);
		for (let k = 1; k <= 24; k++) {
			sc.scrollTop += 100;
			await rafOnce();
		}
		await settle();
		for (let i = 0; i < n; i++) {
			if (before[i] == null) {
				continue;
			}
			assert.isAtLeast(
				heights[i],
				before[i] - 0.5,
				`row ${i}: measured height regressed ${before[i]} -> ${heights[i]}`,
			);
		}
	});

	test('slots sit at their prefix offsets after scrolling away and back', async () => {
		const rec = window.__rec,
			sc = rec._scroller;
		sc.scrollTop = 4000; // beyond the data span → every slot unbinds+rebinds
		await settle();
		sc.scrollTop = 0;
		await settle();
		assertPositions('roundtrip');
	});
});
