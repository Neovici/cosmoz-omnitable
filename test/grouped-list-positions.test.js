/* eslint-disable max-lines */
/**
 * Executable specification for the omnitable list virtualizer (the renderer
 * backing `cosmoz-grouped-list`, today lit-virtualizer, next the pooled
 * recycler). The suite is black-box: nothing reaches into renderer internals,
 * so it keeps passing when the engine is swapped.
 *
 * Renderer deltas: pooled-specific invariants live in the `pooled invariants`
 * suite, gated on the pooled engine being present. Tests marked REC skip
 * against other renderers; every other test is CORE and must pass on both.
 */
import { setupIgnoreWindowResizeObserverLoopErrors } from '@lit-labs/virtualizer/support/resize-observer-errors.js';
import { assert, fixture, html, nextFrame } from '@open-wc/testing';

import '../src/grouped-list/index';

// Variable-height rows: heights alternate 40/40/80/80 (pair-aligned by id),
// so the true content height of the dataset is known exactly and the index
// a given scrollTop lands on is computable without touching the renderer.
const ITEM_COUNT = 80,
	SCROLLER_HEIGHT = 400,
	heightOf = (id) => 40 + (Math.floor(id / 2) % 2) * 40,
	offsets = (function () {
		const acc = [0];
		for (let i = 0; i < ITEM_COUNT; i++) {
			acc.push(acc[i] + heightOf(i));
		}
		return acc;
	})(),
	TOTAL_HEIGHT = offsets[ITEM_COUNT], // exact Σ heights (60px average per row)
	makeData = (ids) => ids.map((id) => ({ id, name: `item ${id}` })),
	DATA = makeData(Array.from({ length: ITEM_COUNT }, (_, id) => id)),
	renderItem = (item, index) =>
		html`<div
			class="row-content"
			style="height: ${heightOf(item.id)}px; box-sizing: border-box;"
		>
			I:${item.id}:${index}
		</div>`,
	fixtureHtml = html`<div
		class="glist-scroller"
		style="height: ${SCROLLER_HEIGHT}px; overflow-y: auto; display: block"
	>
		<cosmoz-grouped-list .renderItem=${renderItem}></cosmoz-grouped-list>
	</div>`;

// First row whose [offset, offset + height) intersects px; last row whose
// offset sits above the viewport bottom edge.
const firstIndexAt = (px) => {
		for (let i = 0; i < ITEM_COUNT; i++) {
			if (offsets[i] + heightOf(i) > px) {
				return i;
			}
		}
		return ITEM_COUNT;
	},
	lastIndexBelow = (px) => {
		for (let i = ITEM_COUNT - 1; i >= 0; i--) {
			if (offsets[i] < px) {
				return i;
			}
		}
		return -1;
	},
	// overhang tolerance: an engine may (and does) mount buffer rows on
	// either side of the viewport (a ~1000px overhang ≈ 17 rows at 60px
	// average here); 30 rows bounds both renderers
	BUFFER = 30;

const rowsVisibleInViewport = (list, scroller, rows) => {
	const viewportTop = scroller.getBoundingClientRect().top,
		viewportBottom = viewportTop + scroller.clientHeight;
	return rows.filter(
		(row) => row.top < viewportBottom && row.top + row.height > viewportTop,
	);
};

/**
 * Quiescence barrier: waits until the mounted-row snapshot, scrollTop and
 * scrollHeight stop changing for several frames. Only observable DOM state
 * (text, geometry, visibility) is polled — no renderer internals.
 */
const settle = async (scroller, list, budget = 40) => {
	const state = () => {
		const snapshot = [];
		for (const row of list.querySelectorAll('cosmoz-grouped-list-row')) {
			const rect = row.getBoundingClientRect();
			snapshot.push(
				`${row.textContent}|${rect.top.toFixed(1)}|${rect.height.toFixed(1)}|${row.style.visibility}`,
			);
		}
		return JSON.stringify([
			scroller.scrollTop,
			scroller.scrollHeight,
			snapshot,
		]);
	};
	let prev = state(),
		stable = 0;
	for (let i = 0; i < budget && stable < 4; i++) {
		await nextFrame();
		await nextFrame();
		const cur = state();
		stable = cur === prev ? stable + 1 : 0;
		prev = cur;
	}
	await nextFrame();
	assert.isTrue(
		stable >= 4,
		'list layout settles within the poll budget (the engine keeps mutating the DOM)',
	);
};

