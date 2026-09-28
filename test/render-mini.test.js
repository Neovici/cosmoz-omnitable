import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ensureDemoI18nInitialized,
	setDemoLanguage,
} from '../demo/helpers/i18n';
import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import { renderMini } from '../src/lib/render-mini';

/* eslint-disable mocha/no-top-level-hooks */
setup(async () => {
	await ensureDemoI18nInitialized();
	await setDemoLanguage('en');
});
/* eslint-enable mocha/no-top-level-hooks */

const miniFixture = () => html`
	<cosmoz-omnitable selection-enabled .renderItem=${renderMini}>
		<cosmoz-omnitable-column
			name="name"
			title="Name"
			value-path="name"
			mini="0"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column
			name="value"
			title="Value"
			value-path="value"
			mini="1"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column
			name="randomString"
			title="Random"
			value-path="randomString"
			mini="2"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column
			name="bool"
			title="Bool"
			value-path="bool"
		></cosmoz-omnitable-column>
	</cosmoz-omnitable>
`;

const noMiniFixture = () => html`
	<cosmoz-omnitable selection-enabled .renderItem=${renderMini}>
		<cosmoz-omnitable-column
			name="bool"
			title="Bool"
			value-path="bool"
		></cosmoz-omnitable-column>
	</cosmoz-omnitable>
`;

const customMiniFixture = () => html`
	<cosmoz-omnitable selection-enabled .renderItem=${renderMini}>
		<cosmoz-omnitable-column
			name="name"
			title="Name"
			value-path="name"
			mini="0"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column
			name="value"
			title="Value"
			value-path="value"
			mini="1"
			.renderMini=${(column) => html`<span data-mini>${column.name}</span>`}
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column
			name="bool"
			title="Bool"
			value-path="bool"
		></cosmoz-omnitable-column>
	</cosmoz-omnitable>
`;

suite('renderMini', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('renders a two-tier card: title line and meta row in mini order', async () => {
		const omnitable = await setupOmnitableFixture(
			miniFixture(),
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		const row = omnitable.shadowRoot.querySelector('.itemRow');
		assert.equal(row.tagName, 'DIV', 'card row renders');
		assert.exists(row.querySelector('[part="itemRow-wrapper"]'));

		const minis = Array.from(row.querySelectorAll('.itemRow-mini')),
			parts = minis.map((el) => el.getAttribute('part'));

		assert.lengthOf(minis, 3, 'all three mini columns render');
		assert.include(parts[0], 'item-mini-name', 'title line first');
		assert.deepEqual(
			parts.slice(1),
			['item-mini item-mini-value', 'item-mini item-mini-randomString'],
			'meta row in mini order'
		);
		assert.exists(row.querySelector('.itemRow-minis'), 'meta block present');
		assert.notExists(row.querySelector('.itemRow-cell'), 'no table cells');
	});

	test('renders through column.renderMini when provided', async () => {
		const omnitable = await setupOmnitableFixture(
			customMiniFixture(),
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();
		await nextFrame();
		await nextFrame();

		const row = omnitable.shadowRoot.querySelector('.itemRow'),
			mini = row.querySelector('[part~="item-mini-value"]');
		assert.exists(mini);
		assert.exists(mini.querySelector('[data-mini]'));
	});

	test('checkbox toggles selection', async () => {
		const omnitable = await setupOmnitableFixture(
			miniFixture(),
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		const checkbox = omnitable.shadowRoot.querySelector(
			'.itemRow input.checkbox'
		);
		checkbox.click();
		await nextFrame();
		await nextFrame();

		assert.include(omnitable.selectedItems, omnitable.data[0]);
		assert.isTrue(checkbox.checked);
	});

	test('card click dispatches omnitable-item-click; checkbox click does not', async () => {
		const omnitable = await setupOmnitableFixture(
			miniFixture(),
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		const row = omnitable.shadowRoot.querySelector('.itemRow');
		let detail;
		omnitable.addEventListener(
			'omnitable-item-click',
			(e) => (detail = e.detail),
			{ once: true }
		);

		row.click();
		await nextFrame();
		assert.exists(detail, 'item click dispatched');
		assert.equal(detail.item, omnitable.data[0]);

		detail = undefined;
		row.querySelector('input.checkbox').click();
		await nextFrame();
		assert.isUndefined(detail, 'checkbox click excluded from item click');
	});

	test('renders a checkbox-only card when no mini columns exist', async function () {
		// eslint-disable-next-line no-invalid-this
		this.timeout(10000);
		const omnitable = await setupOmnitableFixture(
			noMiniFixture(),
			generateTableDemoData(10, 11, 25)
		);

		await nextFrame();
		await nextFrame();
		await nextFrame();

		const row = omnitable.shadowRoot.querySelector('.itemRow');
		assert.exists(row, 'card renders');
		assert.exists(row.querySelector('input.checkbox'), 'checkbox present');
		assert.notExists(row.querySelector('.itemRow-minis'), 'no minis block');
	});
});
