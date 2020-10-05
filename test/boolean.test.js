import {
	assert, html
} from '@open-wc/testing';

import { spy } from 'sinon';
import { setupOmnitableFixture } from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

suite('boolen', () => {
	let column,
		column2,
		data;

	setup(async () => {
		data = [
			{ boolean: true },
			{ boolean: false },
			{ null: true },
			{ boolean: 'invalid' },
			{ boolean: 'true' }
		];
		const omnitable = await setupOmnitableFixture(html`
					<cosmoz-omnitable id="omnitable" selection-enabled>
						<cosmoz-omnitable-column-boolean name="boolean" value-path="boolean">
						</cosmoz-omnitable-column-boolean>
						<cosmoz-omnitable-column-boolean name="boolean2" value-path="boolean" true-label="default true label" false-label="default false label">
						</cosmoz-omnitable-column-boolean>
					</cosmoz-omnitable>
				`, data);
		column = omnitable.columns[0];
		column2 = omnitable.columns[1];
	});

	test('initializes boolean column', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnBoolean');
	});

	test('filter is undefined by default', () => {
		assert.isUndefined(column.filter);
	});

	test('getString uses this.valuePath as default', () => {
		assert.equal(column.getString(data[0]), 'True');
		assert.equal(column.getString(data[1]), 'False');
	});

	test('getString uses this.valuePath as default', () => {
		assert.equal(column2.getString(data[0]), 'default true label');
		assert.equal(column2.getString(data[1]), 'default false label');
	});

	test('_computeItemValue returns correct value', () => {
		assert.deepEqual(column._computeItemValue(data[0]), {
			text: 'True',
			value: true
		});
		assert.deepEqual(column._computeItemValue(data[1]), {
			text: 'False',
			value: false
		});
	});

	test('toXlsxValue converts boolean to string', () => {
		assert.equal(column.toXlsxValue(data[0]), 'True');
		assert.equal(column.toXlsxValue(data[1]), 'False');
		assert.equal(column.toXlsxValue(data[1], ''), '');
	});

	test('toXlsxValue converts boolean to string', () => {
		assert.equal(column2.toXlsxValue(data[0]), 'default true label');
		assert.equal(column2.toXlsxValue(data[1]), 'default false label');
	});

	test('item change updates valuePath', () => {
		const item = { boolean: false },
			changeSpy = spy(column, '_fireItemChangeEvent');
		column._computeItemChange(item)([{ value: true }]);
		assert.equal(item.boolean, true);
		assert.isTrue(changeSpy.calledOnce);
		changeSpy.restore();
	});

	test('item change does not update valuePath if value is equal to oldValue', () => {
		const item = { boolean: true },
			changeSpy = spy(column, '_fireItemChangeEvent');

		column._computeItemChange(item)([{ value: true }]);
		assert.equal(item.boolean, true);
		assert.isFalse(changeSpy.calledOnce);
		changeSpy.restore();
	});

	test('_onChange updates filter', () => {
		column._onChange([{ value: true }]);
		assert.equal(column.filter, true);
	});

	test('_serializeFilter handles null', () => {
		assert.isNull(column._serializeFilter(null));
	});

	test('_serializeFilter handles undefined', () => {
		assert.isNull(column._serializeFilter(undefined));
	});

	test('_serializeFilter handles empty string', () => {
		assert.isNull(column._serializeFilter(''));
	});

	test('_serializeFilter handles boolean true', () => {
		assert.equal(column._serializeFilter(true), 'true');
	});

	test('_serializeFilter handles boolean false', () => {
		assert.equal(column._serializeFilter(false), 'false');
	});

	test('_deserializeFilter handles null', () => {
		assert.isNull(column._deserializeFilter(null));
	});

	test('_deserializeFilter handles undefined', () => {
		assert.isNull(column._deserializeFilter(undefined));
	});

	test('_deserializeFilter handles empty string', () => {
		assert.isNull(column._deserializeFilter(''));
	});

	test('_deserializeFilter handles true string', () => {
		assert.isTrue(column._deserializeFilter('true'));
	});

	test('_deserializeFilter handles false string', () => {
		assert.isFalse(column._deserializeFilter('false'));
	});

	test('_deserializeFilter handles invalid string', () => {
		assert.isNull(column._deserializeFilter('some invalid string'));
	});
});
