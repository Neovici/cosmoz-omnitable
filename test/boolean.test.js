import {
	assert, html
} from '@open-wc/testing';

import { setupOmnitableFixture } from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

suite('basic', () => {
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
					<cosmoz-omnitable id="omnitable" class="flex" selection-enabled>
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

	test('_getDefaultFilter is null', () => {
		assert.isNull(column.filter);
	});

	test('_textFilterChanged updates filter', () => {
		assert.isNull(column.filter);
		column._textFilterChanged('true');
		assert.isTrue(column.filter);
	});

	test('_textFilterChanged updates filter as false', () => {
		assert.isNull(column.filter);
		column._textFilterChanged('false');
		assert.isFalse(column.filter);
	});

	test('_textFilterChanged updates filter as null', () => {
		column.filter = 'true';
		column._filterChangedFromAbove = false;
		column._textFilterChanged();
		assert.isNull(column.filter);
	});

	test('filterChanged observer converts boolean to string', () => {
		column.filter = true;
		assert.equal(column._textFilter, 'true');
		column.filter = false;
		assert.equal(column._textFilter, 'false');
	});

	test('getString uses this.valuePath as default', () => {
		assert.equal(column.getString(data[0]), 'True');
		assert.equal(column.getString(data[1]), 'False');
	});

	test('getString uses this.valuePath as default', () => {
		assert.equal(column2.getString(data[0]), 'default true label');
		assert.equal(column2.getString(data[1]), 'default false label');
	});

	test('_computeSelected returns boolean to string', () => {
		assert.equal(column._computeSelected(data[0]), 'true');
		assert.equal(column._computeSelected(data[1]), 'false');
	});

	test('toXlsxValue converts boolean to string', () => {
		assert.equal(column.toXlsxValue(data[0]), 'True');
		assert.equal(column.toXlsxValue(data[1]), 'False');
	});

	test('toXlsxValue converts boolean to string', () => {
		assert.equal(column2.toXlsxValue(data[0]), 'default true label');
		assert.equal(column2.toXlsxValue(data[1]), 'default false label');
	});

	test('_valueChanged updates _valuePath', done => {
		const item = { boolean: false },
			el = document.createElement('div');
		el.selected = 'true';
		el.addEventListener('click', e => {
			column._valueChanged(e);
			assert.equal(item.boolean, true);
			done();
		});
		const e = new Event('click');
		e.model = {};
		e.model.item = item;
		el.dispatchEvent(e);
	});

	test('_valueChanged does not update _valuePath if value is equal to oldValue', done => {
		const item = { boolean: true },
			el = document.createElement('div');
		el.selected = 'true';
		el.addEventListener('click', e => {
			column._valueChanged(e);
			assert.equal(item.boolean, true);
			done();
		});
		const e = new Event('click');
		e.model = {};
		e.model.item = item;
		el.dispatchEvent(e);
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
