import { assert, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import '../src/cosmoz-omnitable.js';
import { contentConfig, isEmptyValue } from '../src/lib/column-layout.ts';
import { computeLayout } from '../src/lib/compute-layout.ts';

suite('content-aware omnitable layout', () => {
	let previousError;
	setup(() => {
		previousError = window.onerror;
		window.onerror = (...args) =>
			args[0] ===
			'ResizeObserver loop completed with undelivered notifications.'
				? false
				: previousError?.(...args);
	});
	teardown(() => {
		window.onerror = previousError;
	});
	test('shrinks content before collapsing and never overflows the available canvas', () => {
		const columns = [0, 1, 2].map((index) => ({
			name: String(index),
			index,
			width: 300,
			minWidth: 100,
			flex: 1,
			priority: 0,
		}));
		const widths = computeLayout(columns, 400, 3, true);
		assert.equal(widths.filter((width) => width != null).length, 3);
		assert.closeTo(
			widths.reduce((sum, width) => sum + (width ?? 0), 0),
			400,
			0.01
		);
		assert.deepEqual(computeLayout(columns, 80, 3, true), [
			undefined,
			undefined,
			80,
		]);
		assert.equal(columns[0].width, 300);
	});

	test('keeps header minimums and manual widths without persisting automatic state', () => {
		const saved = [
			{ name: 'a', width: 220, minWidth: 40, flex: 0, priority: 0 },
		];
		const result = contentConfig(
			saved,
			new Map([['a', { header: 120, content: 300 }]]),
			true,
			new Set(['a'])
		);
		assert.equal(result[0].width, 220);
		assert.equal(result[0].minWidth, 120);
		assert.isTrue(result[0].hidden);
		assert.notProperty(saved[0], 'hidden');
		assert.equal(saved[0].minWidth, 40);
	});

	test('zero, false and objects are content', () => {
		[0, false, {}, { amount: 0 }, ['']].forEach((value) =>
			assert.isFalse(isEmptyValue(value))
		);
		[null, undefined, '', '  ', []].forEach((value) =>
			assert.isTrue(isEmptyValue(value))
		);
	});

	const table = () =>
		fixture(html` <cosmoz-omnitable
			auto-size
			hide-empty-columns
			style="display:block;width:700px;height:350px;font:18px Arial;font-variant-numeric:tabular-nums"
		>
			<cosmoz-omnitable-column
				name="a"
				title="A longer column heading"
				width="60px"
				flex="0"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="b"
				title="Description"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="empty"
				title="Optional"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="zero"
				title="Zero"
			></cosmoz-omnitable-column>
		</cosmoz-omnitable>`);
	const width = (el, name) =>
		el.shadowRoot
			.querySelector(`.header .cell[name="${name}"]`)
			?.getBoundingClientRect().width ?? 0;
	const ready = (el) => waitUntil(() => width(el, 'a') > 100);

	test('keeps server-filtered and custom-rendered columns discoverable', async () => {
		const el = await fixture(html` <cosmoz-omnitable
			auto-size
			hide-empty-columns
			data-complete
			style="display:block;width:700px;height:350px"
		>
			<cosmoz-omnitable-column
				name="a"
				title="A longer column heading"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="filtered"
				title="Filtered"
				no-local-filter
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="custom"
				title="Action"
				.renderCell=${() => html`<button>Edit</button>`}
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="known"
				title="Known empty"
				.renderCell=${() => ''}
				.isEmpty=${() => true}
			></cosmoz-omnitable-column>
		</cosmoz-omnitable>`);
		el.data = [{ a: 'A' }];
		await ready(el);
		await waitUntil(() => width(el, 'known') === 0);
		el.querySelector('[name="filtered"]').filter = 'empty';
		await waitUntil(() => width(el, 'filtered') > 0);
		assert.isAbove(width(el, 'filtered'), 0);
		assert.isAbove(width(el, 'custom'), 0);
	});

	test('restores automatic columns when data arrives or becomes incomplete', async () => {
		const el = await table();
		el.data = [{ a: 'A', b: 'B', zero: 0 }];
		el.dataComplete = true;
		await ready(el);
		await waitUntil(() => width(el, 'empty') === 0);
		el.data = [{ a: 'A', b: 'B', empty: 'Populated', zero: 0 }];
		await waitUntil(() => width(el, 'empty') > 0);
		el.data = [{ a: 'A', b: 'B', zero: 0 }];
		await waitUntil(() => width(el, 'empty') === 0);
		el.dataComplete = false;
		await waitUntil(() => width(el, 'empty') > 0);
	});

	test('fits headers, hides only complete empty columns, restores later values and allows user reveal', async () => {
		const el = await table();
		el.data = [
			{ a: 'A', b: 'A useful long description', empty: null, zero: 0 },
		];
		await ready(el);
		const canvas = document.createElement('canvas').getContext('2d');
		canvas.font = '18px Arial';
		assert.isAtLeast(
			width(el, 'a'),
			Math.ceil(canvas.measureText('A longer column heading').width + 34)
		);
		assert.isAbove(
			width(el, 'empty'),
			0,
			'incomplete data must not hide columns'
		);
		el.dataComplete = true;
		await waitUntil(() => width(el, 'empty') === 0);
		assert.isAbove(width(el, 'zero'), 0);
		const settings = el.shadowRoot.querySelector('cosmoz-omnitable-settings');
		assert.include(
			settings.config.autoHidden.map((column) => column.name),
			'empty'
		);
		const ui = settings.shadowRoot.querySelector(
			'cosmoz-omnitable-settings-ui'
		);
		await waitUntil(
			() => !!ui.shadowRoot?.querySelector('[data-index="2"] input')
		);
		ui.shadowRoot.querySelector('[data-index="2"] input').click();
		await waitUntil(() => width(el, 'empty') > 0);
		assert.isTrue(
			settings.config.settings.columns.find((column) => column.name === 'empty')
				.showWhenEmpty
		);
		el.data = [{ a: 'B', b: 'Another', empty: 'Now populated', zero: false }];
		await nextFrame();
		assert.isAbove(width(el, 'empty'), 0);
	});

	test('reserves the expand control while shrinking the viewport', async () => {
		const el = await table();
		el.data = [
			{
				a: 'A',
				b: 'Very long description '.repeat(20),
				empty: 'Present',
				zero: 0,
			},
		];
		await ready(el);
		el.style.width = '380px';
		await waitUntil(() => !!el.shadowRoot.querySelector('button.expand'));
		await waitUntil(() => width(el, 'empty') === 0);
		const button = el.shadowRoot.querySelector('button.expand');
		assert.isAtMost(
			button.getBoundingClientRect().right,
			el.getBoundingClientRect().right
		);
		button.click();
		await waitUntil(
			() => !!el.shadowRoot.querySelector('cosmoz-omnitable-item-expand')
		);
	});
});
