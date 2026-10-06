/* eslint-disable no-empty-function */
import { expect, fixture, html } from '@open-wc/testing';

import { renderMini } from '../src/lib/render-mini';

const column = (name, mini) => ({
		name,
		title: name,
		mini,
		cellTitleFn: () => name,
		valuePath: name,
		renderCell: (_c, { item, index }) =>
			html`<span>${item[name]} #${index}</span>`,
	}),
	renderMiniColumn = {
		name: 'overridden',
		title: 'overridden',
		mini: 1,
		cellTitleFn: () => 'overridden',
		valuePath: 'overridden',
		renderCell: () => html`<span>cell</span>`,
		renderMini: () => html`<span>mini</span>`,
	},
	item = { name: 'Foo', value: 1, overridden: 'x' },
	params = {
		selected: true,
		expanded: false,
		toggleSelect() {},
		toggleCollapse() {},
		columns: [column('name', 0), renderMiniColumn, column('value', 2)],
		collapsedColumns: [],
		miniColumns: [],
		onItemClick() {},
		onCheckboxChange() {},
		onItemChange: () => () => {},
		groupOnColumn: undefined,
		dataIsValid: true,
	};

suite('render-mini', () => {
	test('renderMini', async () => {
		const el = await fixture(html`<div>${renderMini(item, 5, params)}</div>`);
		await expect(el).to.equalSnapshot();
	});
});
