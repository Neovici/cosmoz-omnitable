import {
	assert, html
} from '@open-wc/testing';

import { setupOmnitableFixture } from './helpers/utils';
import { generateTableDemoData } from '../demo/table-demo-helper';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

suite('id', () => {
	let omnitable,
		data;

	setup(async () => {
		data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable class="flex" group-on="id">
				<cosmoz-omnitable-column title="Id" name="id" value-path="id" sort-on="id">
					<template class="cell">
						<a href="#!/purchase/suppliers/view?id=[[ item.id ]]">[[ item.id ]]</a>
					</template>
				</cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`, data);
	});

	test('groupOn id', () => {
		assert.equal(omnitable.groupOn, 'id');
		const groupOnColumn = omnitable.groupOnColumn;
		assert.equal(typeof groupOnColumn, 'object');
		assert.equal(groupOnColumn.constructor.name, 'OmnitableColumn');
		assert.equal(groupOnColumn.name, 'id', 'Expected "groupOnColumn" to be the column that matches "groupOn" value');
		assert.equal(groupOnColumn, omnitable.columns[0]);
	});

	test('groupOnDescending true for id column changes order of items', () => {
		const items = omnitable.sortedFilteredGroupedItems;
		assert.isArray(items);
		assert.isObject(items[0]);

		const first = items[0],
			second = items[1],
			idx = items.length - 1, // index of last item
			last = items[idx];

		assert.equal(first.id, 0);
		assert.equal(second.id, 1);
		assert.equal(last.id, idx);

		omnitable.groupOnDescending = true;
		omnitable.flush();
		const gItems = omnitable.sortedFilteredGroupedItems;
		assert.equal(gItems[0].id, idx);
		assert.equal(gItems[idx - 1].id, 1);
		assert.equal(gItems[idx].id, 0);
	});
});

suite('bool', () => {
	let omnitable,
		data;

	setup(async () => {
		data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable class="flex" group-on="bool">
				<cosmoz-omnitable-column title="Id" name="id" value-path="id" sort-on="id">
					<template class="cell">
						<a href="#!/purchase/suppliers/view?id=[[ item.id ]]">[[ item.id ]]</a>
					</template>
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-column-boolean title="Boolean" name="bool" value-path="bool" sort-on="bool" group-on="bool"
					true-label="Yes" false-label="No">
				</cosmoz-omnitable-column-boolean>
				<cosmoz-omnitable-column-number title="Value" name="value" value-path="value" sort-on="value">
				</cosmoz-omnitable-column-number>
			</cosmoz-omnitable>
		`, data);
	});

	test('groupOnDescending true for boolean column changes order of items', () => {
		assert.equal(omnitable.groupOn, 'bool');
		assert.equal(omnitable.groupOnColumn.name, 'bool');
		assert.equal(omnitable.groupOnColumn, omnitable.columns[1]);

		const first = omnitable.sortedFilteredGroupedItems[0],
			idx = omnitable.sortedFilteredGroupedItems.length - 1,
			last = omnitable.sortedFilteredGroupedItems[idx];
		assert.equal(first.id, true);
		assert.equal(last.id, false);

		omnitable.groupOnDescending = true;
		omnitable.flush();
		assert.equal(omnitable.sortedFilteredGroupedItems[0].id, false);
		assert.equal(omnitable.sortedFilteredGroupedItems[idx].id, true);
	});
});

suite('amount', () => {
	let omnitable,
		data;

	setup(async () => {
		data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable class="flex" group-on="amount">
				<cosmoz-omnitable-column-amount title="Amount" name="amount" value-path="amount" sort-on="amount">
				</cosmoz-omnitable-column-amount>
			</cosmoz-omnitable>
		`, data);
	});

	test('setting groupOn property to "amount" updates property groupOnColumn', () => {
		omnitable.groupOn = 'amount';
		omnitable.flush();
		const groupOnColumn = omnitable.groupOnColumn;
		assert.equal(typeof groupOnColumn, 'object');
		assert.equal(groupOnColumn.constructor.name, 'OmnitableColumnAmount');
		assert.equal(groupOnColumn.name, 'amount', 'Expected "groupOnColumn" to be the column that matches "groupOn" value');
		assert.equal(groupOnColumn, omnitable.columns[0]);
	});
});