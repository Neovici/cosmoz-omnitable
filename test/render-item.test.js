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
import { columnSymbol } from '../src/lib/use-dom-columns';

/* eslint-disable mocha/no-top-level-hooks */
setup(async () => {
	await ensureDemoI18nInitialized();
	await setDemoLanguage('en');
});
/* eslint-enable mocha/no-top-level-hooks */

const customRow = (item, index, params) => html`
	<custom-row
		class="itemRow"
		data-marker="renderItem"
		data-selected=${params.selected ? 'true' : 'false'}
		data-index=${index}
	>
		<button data-select @click=${() => params.toggleSelect(!params.selected)}>
			Select
		</button>
	</custom-row>
`;

const customGroup = (group, index, params) => html`
	<custom-group class="groupRow" data-folded=${params.folded}>
		<button data-select @click=${() => params.toggleSelect(!params.selected)}>
			Select
		</button>
		<button data-fold @click=${() => params.toggleFold()}>Fold</button>
	</custom-group>
`;

const singleColumnFixture = () =>
	html`
		<cosmoz-omnitable selection-enabled>
			<cosmoz-omnitable-column
				name="name"
				title="Name"
				value-path="name"
			></cosmoz-omnitable-column>
		</cosmoz-omnitable>
	`;

suite('renderItem seam', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('default path unchanged when renderItem is not set', async () => {
		const omnitable = await setupOmnitableFixture(
				singleColumnFixture(),
				generateTableDemoData(10, 11, 25)
			),
			list = omnitable.shadowRoot.querySelector('cosmoz-grouped-list');

		await rowVisible();

		assert.isNotEmpty(
			omnitable.shadowRoot.querySelectorAll('.itemRow'),
			'rows render'
		);
		assert.exists(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row'),
			'default item-row element renders'
		);
		assert.exists(
			omnitable.shadowRoot.querySelector('.itemRow .checkbox'),
			'default checkbox renders'
		);
		assert.isFunction(list.renderItem);
		assert.isFunction(list.renderGroup);
	});

	test('custom renderItem replaces the entire row', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable selection-enabled .renderItem=${customRow}>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		const row = omnitable.shadowRoot.querySelector('.itemRow');
		assert.exists(row, 'custom row renders');
		assert.equal(row.tagName, 'CUSTOM-ROW');
		assert.equal(row.getAttribute('data-marker'), 'renderItem');
		assert.notExists(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row'),
			'no default item-row'
		);
		assert.notExists(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-expand'),
			'no default expand block'
		);
		assert.notExists(
			omnitable.shadowRoot.querySelector(
				'.itemRow > .itemRow-wrapper > input.checkbox'
			),
			'no default checkbox'
		);
	});

	test('selection via params.toggleSelect updates selectedItems', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable selection-enabled .renderItem=${customRow}>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		const row = omnitable.shadowRoot.querySelector('.itemRow');
		row.querySelector('button[data-select]').click();
		await nextFrame();
		await nextFrame();
		await nextFrame();

		assert.include(omnitable.selectedItems, omnitable.data[0]);
		assert.equal(
			omnitable.shadowRoot
				.querySelector('.itemRow')
				.getAttribute('data-selected'),
			'true'
		);

		omnitable.shadowRoot
			.querySelector('.itemRow')
			.querySelector('button[data-select]')
			.click();
		await nextFrame();
		await nextFrame();
		await nextFrame();
		assert.deepEqual(omnitable.selectedItems, []);
	});

	test('params carry omnitable data and wiring', async () => {
		const seen = [];
		const probe = (item, index, params) => {
			if (seen.length === 0) {
				seen.push(params);
			}
			return customRow(item, index, params);
		};
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable selection-enabled .renderItem=${probe}>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		assert.lengthOf(seen, 1);
		const params = seen[0];
		assert.isArray(params.columns);
		assert.deepEqual(
			params.columns.map((c) => c.name),
			omnitable.columns.map((c) => c.name)
		);
		assert.exists(params.columns[0][columnSymbol], 'normalized columns');
		assert.isArray(params.collapsedColumns);
		assert.isFunction(params.onItemClick);
		assert.isFunction(params.onCheckboxChange);
		assert.isTrue(params.dataIsValid);
	});

	test('custom renderGroup replaces group rows, items still dispatch to renderItem', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					selection-enabled
					group-on="name"
					.renderItem=${customRow}
					.renderGroup=${customGroup}
				>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await nextFrame();
		await nextFrame();
		await nextFrame();
		await nextFrame();

		const groupRow = omnitable.shadowRoot.querySelector('.groupRow');
		assert.equal(groupRow.tagName, 'CUSTOM-GROUP');
		assert.exists(
			omnitable.shadowRoot.querySelector('custom-row'),
			'items dispatch to renderItem'
		);
		assert.notExists(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-group-row'),
			'no default group row element'
		);
	});

	test('group checkbox selects all contained items via params', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					selection-enabled
					group-on="name"
					.renderItem=${customRow}
					.renderGroup=${customGroup}
				>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await nextFrame();
		await nextFrame();
		await nextFrame();
		await nextFrame();

		const groupRow = omnitable.shadowRoot.querySelector('.groupRow');
		groupRow.querySelector('button[data-select]').click();
		await nextFrame();
		await nextFrame();

		const selected = omnitable.selectedItems,
			group = omnitable.sortedFilteredGroupedItems[0];
		assert.isArray(selected);
		selected.forEach((item) => assert.equal(item.name, group.name));
		assert.equal(
			selected.length,
			group.items.length,
			'all group items selected'
		);
	});

	test('toggleFold flips folded state and hides contained items', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					selection-enabled
					group-on="name"
					.renderItem=${customRow}
					.renderGroup=${customGroup}
				>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await nextFrame();
		await nextFrame();
		await nextFrame();
		await nextFrame();

		const groupRow = omnitable.shadowRoot.querySelector('.groupRow');
		assert.equal(groupRow.getAttribute('data-folded'), 'false');

		groupRow.querySelector('button[data-fold]').click();
		await nextFrame();
		await nextFrame();

		const foldedRow = omnitable.shadowRoot.querySelector('.groupRow');
		assert.equal(foldedRow.getAttribute('data-folded'), 'true');
	});

	test('stable references: identity changes only with the host fn', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable selection-enabled .renderItem=${customRow}>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		const list = omnitable.shadowRoot.querySelector('cosmoz-grouped-list'),
			before = list.renderItem,
			beforeGroup = list.renderGroup;
		omnitable.data = [...omnitable.data].reverse();
		await nextFrame();
		await nextFrame();
		assert.strictEqual(list.renderItem, before, 'stable across data churn');
		assert.strictEqual(
			list.renderGroup,
			beforeGroup,
			'group identity stable across data churn'
		);

		omnitable.renderItem = customRow;
		await nextFrame();
		assert.strictEqual(list.renderItem, before, 'same fn, same identity');

		omnitable.renderItem = (item, index, params) =>
			customRow(item, index, params);
		await nextFrame();
		assert.notStrictEqual(list.renderItem, before, 'new fn, new identity');

		omnitable.renderItem = null;
		await nextFrame();
		await nextFrame();
		assert.exists(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row'),
			'null restores the default row'
		);
		assert.notStrictEqual(
			list.renderItem,
			before,
			'default row identity differs from override'
		);
		assert.strictEqual(
			list.renderGroup,
			beforeGroup,
			'renderItem swap leaves renderGroup untouched'
		);
	});
});

suite('mini dormancy gate', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('renderItem set keeps old mini mode dormant', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					selection-enabled
					mini-breakpoint="9999"
					.renderItem=${customRow}
				>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
						mini="0"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await rowVisible();

		assert.isFalse(omnitable.hasAttribute('mini'), 'no [mini] attr');
		assert.exists(
			omnitable.shadowRoot.querySelector('custom-row'),
			'override renders'
		);
	});
});
