import {
	assert, html
} from '@open-wc/testing';

import { setupOmnitableFixture } from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

suite('basic', () => {
	let column,
		data;

	setup(async () => {
		data = [
			{ list: ['item 1', 'item 2', 'item 3']}
		];
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" class="flex" selection-enabled>
				<cosmoz-omnitable-column-list name="list" value-path="list">
				</cosmoz-omnitable-column-list>
			</cosmoz-omnitable>
		`, data);

		column = omnitable.columns[0];
	});

	test('initializes list column', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnList');
	});

	test('_getDefaultFilter returns []', () => {
		assert.isTrue(Array.isArray(column.filter));
		assert.equal(column.filter.length, 0);
		assert.isTrue(Array.isArray(column._getDefaultFilter()));
		assert.equal(column._getDefaultFilter().length, 0);
	});

	test('_applySingleFilter returns true if filterString is equal to value', () => {
		assert.isTrue(column._applySingleFilter('abc', {
			list: 'abc',
			some: 'data'
		}));
	});
	test('_applySingleFilter returns false if filterString is not equal to value', () => {
		assert.isFalse(column._applySingleFilter('abc', {
			list: 'def',
			some: 'data'
		}));
	});

	test('_applySingleFilters handles null', () => {
		assert.isFalse(column._applySingleFilter('abc'));
		assert.isFalse(column._applySingleFilter());
	});

	test('_applyMultiFilter works', () => {
		assert.isTrue(column._applyMultiFilter([123, 456], { list: [123, 345, 678]}));
	});
});

suite('horizontal', () => {
	let column,
		data;

	setup(async () => {
		data = [
			{ list: ['item 1', 'item 2', 'item 3']}
		];
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" class="flex" selection-enabled>
				<cosmoz-omnitable-column-list-horizontal name="list" value-path="list">
				</cosmoz-omnitable-column-list-horizontal>
			</cosmoz-omnitable>
		`, data);
		column = omnitable.columns[0];
	});

	test('initializes list column', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnListHorizontal');
	});

	test('_getDefaultFilter returns []', () => {
		assert.isTrue(Array.isArray(column.filter));
		assert.equal(column.filter.length, 0);
		assert.isTrue(Array.isArray(column._getDefaultFilter()));
		assert.equal(column._getDefaultFilter().length, 0);
	});

	test('_applySingleFilter returns true if filterString is equal to value', () => {
		assert.isTrue(column._applySingleFilter('abc', {
			list: 'abc',
			some: 'data'
		}));
	});
	test('_applySingleFilter returns false if filterString is not equal to value', () => {
		assert.isFalse(column._applySingleFilter('abc', {
			list: 'def',
			some: 'data'
		}));
	});

	test('_applySingleFilters handles null', () => {
		assert.isFalse(column._applySingleFilter('abc'));
		assert.isFalse(column._applySingleFilter());
	});

	test('_applyMultiFilter works', () => {
		assert.isFalse(column._applyMultiFilter([123, 456], { list: ['123', '345', '678']}));
	});

	test('getString returns values', () => {
		column.textProperty = null;
		assert.equal(column.getString({ list: ['123', '345', '678']}), '123, 345, 678');
	});

	test('returns the value of an item', () => {
		column.valueProperty = 'id';
		assert.strictEqual(column.getComparableValue({ id: 13 }, 'id'), 13);
		assert.isUndefined(column.getComparableValue({}, 'nonexisting-path'));
	});
});
