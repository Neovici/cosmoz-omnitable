import {
	assert, html, nextFrame
} from '@open-wc/testing';

import { setupOmnitableFixture } from './helpers/utils';
import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-column-autocomplete.js';
import '../cosmoz-omnitable-column.js';

const data = [{
		id: 0,
		group: 'group0',
		name: 'Item 0'
	}, {
		id: 1,
		group: 'group0',
		name: 'Item 1'
	}, {
		id: 2,
		group: 'group1',
		name: 'Item 2'
	}, {
		id: 3,
		group: 'group1',
		name: 'Item 3'
	}],
	basicFixture = html`
	<cosmoz-omnitable hash-param="test" style='height:300px' .resizeSpeedFactor=${ 1 }>
		<cosmoz-omnitable-column-autocomplete width="40px" title="Id" name="id" value-path="id" sort-on="id" group-on="id">
		</cosmoz-omnitable-column-autocomplete>
		<cosmoz-omnitable-column-autocomplete title="Group" name="group" value-path="group" flex="0" width="125px">
		</cosmoz-omnitable-column-autocomplete>
		<cosmoz-omnitable-column title="Name" name="name" value-path="name" sort-on="name" group-on="name" flex="2">
		</cosmoz-omnitable-column>
	</cosmoz-omnitable>
`;

suite('autocomplete unit tests', () => {
	let omnitable,
		column;

	setup(async () => {
		omnitable = await setupOmnitableFixture(basicFixture, data.slice(0));
		column = omnitable.columns[0];
	});

	test('basic render test', async () => {
		polymerFlush();
		await nextFrame();
		const cells = Array.from(omnitable.shadowRoot.querySelectorAll('.default-column'));
		assert.lengthOf(cells, 12);
		assert.deepEqual(cells.map(cell => cell.innerText), ['0', 'group0', 'Item 0', '1', 'group0', 'Item 1', '2', 'group1', 'Item 2', '3', 'group1', 'Item 3']);
	});

	test('getComparableValue returns value converted to String', () => {
		assert.equal(column.getComparableValue({
			id: 14,
			group: 'group0',
			name: 'Item 14'
		}), 14);
		assert.equal(column.getComparableValue({
			id: 345,
			group: 'group7',
			name: 'Item 345'
		}), 345);
		assert.equal(column.getComparableValue({
			id: 27,
			group: 'group5',
			name: 'Item 27'
		}), 27);
	});

	test('getString handles undefined valuePath parameter', () => {
		assert.equal(column.getString({
			id: 70,
			group: 'group0',
			name: 'Item 0'
		}), 70);
		assert.equal(column.getString({
			id: 41,
			group: 'group4',
			name: 'Item 41'
		}), 41);
		assert.equal(column.getString({
			id: 126,
			group: 'group12',
			name: 'Item 126'
		}), 126);
	});

	test('getString handles itemValue as empty array', () => {
		assert.equal(column.getString({
			id: [],
			group: 'group0',
			name: 'Item 0'
		}), '');
	});

	test('getString handles itemValue as array', () => {
		assert.equal(column.getString({
			id: [70, 80],
			group: 'group0',
			name: 'Item 0'
		}), '70, 80');
		assert.equal(column.getString({
			id: [32, 743, -39, 285],
			group: 'group13',
			name: 'Item 32'
		}), '32, 743, -39, 285');
	});

	test('getString handles itemValue as object', () => {
		assert.equal(column.getString({
			id: { text: '10' },
			group: 'group0',
			name: 'Item 0'
		}, undefined, 'text'), '10');
		assert.equal(column.getString({
			id: { text: '448' },
			group: 'group14',
			name: 'Item 448'
		}, undefined, 'text'), '448');
		assert.equal(column.getString({
			id: { text: '11' },
			group: 'group11',
			name: 'Item 11'
		}, undefined, 'text'), '11');
	});

	test('toXlsxValue handles undefined valuePath', () => {
		const valuePath = column.valuePath;
		column.valuePath = null;
		assert.equal(column.toXlsxValue({
			id: 30,
			group: 'group0',
			name: 'Item 30'
		}), '');
		column.valuePath = valuePath;
	});

	test('_applySingleFilter filters some string', () => {
		assert.isTrue(column._applySingleFilter('some', {
			id: 'some',
			group: 'group0',
			name: 'Item 30'
		}));
	});

	test('_applyMultiFilter handles null value', () => {
		assert.isFalse(column._applyMultiFilter([], {
			id: null,
			group: 'group0',
			name: ' Item id null'
		}));
	});

	test('_unique handles undefined values', () => {
		assert.isUndefined(column._unique());
	});

	test('_unique handles unique values', () => {
		const items = [
			{
				id: 0,
				group: 'group0',
				name: ' Item 0'
			},
			{
				id: 1,
				group: 'group0',
				name: ' Item 1'
			},
			{
				id: 2,
				group: 'group1',
				name: ' Item 2'
			}
		];
		assert.deepEqual(column._unique(items, 'id'), items);
	});

	test('_unique returns unique values', () => {
		let items = [{
			id: 0,
			group: 'group0',
			name: ' Item 0'
		}, {
			id: 1,
			group: 'group0',
			name: ' Item 1'
		}, {
			id: 0,
			group: 'group0',
			name: ' Item 0'
		}];
		assert.deepEqual(column._unique(items, 'id'), [{
			id: 0,
			group: 'group0',
			name: ' Item 0'
		}, {
			id: 1,
			group: 'group0',
			name: ' Item 1'
		}]);

		items = [{
			id: 0,
			group: 'group0',
			name: ' Item 0'
		}, {
			id: 1,
			group: 'group0',
			name: ' Item 1'
		}, {
			id: 0,
			group: 'group0',
			name: ' Item 0'
		}, {
			id: 1,
			group: 'group0',
			name: ' Item 1'
		}, {
			id: 2,
			group: 'group1',
			name: ' Item 2'
		}, {
			id: 2,
			group: 'group1',
			name: ' Item 2'
		}, {
			id: 3,
			group: 'group1',
			name: ' Item 3'
		}, {
			id: 0,
			group: 'group0',
			name: ' Item 0'
		}];
		assert.deepEqual(column._unique(items, 'id'), [{
			id: 0,
			group: 'group0',
			name: ' Item 0'
		}, {
			id: 1,
			group: 'group0',
			name: ' Item 1'
		}, {
			id: 2,
			group: 'group1',
			name: ' Item 2'
		}, {
			id: 3,
			group: 'group1',
			name: ' Item 3'
		}]);
	});
	test('values based on data', () => {
		assert.deepEqual(column.values, [0, 1, 2, 3]);
		assert.deepEqual(column.values, column._source);
	});
	test('overridden values', () => {
		column.externalValues = true;
		column.values = [1, 2, 3, 4];
		assert.deepEqual(column.values, column._source);
		column.externalValues = false;
	});
	test('overridden key/value values', () => {
		column.externalValues = true;
		column.values = {
			id2: 2,
			id1: 1,
			id3: 2
		};
		assert.deepEqual(column._source, [{
			id: 'id1',
			label: 1
		}, {
			id: 'id2',
			label: 2
		}, {
			id: 'id3',
			label: 2
		}]);
		column.externalValues = false;
	});
});

