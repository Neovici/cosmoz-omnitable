/* eslint-disable no-empty-function */
import { assert, expect, fixture, html, nextFrame } from '@open-wc/testing';

import { generateTableDemoData } from '../demo/table-demo-helper';
import { renderGroup } from '../src/lib/render-group';
import { renderItem } from '../src/lib/render-item';
import { indexSymbol } from '../src/lib/utils';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const column = {
		name: 'name',
		title: 'Name',
		cellTitleFn: () => 'Name',
		renderCell: (c, { item }) => html`<span>${item[c.valuePath]}</span>`,
	},
	item = { [indexSymbol]: 3, name: 'Foo' },
	itemParams = {
		selected: true,
		expanded: false,
		toggleSelect() {},
		toggleCollapse() {},
		columns: [column],
		collapsedColumns: [column],
		miniColumns: [],
		onItemClick() {},
		onCheckboxChange() {},
		onItemChange: () => () => {},
		rowPartFn: () => 'custom-part',
		groupOnColumn: undefined,
		dataIsValid: true,
	};

suite('render-item renderers', () => {
	test('renderItem', async () => {
		const el = await fixture(
			html`<div>${renderItem(item, 0, itemParams)}</div>`
		);
		await expect(el).to.equalSnapshot();
	});

	test('renderGroup', async () => {
		const el = await fixture(
			html`<div>
				${renderGroup({ [indexSymbol]: 1, items: [item] }, 0, {
					...itemParams,
					folded: false,
					toggleFold() {},
					groupOnColumn: column,
				})}
			</div>`
		);
		await expect(el).to.equalSnapshot();
	});
});

suite('renderItem on the omnitable', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('override renders, toggleSelect selects, null restores, mini stays dormant', async () => {
		const customRow = (item, index, params) =>
				html`<custom-row
					class="itemRow"
					data-index=${index}
					?data-selected=${params.selected}
				>
					<button
						data-select
						@click=${() => params.toggleSelect(!params.selected)}
					>
						Select
					</button>
				</custom-row>`,
			omnitable = await setupOmnitableFixture(
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

		await nextFrame();
		await nextFrame();

		const row = omnitable.shadowRoot.querySelector('.itemRow');
		assert.equal(
			row.getAttribute('data-index'),
			String(omnitable.data[0][indexSymbol])
		);
		assert.isFalse(omnitable.hasAttribute('mini'), 'mini stays dormant');
		assert.exists(row.querySelector('[data-select]'), 'override renders');

		row.querySelector('[data-select]').click();
		await nextFrame();
		await nextFrame();
		await nextFrame();
		assert.include(omnitable.selectedItems, omnitable.data[0]);
		assert.equal(
			omnitable.shadowRoot
				.querySelector('.itemRow')
				.getAttribute('data-selected'),
			'',
			'row re-rendered with selected=true'
		);

		omnitable.shadowRoot
			.querySelector('.itemRow')
			.querySelector('[data-select]')
			.click();
		await nextFrame();
		await nextFrame();
		await nextFrame();
		assert.deepEqual(omnitable.selectedItems, []);

		omnitable.renderItem = null;
		await nextFrame();
		await nextFrame();
		assert.exists(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row'),
			'null restores the built-in row'
		);
	});

	test('compact property reflects to attribute', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable .compact=${true}>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		assert.isTrue(omnitable.hasAttribute('compact'), '[compact] reflected');
	});
});
