/* eslint-disable max-lines */
import {
	assert, expect, html, nextFrame
} from '@open-wc/testing';

import sinon from 'sinon';

import '../demo/helpers/cosmoz-translations';
import { setupOmnitableFixture } from './helpers/utils';
import { generateTableDemoData } from '../demo/table-demo-helper';
import { flush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';
import '@polymer/paper-toggle-button';

sinon.assert.expose(chai.assert, { prefix: '' });

suite('basic', () => {
	let omnitable;

	setup(async () => {
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" selection-enabled>
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
			<cosmoz-omnitable id="omnitable" selection-enabled>
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

suite('item update effects', () => {
	let omnitable,
		consoleErrorStub,
		filterSpy,
		groupSpy,
		sortSpy;

	setup(async () => {
		// We must stub console.error otherwise the test will fail
		consoleErrorStub = sinon.stub(window.console, 'error');
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" selection-enabled group-on="date1" sort-on="date2">
				<cosmoz-omnitable-column-date id="date1" name="date1" value-path="date">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-date id="date2" name="date2" value-path="dateJson">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-boolean id="bool" value-path="bool" filter="true">
				</cosmoz-omnitable-column-boolean>
			</cosmoz-omnitable>
		`, generateTableDemoData(10, 11, 25));
		filterSpy = sinon.spy(omnitable, '_filterItems');
		groupSpy = sinon.spy(omnitable, '_groupItems');
		sortSpy = sinon.spy(omnitable, '_sortFilteredGroupedItems');
	});

	test('replacing an identical item doesn\'t cause effects', () => {
		assert.isFalse(filterSpy.called, 'not filtered');
		assert.isFalse(groupSpy.called, 'not grouped');
		assert.isFalse(sortSpy.called, 'not sorted');
		omnitable.replaceItemAtIndex(0, { ...omnitable.data[0] });
		omnitable.flush();
		assert.isFalse(filterSpy.called, 'not refiltered');
		assert.isFalse(groupSpy.called, 'not regrouped');
		assert.isFalse(sortSpy.called, 'not resorted');
	});

	test('replacing an item with updated filter-property causes refiltering', () => {
		assert.isFalse(filterSpy.called, 'not filtered');
		assert.isFalse(groupSpy.called, 'not grouped');
		assert.isFalse(sortSpy.called, 'not sorted');
		omnitable.replaceItemAtIndex(0, {
			...omnitable.data[0],
			bool: !omnitable.data[0].bool
		});
		omnitable.flush();
		assert.isTrue(filterSpy.called, 'refiltered');
		assert.isTrue(groupSpy.called, 'regrouped');
		assert.isTrue(sortSpy.called, 'resorted');
	});

	test('dropping an item causes refiltering', () => {
		assert.isFalse(filterSpy.called, 'not filtered');
		assert.isFalse(groupSpy.called, 'not grouped');
		assert.isFalse(sortSpy.called, 'not sorted');
		omnitable.splice('data', 0, 1);
		omnitable.flush();
		assert.isTrue(filterSpy.called, 'refiltered');
		assert.isTrue(groupSpy.called, 'regrouped');
		assert.isTrue(sortSpy.called, 'resorted');
	});

	test('replacing an item with updated groupon-property causes regrouping', () => {
		assert.isFalse(filterSpy.called, 'not filtered');
		assert.isFalse(groupSpy.called, 'not grouped');
		assert.isFalse(sortSpy.called, 'not sorted');
		omnitable.replaceItemAtIndex(0, {
			...omnitable.data[0],
			date: new Date()
		});
		omnitable.flush();
		assert.isFalse(filterSpy.called, 'not refiltered');
		assert.isTrue(groupSpy.called, 'regrouped');
		assert.isTrue(sortSpy.called, 'resorted');
	});

	test('replacing an item with updated sorton-property causes resorting', () => {
		assert.isFalse(filterSpy.called, 'not filtered');
		assert.isFalse(groupSpy.called, 'not grouped');
		assert.isFalse(sortSpy.called, 'not sorted');
		omnitable.replaceItemAtIndex(0, {
			...omnitable.data[0],
			dateJson: JSON.stringify(new Date())
		});
		omnitable.flush();
		assert.isFalse(filterSpy.called, 'not refiltered');
		assert.isFalse(groupSpy.called, 'not regrouped');
		assert.isTrue(sortSpy.called, 'resorted');
	});

	test('removeItem removes a given item from the table', () => {
		const
			numItems = omnitable.data.length,
			item = omnitable.data[2];

		assert.equal(omnitable.data.indexOf(item), 2);

		omnitable.removeItem(item);
		assert.equal(omnitable.data.length, numItems - 1);
		assert.equal(omnitable.data.indexOf(item), -1);
	});

	test('removeItem gracefully fails to remove a non-existing item from the table', () => {
		assert.equal(omnitable.removeItem({}), null);
		assert.equal(omnitable.removeItem(), null);
	});

	teardown(() => {
		consoleErrorStub.restore();
	});
});

suite('visible', () => {
	test('adjusts columns when visible', async () => {
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable style="display:none" selection-enabled>
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

		assert.isUndefined(omnitable.visibleColumns);
		assert.isFalse(omnitable.visible);

		omnitable.style.display = '';
		omnitable.flush();
		await nextFrame();
		assert.deepEqual(omnitable.visibleColumns, omnitable.columns);
		assert.isTrue(omnitable.visible);

		omnitable.style.display = 'none';
		omnitable.flush();
		await nextFrame();
		assert.isFalse(omnitable.visible);

	});
});

suite('render cell function', () => {
	let omnitable;

	setup(async () => {
		const renderCustom = (column, {
			item, selected
		}) => html`${ column.valuePath } - ${ selected } - ${ column.getString(item) }`;

		omnitable = await setupOmnitableFixture(html`
				<cosmoz-omnitable selection-enabled>
					<cosmoz-omnitable-column name="custom" value-path="object.label" .renderCell=${ renderCustom }>
					</cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`, generateTableDemoData(10, 11, 25));

		flush();
		omnitable.flush();
		await nextFrame();
	});

	test('renders custom cell template with access to data from the column, row AND item', async () => {
		const firstItem = omnitable.data[0];
		assert.equal(omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row').textContent, 'object.label - false - ' + firstItem.object.label);
	});

	test('re-renders when row info changes', async () => {
		const firstItem = omnitable.data[0];

		omnitable.selectItem(omnitable.data[0]);
		await nextFrame();
		assert.equal(omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row').textContent, 'object.label - true - ' + firstItem.object.label);

		omnitable.deselectItem(omnitable.data[0]);
		await nextFrame();
		assert.equal(omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row').textContent, 'object.label - false - ' + firstItem.object.label);
	});

	test('re-renders when an item is updated', async () => {
		const firstItem = omnitable.data[0];

		omnitable.replaceItemAtIndex(0, {
			...firstItem,
			object: {
				...firstItem.object,
				label: 'EDITED'
			}
		});
		flush();
		await nextFrame();

		assert.equal(omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row').textContent, 'object.label - false - EDITED');
	});

	test('re-renders when the column setup is updated', async () => {
		const firstItem = omnitable.data[0];

		omnitable.firstElementChild.valuePath = 'name';
		flush();
		await nextFrame();

		assert.equal(omnitable.shadowRoot.querySelector('cosmoz-omnitable-item-row').textContent, 'name - false - ' + firstItem.name);
	});
});

suite('render header function', () => {
	let omnitable;

	const getRows = () => Array.from(omnitable.shadowRoot.querySelectorAll('cosmoz-omnitable-item-row')),
		toggle = async () => {
			omnitable.shadowRoot.querySelector('.header-cell').querySelector('paper-toggle-button').click();
			flush();
			omnitable.flush();
			flush();
		};

	setup(async () => {
		const renderCustomHeader = column => {
			const onChecked = event => {
				column.filter = {
					min: event.detail.value ? 9000 : 0,
					max: undefined
				};
			};
			return html`<paper-toggle-button @checked-changed=${ onChecked }>Only large numbers</paper-toggle-button>`;
		};

		omnitable = await setupOmnitableFixture(html`
				<cosmoz-omnitable selection-enabled>
					<cosmoz-omnitable-column-number name="custom" value-path="value" .renderHeader=${ renderCustomHeader } locale="en-US">
					</cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`, generateTableDemoData(10, 11, 25));

		flush();
		omnitable.flush();
		await nextFrame();
	});

	test('renders custom header template', async () => {
		const header = omnitable.shadowRoot.querySelector('.header-cell');

		assert.exists(header.querySelector('paper-toggle-button'));
	});

	test('custom headers can set filters', async () => {
		assert.isFalse(getRows().every(row => parseInt(row.textContent.replace(',', ''), 10) >= 9000));

		await toggle();
		assert.isTrue(getRows().every(row => parseInt(row.textContent.replace(',', ''), 10) >= 9000));

		await toggle();
		assert.isFalse(getRows().every(row => parseInt(row.textContent.replace(',', ''), 10) >= 9000));
	});
});

suite('fit columns behaviour', () => {
	let omnitable;

	setup(async () => {
		const data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(html`
				<cosmoz-omnitable selection-enabled style="width: 800px">
					<cosmoz-omnitable-column name="column1" title="column1" value-path="name"></cosmoz-omnitable-column>
					<cosmoz-omnitable-column name="column2" title="column2" value-path="name"></cosmoz-omnitable-column>
					<cosmoz-omnitable-column name="column3" title="column3" value-path="name"></cosmoz-omnitable-column>
					<cosmoz-omnitable-column name="column4" title="column4" value-path="name"></cosmoz-omnitable-column>
					<cosmoz-omnitable-column name="column5" title="column5" value-path="name" priority="1"></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`, data);

		flush();
		omnitable.flush();
		await nextFrame();
		await nextFrame();
	});

	test('it adjusts the visible columns based on the available width', async () => {
		assert.deepEqual(Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(cell => !!cell.offsetWidth), [true, true, true, true, true]);

		omnitable.style.width = '400px';
		await nextFrame();
		await nextFrame();

		assert.deepEqual(Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(cell => !!cell.offsetWidth), [true, true, true, false, true]);

		omnitable.style.width = '800px';
		await nextFrame();
		await nextFrame();

		assert.deepEqual(Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(cell => !!cell.offsetWidth), [true, true, true, true, true]);
	});
});

suite('render group function', () => {
	let omnitable;

	setup(async () => {
		const renderGroup = (column, {
				item, folded
			}) => html`${ column.name } - ${ folded } - ${ item.value }`,
			data = generateTableDemoData(10, 11, 25);
		data[0].value = 0;
		omnitable = await setupOmnitableFixture(html`
				<cosmoz-omnitable selection-enabled group-on="custom">
					<cosmoz-omnitable-column-number name="custom" value-path="value" .renderGroup=${ renderGroup } locale="en-US">
					</cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`, data);

		flush();
		omnitable.flush();
		await nextFrame();
	});

	test('renders custom group template', async () => {
		assert.equal(omnitable.shadowRoot.querySelector('cosmoz-omnitable-group-row').textContent, 'custom - false - 0');
	});
});

suite('render row stats', () => {
	test('renders row stats', async () => {
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable>
				<cosmoz-omnitable-column name="name" value-path="name"></cosmoz-omnitable-column>
				<cosmoz-translations locale="en"></cosmoz-translations>
			</cosmoz-omnitable>`, generateTableDemoData(10, 10, 25));
		assert.equal(omnitable.shadowRoot.querySelector('.footer-tableStats span:last-child').textContent, '100 rows');
	});

	test('renders totalAvailable stats', async () => {
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable .totalAvailable=${ 2000 }>
				<cosmoz-omnitable-column name="name" value-path="name">
				</cosmoz-omnitable-column>
				<cosmoz-translations locale="en"></cosmoz-translations>
			</cosmoz-omnitable>`, generateTableDemoData(10, 10, 25));
		assert.equal(omnitable.shadowRoot.querySelector('.footer-tableStats span:last-child').textContent, '100 / 2000 rows');
	});

	test('renders totalAvailable stat', async () => {
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable .totalAvailable=${ 250 }>
				<cosmoz-omnitable-column name="name" value-path="name">
				</cosmoz-omnitable-column>
				<cosmoz-translations locale="en"></cosmoz-translations>
			</cosmoz-omnitable>`, [{ name: 'Somename' }]);
		assert.equal(omnitable.shadowRoot.querySelector('.footer-tableStats span:last-child').textContent, '1 / 250 rows');
	});
});