const rafOnce = () => new Promise((resolve) => requestAnimationFrame(resolve));

/** A few frames to let a data assignment or scroll reach the engine. */
const breathe = async () => {
	await nextFrame();
	await nextFrame();
};

const // a row is mounted when its slot actually carries rendered content; idle
	// pooled slots are hidden (and contentless) and must not count
	mountedRows = (list) =>
		Array.from(list.querySelectorAll('cosmoz-grouped-list-row')).filter(
			(row) =>
				row.textContent.includes('I:') && row.style.visibility !== 'hidden',
		),
	// a row carries a binding (also covered-but-offscreen pooled rows that
	// hold real content while hidden) — the engine's measured set
	boundRows = (list) =>
		Array.from(list.querySelectorAll('cosmoz-grouped-list-row')).filter((row) =>
			row.textContent.includes('I:'),
		),
	entryOf = (row) => {
		const rect = row.getBoundingClientRect(),
			match = row.textContent.match(/I:(\d+):(\d+)/u);
		return {
			id: Number(match[1]),
			index: Number(match[2]),
			top: rect.top,
			height: rect.height,
			el: row,
			text: row.textContent,
		};
	},
	entries = (list) =>
		mountedRows(list)
			.map(entryOf)
			.sort((a, b) => a.index - b.index),
	viewWindow = (scrollTop, clientHeight) => [
		firstIndexAt(scrollTop),
		lastIndexBelow(scrollTop + clientHeight),
	];

