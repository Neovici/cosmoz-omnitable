import { assert, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import '../src/cosmoz-omnitable.js';
import { isEmptyValue } from '../src/lib/column-layout.ts';

suite('empty-column visibility', () => {
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
	const ready = (el) => waitUntil(() => width(el, 'a') > 0);

	test('keeps server-filtered and custom-rendered columns discoverable', async () => {
		const el = await fixture(html` <cosmoz-omnitable
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

	test('hides only complete empty columns, restores later values and allows user reveal', async () => {
		const el = await table();
		el.data = [
			{ a: 'A', b: 'A useful long description', empty: null, zero: 0 },
		];
		await ready(el);
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
});
