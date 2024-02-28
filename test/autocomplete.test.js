/* eslint-disable max-lines */
import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../cosmoz-omnitable.js';
import { getComparableValue } from '../cosmoz-omnitable-column-autocomplete.js';
import '../cosmoz-omnitable-column.js';
import {
	unique,
	computeSource,
	toAutocompleteSource,
	toXlsxValue,
	getString,
	applyMultiFilter,
} from '../cosmoz-omnitable-column-list-mixin';
import { applySingleFilter } from '../cosmoz-omnitable-column-mixin';

const data = [
	{
		id: 0,
		group: 'group0',
		name: 'Item 0',
	},
	{
		id: 1,
		group: 'group0',
		name: 'Item 1',
	},
	{
		id: 2,
		group: 'group1',
		name: 'Item 2',
	},
	{
		id: 3,
		group: 'group1',
		name: 'Item 3',
	},
];

suite('pure functions', () => {
	test('getComparableValue returns the correct value, given a path', () => {
		assert.equal(
			getComparableValue(
				{ valuePath: 'id' },
				{
					id: 14,
					group: 'group0',
					name: 'Item 14',
				},
			),
			14,
		);
		assert.equal(
			getComparableValue(
				{ valuePath: 'id' },
				{
					id: 345,
					group: 'group7',
					name: 'Item 345',
				},
			),
			345,
		);
		assert.equal(
			getComparableValue(
				{ valuePath: 'name' },
				{
					id: 27,
					group: 'group5',
					name: 'Item 27',
				},
			),
			'Item 27',
		);
	});

	test('getString handles undefined valuePath parameter', () => {
		assert.equal(
			getString(
				{ valuePath: 'id' },
				{
					id: 70,
					group: 'group0',
					name: 'Item 0',
				},
			),
			70,
		);
		assert.equal(
			getString(
				{ valuePath: 'id' },
				{
					id: 41,
					group: 'group4',
					name: 'Item 41',
				},
			),
			41,
		);
		assert.equal(
			getString(
				{ valuePath: 'id' },
				{
					id: 126,
					group: 'group12',
					name: 'Item 126',
				},
			),
			126,
		);
	});

	test('getString handles itemValue as empty array', () => {
		assert.equal(
			getString(
				{ valuePath: 'id' },
				{
					id: [],
					group: 'group0',
					name: 'Item 0',
				},
			),
			'',
		);
	});

	test('getString handles itemValue as array', () => {
		assert.equal(
			getString(
				{ valuePath: 'id' },
				{
					id: [70, 80],
					group: 'group0',
					name: 'Item 0',
				},
			),
			'70, 80',
		);
		assert.equal(
			getString(
				{ valuePath: 'id' },
				{
					id: [32, 743, -39, 285],
					group: 'group13',
					name: 'Item 32',
				},
			),
			'32, 743, -39, 285',
		);
	});

	test('getString handles itemValue as object', () => {
		assert.equal(
			getString(
				{ valuePath: 'id', textProperty: 'text' },
				{
					id: { text: '10' },
					group: 'group0',
					name: 'Item 0',
				},
				undefined,
				'text',
			),
			'10',
		);
		assert.equal(
			getString(
				{ valuePath: 'id', textProperty: 'text' },
				{
					id: { text: '448' },
					group: 'group14',
					name: 'Item 448',
				},
				undefined,
				'text',
			),
			'448',
		);
		assert.equal(
			getString(
				{ valuePath: 'id', textProperty: 'text' },
				{
					id: { text: '11' },
					group: 'group11',
					name: 'Item 11',
				},
				undefined,
				'text',
			),
			'11',
		);
	});

	test('toXlsxValue handles undefined valuePath', () => {
		assert.equal(
			toXlsxValue(
				{ valuePath: null },
				{
					id: 30,
					group: 'group0',
					name: 'Item 30',
				},
			),
			'',
		);
	});

	test('applySingleFilter filters some string', () => {
		assert.isTrue(
			applySingleFilter(
				{ valuePath: 'id' },
				'some',
			)({
				id: 'some',
				group: 'group0',
				name: 'Item 30',
			}),
		);
	});

	test('applyMultiFilter handles null value', () => {
		assert.isFalse(
			applyMultiFilter(
				{ valuePath: 'id' },
				[],
			)({
				id: null,
				group: 'group0',
				name: ' Item id null',
			}),
		);
	});

	test('_unique handles undefined values', () => {
		assert.isUndefined(unique());
	});

	test('_unique handles unique values', () => {
		const items = [
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
			{
				id: 1,
				group: 'group0',
				name: ' Item 1',
			},
			{
				id: 2,
				group: 'group1',
				name: ' Item 2',
			},
		];
		assert.deepEqual(unique(items, 'id'), items);
	});

	test('_unique returns unique values', () => {
		let items = [
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
			{
				id: 1,
				group: 'group0',
				name: ' Item 1',
			},
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
		];
		assert.deepEqual(unique(items, 'id'), [
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
			{
				id: 1,
				group: 'group0',
				name: ' Item 1',
			},
		]);

		items = [
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
			{
				id: 1,
				group: 'group0',
				name: ' Item 1',
			},
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
			{
				id: 1,
				group: 'group0',
				name: ' Item 1',
			},
			{
				id: 2,
				group: 'group1',
				name: ' Item 2',
			},
			{
				id: 2,
				group: 'group1',
				name: ' Item 2',
			},
			{
				id: 3,
				group: 'group1',
				name: ' Item 3',
			},
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
		];
		assert.deepEqual(unique(items, 'id'), [
			{
				id: 0,
				group: 'group0',
				name: ' Item 0',
			},
			{
				id: 1,
				group: 'group0',
				name: ' Item 1',
			},
			{
				id: 2,
				group: 'group1',
				name: ' Item 2',
			},
			{
				id: 3,
				group: 'group1',
				name: ' Item 3',
			},
		]);
	});

	test('computeSource', () => {
		const values = computeSource({ valuePath: 'id' }, data);
		assert.deepEqual(values, [0, 1, 2, 3]);
	});
	test('toAutocompleteSource', () => {
		assert.deepEqual(toAutocompleteSource([0, 1, 1, 2, 0, 3]), [0, 1, 2, 3]);
	});
	test('toAutocompleteSource key/value values', () => {
		assert.deepEqual(
			toAutocompleteSource(
				{
					id2: 2,
					id1: 1,
					id3: 2,
				},
				'id',
				'label',
			),
			[
				{
					id: 'id1',
					label: 1,
				},
				{
					id: 'id2',
					label: 2,
				},
				{
					id: 'id3',
					label: 2,
				},
			],
		);
	});
});

