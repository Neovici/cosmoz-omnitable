import { assert, html } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';
import { applySingleFilter } from '../cosmoz-omnitable-column-mixin';
import {
	applyMultiFilter,
	getString,
} from '../cosmoz-omnitable-column-list-mixin';
import { columnSymbol } from '../lib/use-dom-columns';

suite('basic', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, column, data;

	setup(async () => {
		data = [{ list: ['item 1', 'item 2', 'item 3'] }];
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					id="omnitable"
					selection-enabled
					.resizeSpeedFactor=${1}
				>
					<cosmoz-omnitable-column-list name="list" value-path="list">
					</cosmoz-omnitable-column-list>
				</cosmoz-omnitable>
			`,
			data,
		);

		column = omnitable.columns[0][columnSymbol];
	});

	test('initializes list column', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnList');
	});

	test('it does not set a filter by default', () => {
		assert.isUndefined(omnitable.filters.list);
	});
});

suite('horizontal', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, column, data;

	setup(async () => {
		data = [{ list: ['item 1', 'item 2', 'item 3'] }];
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable id="omnitable" selection-enabled>
					<cosmoz-omnitable-column-list-horizontal
						name="list"
						value-path="list"
					>
					</cosmoz-omnitable-column-list-horizontal>
					<cosmoz-omnitable-column-list-horizontal
						name="list-editable"
						value-path="list"
						editable
					>
					</cosmoz-omnitable-column-list-horizontal>
				</cosmoz-omnitable>
			`,
			data,
		);
		column = omnitable.columns[0][columnSymbol];
	});

	test('basic render', async () => {
		await rowVisible();
		const cells = Array.from(
			omnitable.shadowRoot.querySelectorAll('.itemRow-cell'),
		);
		assert.lengthOf(cells, 2);
		assert.include(cells[0].innerText, 'item 1item 2item 3');
	});

	test('initializes list column', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnListHorizontal');
	});

	test('it does not set a filter by default', () => {
		assert.isUndefined(omnitable.filters['list']);
		assert.isUndefined(omnitable.filters['list-editable']);
	});
});

suite('pure functions', () => {
	const column = { valuePath: 'list' };

	test('_applySingleFilter returns true if filterString is equal to value', () => {
		assert.isTrue(
			applySingleFilter(
				column,
				'abc',
			)({
				list: 'abc',
				some: 'data',
			}),
		);
	});
	test('_applySingleFilter returns false if filterString is not equal to value', () => {
		assert.isFalse(
			applySingleFilter(
				column,
				'abc',
			)({
				list: 'def',
				some: 'data',
			}),
		);
	});

	test('_applySingleFilter returns true if filterString is equal to value despite extra space characters added', () => {
		assert.isTrue(
			applySingleFilter(
				column,
				' abc ',
			)({
				list: 'abc',
				some: 'data',
			}),
		);
	});

	test('_applySingleFilters handles null', () => {
		assert.isFalse(applySingleFilter(column, 'abc')(undefined));
		assert.isFalse(applySingleFilter(column, undefined)(undefined));
	});

	test('_applyMultiFilter works', () => {
		assert.isTrue(
			applyMultiFilter(column, [123, 456])({ list: [123, 345, 678] }),
		);
	});

	test('getString returns values', () => {
		assert.equal(
			getString(column, { list: ['123', '345', '678'] }),
			'123, 345, 678',
		);
	});
});
