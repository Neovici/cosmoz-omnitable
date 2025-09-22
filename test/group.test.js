import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';
import { generateTableDemoData } from '../demo/table-demo-helper';

import '../src/cosmoz-omnitable.js';
import '../src/cosmoz-omnitable-columns.js';

suite('id', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, data;

	setup(async () => {
		data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable group-on="id" .resizeSpeedFactor=${1}>
					<cosmoz-omnitable-column
						title="Id"
						name="id"
						value-path="id"
						sort-on="id"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			data,
		);
	});

	test('groupOn id', () => {
		assert.equal(omnitable.groupOn, 'id');
		const groupOnColumn = omnitable.groupOnColumn;
		assert.equal(typeof groupOnColumn, 'object');
		assert.equal(
			groupOnColumn.name,
			'id',
			'Expected "groupOnColumn" to be the column that matches "groupOn" value',
		);
		assert.equal(groupOnColumn, omnitable.columns[0]);
	});

	test('groupOnDescending true for id column changes order of items', async () => {
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

		omnitable.setGroupOnDescending(true);
		await nextFrame();
		const gItems = omnitable.sortedFilteredGroupedItems;
		assert.equal(gItems[0].id, idx);
		assert.equal(gItems[idx - 1].id, 1);
		assert.equal(gItems[idx].id, 0);
	});
});

suite('bool', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, data;

	setup(async () => {
		data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable group-on="bool">
					<cosmoz-omnitable-column
						title="Id"
						name="id"
						value-path="id"
						sort-on="id"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column-boolean
						title="Boolean"
						name="bool"
						value-path="bool"
						sort-on="bool"
						group-on="bool"
						true-label="Yes"
						false-label="No"
					>
					</cosmoz-omnitable-column-boolean>
					<cosmoz-omnitable-column-number
						title="Value"
						name="value"
						value-path="value"
						sort-on="value"
					>
					</cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`,
			data,
		);
	});

	test('groupOnDescending true for boolean column changes order of items', async () => {
		assert.equal(omnitable.groupOn, 'bool');
		assert.equal(omnitable.groupOnColumn.name, 'bool');
		assert.equal(omnitable.groupOnColumn, omnitable.columns[1]);

		const first = omnitable.sortedFilteredGroupedItems[0],
			idx = omnitable.sortedFilteredGroupedItems.length - 1,
			last = omnitable.sortedFilteredGroupedItems[idx];
		assert.equal(first.id, true);
		assert.equal(last.id, false);

		omnitable.setGroupOnDescending(true);
		await nextFrame();
		assert.equal(omnitable.sortedFilteredGroupedItems[0].id, false);
		assert.equal(omnitable.sortedFilteredGroupedItems[idx].id, true);
	});
});

suite('amount', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, data;

	setup(async () => {
		data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable group-on="id">
					<cosmoz-omnitable-column
						title="Id"
						name="id"
						value-path="id"
						sort-on="id"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column-amount
						title="Amount"
						name="amount"
						value-path="amount"
						sort-on="amount"
					>
					</cosmoz-omnitable-column-amount>
				</cosmoz-omnitable>
			`,
			data,
		);
	});

	test('setting groupOn property to "amount" updates property groupOnColumn', async () => {
		omnitable.setGroupOn('amount');
		await nextFrame();
		const groupOnColumn = omnitable.groupOnColumn;
		assert.equal(typeof groupOnColumn, 'object');
		assert.equal(
			groupOnColumn.name,
			'amount',
			'Expected "groupOnColumn" to be the column that matches "groupOn" value',
		);
		assert.equal(groupOnColumn, omnitable.columns[1]);
	});
});