const basicFixture = html`
	<cosmoz-omnitable style="height:300px" .resizeSpeedFactor=${1}>
		<cosmoz-omnitable-column-autocomplete
			width="40px"
			title="Id"
			name="id"
			value-path="id"
			sort-on="id"
			group-on="id"
		>
		</cosmoz-omnitable-column-autocomplete>
		<cosmoz-omnitable-column-autocomplete
			title="Group"
			name="group"
			value-path="group"
			flex="0"
			width="125px"
		>
		</cosmoz-omnitable-column-autocomplete>
		<cosmoz-omnitable-column
			title="Name"
			name="name"
			value-path="name"
			sort-on="name"
			group-on="name"
			flex="2"
		>
		</cosmoz-omnitable-column>
	</cosmoz-omnitable>
`;

suite('autocomplete unit tests', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		omnitable = await setupOmnitableFixture(basicFixture, data.slice(0));
		await rowVisible();
	});

	test('basic render test', async () => {
		const cells = Array.from(
			omnitable.shadowRoot.querySelectorAll('.default-column'),
		);
		assert.lengthOf(cells, 12);
		assert.deepEqual(
			cells.map((cell) => cell.innerText),
			[
				'0',
				'group0',
				'Item 0',
				'1',
				'group0',
				'Item 1',
				'2',
				'group1',
				'Item 2',
				'3',
				'group1',
				'Item 3',
			],
		);
	});
});

suite('values as function', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	test('displays values from a source function', async () => {
		const data = [
				{
					id: 0,
					group: {
						name: 'Grupp 0',
						value: 'group0',
					},
				},
				{
					id: 1,
					group: {
						name: 'Grupp 0',
						value: 'group0',
					},
				},
				{
					id: 2,
					group: {
						name: 'Grupp 1',
						value: 'group1',
					},
				},
				{
					id: 3,
					group: {
						name: 'Grupp 1',
						value: 'group1',
					},
				},
			],
			idSource = () => [0, 1, 2, 3],
			groupSource = () => [
				{
					name: 'Grupp 0',
					value: 'group0',
				},
				{
					name: 'Grupp 1',
					value: 'group1',
				},
				{
					name: 'Grupp 2',
					value: 'group2',
				},
				{
					name: 'Grupp 3',
					value: 'group3',
				},
			],
			omnitable = await setupOmnitableFixture(
				html`
					<cosmoz-omnitable style="height:300px">
						<cosmoz-omnitable-column-autocomplete
							width="40px"
							title="Id"
							name="id"
							value-path="id"
							sort-on="id"
							group-on="id"
							external-values
							.values=${idSource}
						></cosmoz-omnitable-column-autocomplete>
						<cosmoz-omnitable-column-autocomplete
							title="Group"
							name="group"
							value-path="group"
							flex="0"
							width="125px"
							external-values
							.values=${groupSource}
							text-property="name"
							value-property="value"
						></cosmoz-omnitable-column-autocomplete>
					</cosmoz-omnitable>
				`,
				data.slice(0),
			);

		omnitable.setFilterState('group', {
			filter: [
				{
					name: 'Grupp 0',
					value: 'group0',
				},
			],
		});

		await nextFrame();

		assert.lengthOf(omnitable.sortedFilteredGroupedItems, 2);
	});
});
