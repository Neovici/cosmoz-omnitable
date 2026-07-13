import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import {
	applyMultiFilter,
	getString,
	listColumnMixin,
} from '../src/cosmoz-omnitable-column-list-mixin';
import { applySingleFilter } from '../src/cosmoz-omnitable-column-mixin';
import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import { columnSymbol } from '../src/lib/use-dom-columns';

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

suite('list data collapse behavior', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable id="omnitable" selection-enabled>
					<cosmoz-omnitable-column-list name="list" value-path="list">
					</cosmoz-omnitable-column-list>
				</cosmoz-omnitable>
			`,
			[{ list: ['item 1', 'item 2', 'item 3'] }],
		);

		await rowVisible();
	});

	test('collapsed view hides secondary items when list has more than two items', async () => {
		const listData = omnitable.shadowRoot.querySelector(
			'.itemRow-cell cosmoz-omnitable-column-list-data',
		);
		assert.exists(listData);

		const getVisibleSecondaryItems = () =>
			Array.from(listData.shadowRoot.querySelectorAll('span.item')).map(
				(item) => item.textContent.trim(),
			);

		const seeMore = listData.shadowRoot.querySelector('.see-more');
		const seeLess = listData.shadowRoot.querySelector('.see-less');

		assert.deepEqual(getVisibleSecondaryItems(), []);
		assert.isFalse(seeMore.hasAttribute('hidden'));
		assert.isTrue(seeLess.hasAttribute('hidden'));

		seeMore.querySelector('a').click();
		await nextFrame();

		assert.deepEqual(getVisibleSecondaryItems(), ['item 2', 'item 3']);
		assert.isTrue(seeMore.hasAttribute('hidden'));
		assert.isFalse(seeLess.hasAttribute('hidden'));

		seeLess.querySelector('a').click();
		await nextFrame();

		assert.deepEqual(getVisibleSecondaryItems(), []);
		assert.isFalse(seeMore.hasAttribute('hidden'));
		assert.isTrue(seeLess.hasAttribute('hidden'));
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

suite('primitive value-path with text/value properties', () => {
	test('getString returns primitive string when textProperty is set', () => {
		const column = { valuePath: 'priority', textProperty: 'key' };
		assert.equal(getString(column, { priority: 'Normal' }), 'Normal');
	});

	test('getString returns primitive number when textProperty is set', () => {
		const column = { valuePath: 'amount', textProperty: 'key' };
		assert.equal(getString(column, { amount: 42 }), '42');
	});

	test('getString returns primitive values from array when textProperty is set', () => {
		const column = { valuePath: 'tags', textProperty: 'key' };
		assert.equal(getString(column, { tags: ['a', 'b', 'c'] }), 'a, b, c');
	});

	test('applyMultiFilter matches primitive value when valueProperty is set', () => {
		const column = { valuePath: 'priority', valueProperty: 'value' };
		assert.isTrue(
			applyMultiFilter(column, [{ key: 'Normal', value: 'Normal' }])({
				priority: 'Normal',
			}),
		);
	});

	test('applyMultiFilter does not match different primitive value when valueProperty is set', () => {
		const column = { valuePath: 'priority', valueProperty: 'value' };
		assert.isFalse(
			applyMultiFilter(column, [{ key: 'High', value: 'High' }])({
				priority: 'Normal',
			}),
		);
	});
});

suite('mixin class getComparableValue', () => {
	const ListColumnClass = listColumnMixin(class {});
	const instance = new ListColumnClass();

	test('returns primitive value when valueProperty is set and value-path is primitive string', () => {
		assert.equal(
			instance.getComparableValue(
				{ valuePath: 'priority', valueProperty: 'value' },
				{ priority: 'Normal' },
			),
			'Normal',
		);
	});

	test('returns primitive value when valueProperty is set and value-path is primitive number', () => {
		assert.equal(
			instance.getComparableValue(
				{ valuePath: 'amount', valueProperty: 'value' },
				{ amount: 42 },
			),
			'42',
		);
	});

	test('returns value directly when valueProperty is null', () => {
		assert.equal(
			instance.getComparableValue(
				{ valuePath: 'priority', valueProperty: null },
				{ priority: 'Normal' },
			),
			'Normal',
		);
	});

	test('reads valueProperty from object values', () => {
		assert.equal(
			instance.getComparableValue(
				{ valuePath: 'group', valueProperty: 'value' },
				{ group: { name: 'Grupp 0', value: 'group0' } },
			),
			'group0',
		);
	});

	test('joins array of primitive values when valueProperty is set', () => {
		assert.equal(
			instance.getComparableValue(
				{ valuePath: 'tags', valueProperty: 'value' },
				{ tags: ['a', 'b'] },
			),
			'a b',
		);
	});

	test('reads valueProperty from each object in array', () => {
		assert.equal(
			instance.getComparableValue(
				{ valuePath: 'groups', valueProperty: 'id' },
				{
					groups: [
						{ id: 'g2', name: 'B' },
						{ id: 'g1', name: 'A' },
					],
				},
			),
			'g1 g2',
		);
	});
});

suite('deserializeFilter', () => {
	let instance;

	setup(() => {
		const MyClass = listColumnMixin(class {});
		instance = new MyClass();
	});

	test('deserializes valid encoded JSON filter', () => {
		const filter = encodeURIComponent(
			JSON.stringify([{ id: 'item1', label: 'Item 1' }]),
		);
		assert.deepEqual(instance.deserializeFilter({}, filter), [
			{ id: 'item1', label: 'Item 1' },
		]);
	});

	test('handles null filter', () => {
		assert.isNull(instance.deserializeFilter({}, null));
	});

	test('handles undefined filter', () => {
		assert.isNull(instance.deserializeFilter({}, undefined));
	});

	test('returns null on truncated URL with non-ASCII characters', () => {
		// Real scenario from FE-935: "Aktiebolaget Allt i Plåt" URL-encoded
		// Full: [{"id":"supplier","label":"Aktiebolaget Allt i Plåt"}]
		// Truncated mid-escape-sequence: ...Pl%C3%A
		const full = '[{"id":"supplier","label":"Aktiebolaget Allt i Pl%C3%A5t"}]';
		const truncated = full.slice(0, -2); // cuts off "t", leaving "Pl%C3%A"
		const result = instance.deserializeFilter({}, truncated);
		assert.isNull(result);
	});

	test('returns null on malformed percent-escape sequence', () => {
		const malformed = '[{"id":"supplier","label":"%E0%A4%A"}]';
		const result = instance.deserializeFilter({}, malformed);
		assert.isNull(result);
	});

	test('returns null on truncated JSON', () => {
		const truncated = encodeURIComponent('[{ "id": "item1", "label": "Item ');
		const result = instance.deserializeFilter({}, truncated);
		assert.isNull(result);
	});

	test('returns null on invalid JSON', () => {
		const invalid = encodeURIComponent('not valid json');
		const result = instance.deserializeFilter({}, invalid);
		assert.isNull(result);
	});
});
