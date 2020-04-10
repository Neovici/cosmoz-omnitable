import {
	assert, expect, html
} from '@open-wc/testing';

import sinon from 'sinon';

import { setupOmnitableFixture } from './helpers/utils';
import { generateTableDemoData } from '../demo/table-demo-helper';
import { flush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

sinon.assert.expose(chai.assert, { prefix: '' });

suite('basic', () => {
	let omnitable;

	setup(async () => {
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" class="flex" selection-enabled>
				<cosmoz-omnitable-column-date id="date1" name="date1" value-path="date">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-date id="date2" name="date2" value-path="dateJson">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-date id="date3" name="date3" value-path="date">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column name="columnWithGroupOn" value-path="valuePath" group-on="groupOnValuePath">
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-column name="columnWithoutGroupOn" value-path="valuePath">
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-column name="columnWithSortOn" value-path="valuePath" sort-on="sortOnValuePath">
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-column name="columnWithoutSortOn" value-path="valuePath">
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-column name="columnWithFilter" value-path="valuePath">
				</cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`, generateTableDemoData(10, 11, 25));
	});

	test('it retrieves column by name', () => {
		const date = omnitable.querySelector('#date1');
		assert.equal(date, omnitable._getColumn('date1'));
	});

	test('it updates visibleColumns', () => {
		assert.deepEqual(omnitable.visibleColumns, omnitable.columns);

		omnitable.groupOn = 'date2';
		omnitable.flush();
		assert.deepEqual(omnitable.visibleColumns, omnitable.columns);

		omnitable.groupOn = '';
		omnitable.flush();
		assert.deepEqual(omnitable.visibleColumns, omnitable.columns);

	});

	test('sets column groupOn property to valuePath when group-on attribute is missing', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithoutGroupOn');
		assert.equal(column.groupOn, 'valuePath');
	});

	test('sets column groupOn property to group-on attribute', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithGroupOn');
		assert.equal(column.groupOn, 'groupOnValuePath');
	});

	test('sets column sortOn property to valuePath when sort-on attribute is missing', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithoutSortOn');
		assert.equal(column.sortOn, 'valuePath');
	});
	test('sets column sortOn property to sort-on attribute', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithSortOn');
		assert.equal(column.sortOn, 'sortOnValuePath');
	});

	test('changing inputValue updates filter eventually', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithFilter');
		assert.isNull(column.filter);
		assert.isNull(column.inputValue);
		column.inputValue = 'test';
		flush();
		assert.equal(column.filter, 'test');
	});

	test('changing inputValue to empty updates filter instantly', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithFilter');
		assert.isNull(column.filter);
		assert.isNull(column.inputValue);
		column.inputValue = '';
		assert.equal(column.filter, '');
	});

	test('_serializeFilter returns filter', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithGroupOn'),
			filter = { key: 'value' };
		assert.deepEqual(column._serializeFilter(filter), filter);
	});

	test('_serializeFilter uses default filter', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithGroupOn');
		assert.isNull(column.filter);
		column.filter = { key: 'value' };
		assert.deepEqual(column._serializeFilter(), column.filter);
	});

	test('_serializeFilter handles null filter', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithGroupOn');
		assert.isNull(column.filter);
		assert.isNull(column._serializeFilter());
	});

	test('_deserializeFilter returns object', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithGroupOn');
		assert.deepEqual(column._deserializeFilter({ key: 'value' }), { key: 'value' });
	});

	test('_deserializeFilter handles null', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithGroupOn');
		assert.isNull(column._deserializeFilter());
	});

	test('resetFilter resets filter to null', () => {
		const column = omnitable.columns.find(col => col.name === 'columnWithGroupOn');
		column.filter = { key: 'value' };
		column.resetFilter();
		assert.isNull(column.filter);
	});

	// Column Behavior unit tests for more coverage
	test('_hiddenChanged fires cosmoz-column-hidden-changed', () => {
		const column = omnitable.columns[3],
			hiddenSpy = sinon.spy();
		assert.isUndefined(column.hidden);
		column.addEventListener('cosmoz-column-hidden-changed', hiddenSpy);
		column.hidden = true;
		assert.calledOnce(hiddenSpy);
		column.removeEventListener('cosmoz-column-hidden-changed', hiddenSpy);
	});

	test('_applyMultiFilter works with an simple test filter', () => {
		const column = omnitable.columns[3];
		let filter = ['a', 'b'];
		assert.isTrue(column._applyMultiFilter(filter, { valuePath: 'abc' }));
		filter = ['x', 'y'];
		assert.isFalse(column._applyMultiFilter(filter, { valuePath: 'abc' }));
	});
});

suite('it logs unnamed column', () => {
	let omnitable,
		consoleErrorStub;

	setup(async () => {
		// We must stub console.error otherwise the test will fail
		consoleErrorStub = sinon.stub(window.console, 'error');
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" class="flex" selection-enabled>
				<cosmoz-omnitable-column-date id="date1" name="date1" value-path="date">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-date id="date2" value-path="dateJson">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-date id="date3" value-path="date">
				</cosmoz-omnitable-column-date>
			</cosmoz-omnitable>
		`, generateTableDemoData(10, 11, 25));
	});

	test('Un-named column get value-path as name if unique', () => {
		const date2 = omnitable.querySelector('#date2'),
			date3 = omnitable.querySelector('#date3');

		// Async needed so that omnitable can process the data
		// eslint-disable-next-line no-console
		sinon.assert.calledTwice(console.error);
		expect(date2.name).to.be.equal(date2.valuePath);
		// Test if only unique value-paths are taken as a fallback name attribute
		expect(date3.name).to.be.an('undefined');
	});

	teardown(() => {
		consoleErrorStub.restore();
	});
});