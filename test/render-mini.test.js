/* eslint-disable no-empty-function */
import { expect, fixture, html } from '@open-wc/testing';

import { renderMini } from '../src/lib/render-mini';
import { indexSymbol } from '../src/lib/utils';

const column = (name, mini) => ({
		name,
		title: name,
		mini,
		cellTitleFn: () => name,
		valuePath: name,
		renderCell: (c, { item }) => html`<span>${item[c.valuePath]}</span>`,
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
	item = { [indexSymbol]: 0, name: 'Foo', value: 1, overridden: 'x' },
	params = {
		selected: true,
		expanded: false,
		toggleSelect() {},
		toggleCollapse() {},
		columns: [
			column('name', 0),
			renderMiniColumn,
			column('value', 2),
			column('bool', null),
		],
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
		const el = await fixture(html`<div>${renderMini(item, 0, params)}</div>`);
		await expect(el).to.equalSnapshot();
	});
});