suite('grouped-list virtualizer contract', function () {
	/* eslint-disable-next-line no-invalid-this */
	this.timeout(30000);
	setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

	let wrapper, element, scroller;

	const mount = async (data = DATA) => {
		wrapper = await fixture(fixtureHtml);
		element = wrapper.querySelector('cosmoz-grouped-list');
		scroller = wrapper;
		element.data = data;
		await breathe();
		for (let i = 0; i < 60 && mountedRows(element).length === 0; i++) {
			await breathe();
		}
		assert.isNotEmpty(
			mountedRows(element),
			'initial data renders its first rows within the warmup budget',
		);
		await settle(scroller, element);
		return element;
	};

	suite('scrolled contract (CORE)', () => {
		test('1 · initial render mounts only a bounded window; the rest is absent, not hidden', async () => {
			await mount();
			const rows = entries(element),
			cap = Math.ceil((scroller.clientHeight + 2 * 1000) / 40);
			// cap = the viewport plus a ~1-viewport buffer each side (both
			// engines hold roughly that: lit's ~1000px overhang, the pooled
			// recycler's overscan rows) - generous, still far below the data
			assert.isNotEmpty(rows, 'initial render mounts the top window');
			assert.isAtMost(
				rows.length,
				cap,
				`only a bounded window may be in the DOM (mounted ${rows.length}, cap ${cap})`,
			);
			assert.isBelow(
				rows.length,
				ITEM_COUNT,
				'unmounted data must be absent from the DOM, not merely hidden',
			);
		});

		test('2 · mounted text maps to the expected index window for a given scrollTop', async () => {
			await mount();
			scroller.scrollTop = 2000;
			await breathe();
			await settle(scroller, element);
			const rows = entries(element),
				[first, last] = viewWindow(2000, scroller.clientHeight);
			assert.isNotEmpty(rows, 'a landed viewport renders rows');
			assert.isAtLeast(
				rows[0].index,
				first - BUFFER,
				`mounted window must not sit far above the landed range [${first}, ${last}]`,
			);
			assert.isAtMost(
				rows[rows.length - 1].index,
				last + BUFFER,
				`mounted window must not sit far below the landed range [${first}, ${last}]`,
			);
			assert.isAtMost(
				rows[0].index,
				first + 1,
				'the landed viewport is covered from its top edge',
			);
			assert.isAtLeast(
				rows[rows.length - 1].index,
				last - 1,
				'the landed viewport is covered up to its bottom edge',
			);
		});

		test('3 · scrolling to a new position replaces the mounted content', async () => {
			await mount();
			assert.isAtMost(
				entries(element)[0].index,
				2,
				'precondition: the initial window sits at the top of the data',
			);
			// the very bottom: far enough that buffer/overhang rows (~1000px on
			// lit, overscan rows on the recycler) cannot legally still hold
			// the old top-of-list rows
			scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;
			await breathe();
			await settle(scroller, element);
			const rows = entries(element),
				// a row more than ~1 viewport + the ~1000px buffer both engines
				// may legally still hold, is stale content
				staleTops = rows.filter(
					(row) => offsets[row.index] < scroller.scrollTop - 1100,
				);
			assert.isEmpty(
				staleTops,
				`rows of the previous window are unmounted: found ${staleTops
					.slice(0, 4)
					.map((row) => row.text)
					.join(', ')}`,
			);
			assert.equal(
				rows[rows.length - 1].id,
				ITEM_COUNT - 1,
				'the new position mounts its own rows (the bottom of the data)',
			);
		});

		test('4 · re-scrolling to a previously visited position re-renders identical content', async () => {
			await mount();
			const originally = entries(element).map((row) => row.id);
			scroller.scrollTop = 4000;
			await breathe();
			await settle(scroller, element);
			const away = entries(element).map((row) => row.id);
			assert.isEmpty(
				away.filter((id) => originally.includes(id)),
				'the away position shows different rows',
			);
			scroller.scrollTop = 0;
			await breathe();
			await settle(scroller, element);
			assert.deepEqual(
				entries(element).map((row) => row.id),
				originally,
				'content is rebuilt identical when the position is re-visited',
			);
		});

		test('5 · a same-length data swap updates mounted rows at unchanged positions (freeze guard)', async () => {
			await mount();
			scroller.scrollTop = 1000;
			await breathe();
			await settle(scroller, element);
			element.data = makeData(
				Array.from({ length: ITEM_COUNT }, (_, i) => i + 1000),
			);
			await breathe();
			await settle(scroller, element);
			const rows = entries(element),
				[first, last] = viewWindow(1000, scroller.clientHeight),
				landed = rows.filter((row) => row.index >= first && row.index <= last);
			assert.isNotEmpty(landed, 'the swap leaves the viewport populated');
			for (const row of landed) {
				assert.isAtLeast(
					row.id,
					1000,
					`mounted rows must show the NEW dataset items (${row.text} is stale content)`,
				);
			}
		});

		test('6 · a shorter array swap unmounts overhang, clamps scrollTop and never blanks the viewport', async () => {
			await mount();
			scroller.scrollTop = 3000;
			await breathe();
			await settle(scroller, element);
			element.data = makeData(Array.from({ length: 20 }, (_, i) => i + 500));
			await breathe();
			await settle(scroller, element);
			const rows = entries(element);
			assert.isEmpty(
				rows.filter((row) => row.id > 519),
				'rows beyond the shorter dataset are unmounted',
			);
			// Σ heights of 20 rows = TOTAL/4 = 1200; engines estimate unvisited
			// rows from their running average, so allow a little slack
			assert.isAtMost(
				scroller.scrollTop,
				TOTAL_HEIGHT / 4 - scroller.clientHeight + 10,
				'scrollTop clamps onto the shrunken dataset',
			);
			assert.closeTo(
				scroller.scrollHeight,
				TOTAL_HEIGHT / 4,
				100,
				'scrollHeight reflects the shorter dataset',
			);
			assert.isNotEmpty(
				rowsVisibleInViewport(element, scroller, rows),
				'the viewport never stays blank after the clamp',
			);
		});

		test('7 · a longer array swap grows scrollHeight and binds further rows', async () => {
			await mount();
			scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;
			await breathe();
			await settle(scroller, element);
			const beforeScrollHeight = scroller.scrollHeight,
				rowsBefore = entries(element),
				lastBefore = rowsBefore[rowsBefore.length - 1];
			assert.equal(
				lastBefore.id,
				ITEM_COUNT - 1,
				'precondition: the bottom of the original data is reachable',
			);
			element.data = makeData(
				Array.from({ length: ITEM_COUNT * 2 }, (_, id) => id + 4000),
			);
			await breathe();
			await settle(scroller, element);
			assert.isAbove(
				scroller.scrollHeight,
				beforeScrollHeight,
				'scrollHeight grows for the longer dataset',
			);
			scroller.scrollTop = scroller.scrollHeight - scroller.clientHeight;
			await breathe();
			await settle(scroller, element);
			const rows = entries(element);
			assert.equal(
				rows[rows.length - 1].id,
				3999 + ITEM_COUNT * 2,
				'the window binds the further rows of the longer dataset',
			);
		});

		test('8 · a long jump in one go covers the landing rows and leaves no hole', async () => {
			await mount();
			const maxBeforeJump = scroller.scrollHeight - scroller.clientHeight;
			scroller.scrollTop += 5000;
			await breathe();
			await settle(scroller, element);
			const clampedRows = entries(element),
				[first, last] = viewWindow(scroller.scrollTop, scroller.clientHeight);
			assert.isAtLeast(
				scroller.scrollTop,
				maxBeforeJump - 1,
				'scrollTop clamps at the end of the dataset',
			);
			assert.isNotEmpty(
				clampedRows.filter((row) => row.index >= first && row.index <= last),
				'landing rows of the clamped jump are mounted',
			);
			scroller.scrollTop = 0;
			await breathe();
			await settle(scroller, element);
			scroller.scrollTop += 2500;
			await breathe();
			await settle(scroller, element);
			const indexes = entries(element).map((row) => row.index);
			assert.isNotEmpty(indexes, 'a mid-list jump mounts rows');
			for (let i = 1; i < indexes.length; i++) {
				assert.equal(
					indexes[i],
					indexes[i - 1] + 1,
					`mounted indexes are contiguous after a jump, no holes: [${indexes}]`,
				);
			}
		});

		test('9 · a flick burst (several increments in one frame) keeps the window whole', async () => {
			await mount();
			scroller.scrollTop += 200;
			scroller.scrollTop += 200;
			scroller.scrollTop += 200;
			scroller.scrollTop += 200;
			await rafOnce();
			await settle(scroller, element);
			const indexes = entries(element).map((row) => row.index),
				[first, last] = viewWindow(scroller.scrollTop, scroller.clientHeight);
			assert.isNotEmpty(indexes, 'rows are mounted after the burst');
			assert.isNotEmpty(
				entries(element).filter(
					(row) => row.index >= first && row.index <= last,
				),
				'the final position after the burst renders its rows',
			);
			for (let i = 1; i < indexes.length; i++) {
				assert.equal(
					indexes[i],
					indexes[i - 1] + 1,
					`no holes in the mounted window after a flick burst: [${indexes}]`,
				);
			}
		});

		test('10 · adjacent mounted rows never overlap and leave no gap', async () => {
			await mount();
			for (let step = 0; step <= 6; step++) {
				const rows = entries(element);
				assert.isNotEmpty(
					rows,
					`rows mounted at scrollTop ${scroller.scrollTop}`,
				);
				for (let i = 0; i + 1 < rows.length; i++) {
					const gap = rows[i + 1].top - (rows[i].top + rows[i].height);
					assert.isAtLeast(
						gap,
						-1,
						`no vertical overlap between ${rows[i].text} and ${rows[i + 1].text}`,
					);
					assert.isAtMost(
						gap,
						1,
						`no vertical hole between ${rows[i].text} and ${rows[i + 1].text}`,
					);
				}
				scroller.scrollTop += 150;
				await breathe();
				await settle(scroller, element);
			}
		});

		test('11 · once every row was visited, total scrollHeight equals the real content height', async () => {
			await mount();
			for (
				let top = 0;
				top <= scroller.scrollHeight - scroller.clientHeight;
				top += 350
			) {
				scroller.scrollTop = top;
				await breathe();
				await settle(scroller, element);
			}
			scroller.scrollTop = scroller.scrollHeight;
			await breathe();
			await settle(scroller, element);
			assert.closeTo(
				scroller.scrollHeight,
				TOTAL_HEIGHT,
				1,
				'scrollHeight converges on the exact sum of the measured row heights once all rows were visited',
			);
		});

		test('12 · visibilityChanged reports the data-index window for the new position', async () => {
			await mount();
			const events = [],
				listener = (e) =>
					events.push({
						first: e.first ?? e.detail?.first,
						last: e.last ?? e.detail?.last,
					});
			element.addEventListener('visibilityChanged', listener);
			scroller.scrollTop = 600;
			await breathe();
			await settle(scroller, element);
			element.removeEventListener('visibilityChanged', listener);
			const [first, last] = viewWindow(600, scroller.clientHeight);
			assert.isNotEmpty(
				events,
				'visibilityChanged fires when the visible range changes',
			);
			const payload = events[events.length - 1];
			assert.closeTo(
				payload.last,
				last,
				1,
				`the last visibilityChanged payload is in data-index terms: last ${payload.last} vs ${last}`,
			);
			assert.closeTo(
				payload.first,
				first,
				1,
				`the last visibilityChanged payload is in data-index terms: first ${payload.first} vs ${first}`,
			);
		});

		test('14 · empty and single-item data are safe corner cases', async () => {
			await mount();
			element.data = [];
			await breathe();
			await settle(scroller, element);
			assert.equal(
				mountedRows(element).length,
				0,
				'no rows are rendered for empty data',
			);
			element.data = makeData([321]);
			await breathe();
			await settle(scroller, element);
			const rows = entries(element);
			assert.equal(rows.length, 1, 'a single row suffices');
			assert.equal(rows[0].id, 321, 'the single row renders its item');
		});

		test('15 · a viewport resize grows the mounted span and stays within the bounded window', async () => {
			await mount();
			const indicesBefore = entries(element).map((row) => row.index),
				spanBefore =
					indicesBefore[indicesBefore.length - 1] - indicesBefore[0] + 1;
			scroller.style.height = '600px';
			// renderer delta: the pooled engine re-measures its window on the
			// next scroll frame; a 1px nudge is the quiescence trigger (lit
			// re-flows on the resize itself)
			scroller.scrollTop += 1;
			await breathe();
			await settle(scroller, element);
			const indices = entries(element).map((row) => row.index),
				spanAfter = indices[indices.length - 1] - indices[0] + 1,
				cap = Math.ceil(600 / 40) * 3;
			assert.isAbove(
				spanAfter,
				spanBefore,
				'a taller viewport renders a wider index span',
			);
			assert.isAtMost(
				mountedRows(element).length,
				cap,
				'row count stays bounded after the resize',
			);
		});

		test('16 · a viewport resize while scrolled keeps rows in ascending document order (replaces DOM-order white-box test)', async () => {
			await mount();
			scroller.scrollTop = 1500;
			await breathe();
			await settle(scroller, element);
			scroller.style.height = '260px';
			await breathe();
			await settle(scroller, element);
			scroller.style.height = '600px';
			await breathe();
			await settle(scroller, element);
			const order = entries(element).map((row) => row.index);
			assert.isNotEmpty(order, 'rows are mounted while scrolled and resized');
			for (let i = 1; i < order.length; i++) {
				assert.isAtLeast(
					order[i],
					order[i - 1] + 1,
					`document order maps to ascending data-index order: [${order}]`,
				);
			}
		});
	});

	suite('inline contract (CORE)', () => {
		test('13 · without a scroller every item renders, none hidden', async () => {
			const wrapper = await fixture(
					html`<div style="display: block">
						<cosmoz-grouped-list
							.data=${makeData(Array.from({ length: 8 }, (_, id) => id + 700))}
							.renderItem=${renderItem}
						></cosmoz-grouped-list>
					</div>`,
				),
				element = wrapper.querySelector('cosmoz-grouped-list');
			await nextFrame();
			await settle(wrapper, element);
			const rows = entries(element);
			assert.equal(
				rows.length,
				8,
				'all items are rendered when no scroller is around (inline mode)',
			);
			for (const row of rows) {
				assert.notEqual(
					row.el.style.visibility,
					'hidden',
					`no row is hidden in inline mode: ${row.text}`,
				);
			}
		});
	});

	suite('pooled invariants (REC — pooled recycler only)', function () {
		/* eslint-disable-next-line no-invalid-this */
		this.timeout(30000);
		setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

		// The pooled recycler keeps a persistent element pool inside its own
		// viewport wrapper; other renderers don't. REC tests are renderer
		// deltas and skip with an explicit note against other renderers.
		const hasPooledDom = (list) =>
			list.querySelector('.glist-recycler-viewport') != null;

		test('17 · pool elements keep their physical identity while their index bindings churn', async function () {
			const list = await mount();
			if (!hasPooledDom(list)) {
				/* eslint-disable-next-line no-invalid-this */
				this.skip();
			}
			const idOf = (el) =>
					el.textContent.includes('I:')
						? Number(el.textContent.match(/I:(\d+):(\d+)/u)[1])
						: null,
				before =
					[...list.querySelectorAll('cosmoz-grouped-list-row')],
				bindings = new Map(before.map((el) => [el, idOf(el)]));
			assert.isNotEmpty(before, 'precondition: pool elements present');
			scroller.scrollTop += 100;
			await breathe();
			await settle(scroller, list);
			const after = [...list.querySelectorAll('cosmoz-grouped-list-row')];
			for (const el of before) {
				assert.include(
					after,
					el,
					'pool elements keep their physical identity across a slide (no node churn)',
				);
			}
			// The exact rebind cadence (which slot takes which entering index at
		// which margin) is engine strategy, not an observable - the identity
		// retention above plus the pool-cap invariant (REC 18) carry that
		// value: no nodes are born or dropped, and the pool does not grow.
		});

		test('18 · the row pool stays within ceil(viewport/minRow) + 2*overScan + 1 elements', async function () {
			const list = await mount();
			if (!hasPooledDom(list)) {
				/* eslint-disable-next-line no-invalid-this */
				this.skip();
			}
			// cap = ceil(400px viewport / 40px smallest measured row)
			//   + 2 × 12-row overscan + 1
			const cap = Math.ceil(SCROLLER_HEIGHT / 40) + 2 * 12 + 1;
			for (const target of [0, 4400, 0]) {
				scroller.scrollTop = target;
				await breathe();
				await settle(scroller, list);
				const poolSize = list.querySelectorAll(
					'cosmoz-grouped-list-row',
				).length;
				assert.isAtMost(
					poolSize,
					cap,
					`the element pool must not grow with travel distance (got ${poolSize}, cap ${cap})`,
				);
			}
		});

		test('19 · unmeasured rows are estimated with the running measured average', async function () {
			const list = await mount();
			if (!hasPooledDom(list)) {
				/* eslint-disable-next-line no-invalid-this */
				this.skip();
			}
			// the engine's measured set at this point is exactly the set of
			// bound rows (covered window, offscreen included); all of them
			// carry their real rendered height in the DOM
			const rows = boundRows(list).map(entryOf),
				k = rows.length;
			assert.isNotEmpty(rows, 'precondition: an initial window is bound');
			const measuredSum = rows.reduce((sum, row) => sum + row.height, 0),
				avg = measuredSum / k,
				expected = measuredSum + avg * (ITEM_COUNT - k);
			assert.closeTo(
				scroller.scrollHeight,
				expected,
				2,
				`scrollHeight must equal Σ(measured) + avg(measured) × unmeasured (got ${scroller.scrollHeight}, expected ${expected.toFixed(2)})`,
			);
		});

		test('20 · focus is restored into a still-visible row when the focused row scrolls out', async function () {
			const wrapper = await fixture(
					html`<div
						class="glist-scroller"
						style="height: ${SCROLLER_HEIGHT}px; overflow-y: auto; display: block"
					>
						<cosmoz-grouped-list
							.data=${DATA}
							.renderItem=${(item, index) =>
								html`<div style="height: ${heightOf(item.id)}px">
									<input aria-label="row ${item.id}" />
									I:${item.id}:${index}
								</div>`}
						></cosmoz-grouped-list>
					</div>`,
				),
				list = wrapper.firstElementChild;
			scroller = wrapper;
			element = list;
			if (!hasPooledDom(list)) {
				/* eslint-disable-next-line no-invalid-this */
				this.skip();
			}
			scroller.scrollTop = 2400;
			await breathe();
			await settle(scroller, list);
			const rowsBefore = entries(list),
				focusRow = rowsBefore[Math.floor(rowsBefore.length / 2)],
				input = focusRow.el.querySelector('input');
			input.focus();
			assert.equal(
				document.activeElement,
				input,
				'precondition: the row input holds focus',
			);
			scroller.scrollTop += 800;
			await breathe();
			await settle(scroller, list);
			const active = document.activeElement,
				host = active?.closest?.('cosmoz-grouped-list-row') ?? null;
			assert.notEqual(
				active,
				document.body,
				'focus must not fall to <body> when the focused row scrolls out',
			);
			assert.isNotNull(host, 'focus is restored into a row element');
			assert.isTrue(
				mountedRows(list).includes(host),
				'the restored focus target is a still-mounted row',
			);
		});
	});
});
