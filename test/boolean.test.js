import {
	assert, html
} from '@open-wc/testing';

import { spy } from 'sinon';
import { setupOmnitableFixture } from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';
import { computeItemValue, getString, toXlsxValue, onChange, deserializeFilter } from '../cosmoz-omnitable-column-boolean';
import { onItemChange } from '../lib/utils-data';
import { serializeFilter } from '../cosmoz-omnitable-column-mixin';
import { columnSymbol } from '../lib/normalize-settings';

suite('boolean', () => {
	test('initializes boolean column', async () => {
		const
			data = [
				{ boolean: true },
				{ boolean: false },
				{ null: true },
				{ boolean: 'invalid' },
				{ boolean: 'true' }
			],
			omnitable = await setupOmnitableFixture(html`
					<cosmoz-omnitable id="omnitable" selection-enabled .resizeSpeedFactor=${ 1 }>
						<cosmoz-omnitable-column-boolean name="boolean" value-path="boolean">
						</cosmoz-omnitable-column-boolean>
						<cosmoz-omnitable-column-boolean name="boolean2" value-path="boolean" true-label="default true label"
							false-label="default false label">
						</cosmoz-omnitable-column-boolean>
					</cosmoz-omnitable>
				`, data),
			column = omnitable.columns[0][columnSymbol];

		assert.equal(column.constructor.name, 'OmnitableColumnBoolean');
	});
});

suite('boolean pure functions', () => {
	const data = [
			{ boolean: true },
			{ boolean: false },
			{ null: true },
			{ boolean: 'invalid' },
			{ boolean: 'true' }
		],
		columnConfig = { valuePath: 'boolean', trueLabel: 'True', falseLabel: 'False' },
		columnConfig2 = { valuePath: 'boolean', trueLabel: 'default true label', falseLabel: 'default false label' },
		source = [{ text: 'True', value: true }, { text: 'False', value: false }];

	test('getString', () => {
		assert.equal(getString(columnConfig, data[0]), 'True');
		assert.equal(getString(columnConfig, data[1]), 'False');
	});

	test('getString uses this.valuePath as default', () => {
		assert.equal(getString(columnConfig2, data[0]), 'default true label');
		assert.equal(getString(columnConfig2, data[1]), 'default false label');
	});

	test('_computeItemValue returns correct value', () => {
		assert.deepEqual(computeItemValue(columnConfig, data[0], source), {
			text: 'True',
			value: true
		});
		assert.deepEqual(computeItemValue(columnConfig, data[1], source), {
			text: 'False',
			value: false
		});
	});

	test('toXlsxValue converts boolean to string', () => {
		assert.equal(toXlsxValue(columnConfig, data[0]), 'True');
		assert.equal(toXlsxValue(columnConfig, data[1]), 'False');
		assert.equal(toXlsxValue({ valuePath: undefined }, data[1], ''), '');
	});

	test('toXlsxValue converts boolean to string', () => {
		assert.equal(toXlsxValue(columnConfig2, data[0]), 'default true label');
		assert.equal(toXlsxValue(columnConfig2, data[1]), 'default false label');
	});

	test('item change updates valuePath', () => {
		const item = { boolean: false },
			changeSpy = spy();
		onItemChange({ dispatchEvent: changeSpy }, columnConfig, item, true);
		assert.equal(item.boolean, true);
		assert.isTrue(changeSpy.calledOnce);
	});

	test('item change does not update valuePath if value is equal to oldValue', () => {
		const item = { boolean: true },
			changeSpy = spy();

		onItemChange({ dispatchEvent: changeSpy }, columnConfig, item, true);
		assert.equal(item.boolean, true);
		assert.isFalse(changeSpy.calledOnce);
	});

	test('_onChange updates filter', () => {
		const setState = spy();
		onChange(setState)([{ value: true }]);
		assert.equal(setState.calledOnce, true);
		assert.deepEqual(setState.firstCall.firstArg({}), { filter: true });
	});

	test('_serializeFilter handles null', () => {
		assert.isNull(serializeFilter(columnConfig, null));
	});

	test('_serializeFilter handles undefined', () => {
		assert.isNull(serializeFilter(columnConfig, undefined));
	});

	test('_serializeFilter handles empty string', () => {
		assert.isNull(serializeFilter(columnConfig, ''));
	});

	test('_serializeFilter handles boolean true', () => {
		assert.equal(serializeFilter(columnConfig, true), true);
	});

	test('_serializeFilter handles boolean false', () => {
		assert.equal(serializeFilter(columnConfig, false), false);
	});

	test('_deserializeFilter handles null', () => {
		assert.isNull(deserializeFilter(columnConfig, null));
	});

	test('_deserializeFilter handles undefined', () => {
		assert.isNull(deserializeFilter(columnConfig, undefined));
	});

	test('_deserializeFilter handles empty string', () => {
		assert.isNull(deserializeFilter(columnConfig, ''));
	});

	test('_deserializeFilter handles true string', () => {
		assert.isTrue(deserializeFilter(columnConfig, 'true'));
	});

	test('_deserializeFilter handles false string', () => {
		assert.isFalse(deserializeFilter(columnConfig, 'false'));
	});

	test('_deserializeFilter handles invalid string', () => {
		assert.isNull(deserializeFilter(columnConfig, 'some invalid string'));
	});
});