suite('values as function', () => {
	test('displays values from a source function', async () => {
		const
			data = [{
				id: 0,
				group: {
					name: 'Grupp 0',
					value: 'group0'
				}
			}, {
				id: 1,
				group: {
					name: 'Grupp 0',
					value: 'group0'
				}
			}, {
				id: 2,
				group: {
					name: 'Grupp 1',
					value: 'group1'
				}
			}, {
				id: 3,
				group: {
					name: 'Grupp 1',
					value: 'group1'
				}
			}],
			idSource = () => [0, 1, 2, 3],
			groupSource = () => [{
				name: 'Grupp 0',
				value: 'group0'
			}, {
				name: 'Grupp 1',
				value: 'group1'
			}, {
				name: 'Grupp 2',
				value: 'group2'
			}, {
				name: 'Grupp 3',
				value: 'group3'
			}],
			omnitable = await setupOmnitableFixture(html`
				<cosmoz-omnitable hash-param="test" style='height:300px'>
					<cosmoz-omnitable-column-autocomplete width="40px" title="Id" name="id" value-path="id" sort-on="id" group-on="id"
						external-values
						.values=${ idSource }
					></cosmoz-omnitable-column-autocomplete>
					<cosmoz-omnitable-column-autocomplete title="Group" name="group" value-path="group" flex="0" width="125px"
						external-values
						.values=${ groupSource }
						text-property="name"
						value-property="value"
					></cosmoz-omnitable-column-autocomplete>
				</cosmoz-omnitable>
			`, data.slice(0)),
			column = omnitable.columns[1];

		column.filter = [{
			name: 'Grupp 0',
			value: 'group0'
		}];

		omnitable.flush();

		assert.lengthOf(omnitable.sortedFilteredGroupedItems, 2);
	});
});
