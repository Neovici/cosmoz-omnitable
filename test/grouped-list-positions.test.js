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
			style="height: ${40 + (item.id % 5) * 20}px; box-sizing: border-box;"
		>
			I:${item.id}:${index}
		</div>
	`,
	fixtureHtml = html`
		<div style="height: 300px; overflow-y: auto; display: block">
			<cosmoz-grouped-list .renderItem=${renderItem}></cosmoz-grouped-list>
		</div>
	`,
	DATA = Array.from({ length: 40 }, (_, id) => ({ id }));

const nextEvent = (element, eventName) =>
	new Promise((resolve) =>
		element.addEventListener(eventName, resolve, { once: true }),
	);

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

const boundSlots = (element) => {
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

const assertPositions = (element, tag) => {
	const slots = boundSlots(element);
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
		assertPositions(element, 'initial');
	});

	test('slots sit at their prefix offsets after scrolling away and back', async () => {
		const rec = window.__rec,
			sc = rec._scroller;
		sc.scrollTop = 4000; // beyond the data span → every slot unbinds+rebinds
		await settle();
		sc.scrollTop = 0;
		await settle();
		assertPositions(element, 'roundtrip');
	});
});
