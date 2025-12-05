/* eslint-disable max-lines */
import { assert, expect, html, nextFrame } from '@open-wc/testing';

import { assert as sinonAssert, spy } from 'sinon';

import '../demo/helpers/cosmoz-translations';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';
import { generateTableDemoData } from '../demo/table-demo-helper';
import { flush } from '@polymer/polymer/lib/utils/flush';

import '../src/cosmoz-omnitable.js';
import '../src/cosmoz-omnitable-columns.js';
import '@polymer/paper-toggle-button';
import { columnSymbol } from '../src/lib/use-dom-columns';

sinonAssert.expose(assert, { prefix: '' });

suite('basic', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, columnWithoutGroupOn;

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable id="omnitable" selection-enabled>
					<cosmoz-omnitable-column-date
						id="date1"
						name="date1"
						value-path="date"
					>
					</cosmoz-omnitable-column-date>
					<cosmoz-omnitable-column-date
						id="date2"
						name="date2"
						value-path="dateJson"
					>
					</cosmoz-omnitable-column-date>
					<cosmoz-omnitable-column-date
						id="date3"
						name="date3"
						value-path="date"
					>
					</cosmoz-omnitable-column-date>
					<cosmoz-omnitable-column
						name="columnWithGroupOn"
						value-path="valuePath"
						group-on="groupOnValuePath"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="columnWithoutGroupOn"
						value-path="valuePath"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="columnWithSortOn"
						value-path="valuePath"
						sort-path="sortOnValuePath"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="columnWithoutSortOn"
						value-path="valuePath"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="columnWithFilter"
						value-path="valuePath"
					>
					</cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25),
		);
		columnWithoutGroupOn = omnitable.columns.find(
			(col) => col.name === 'columnWithoutGroupOn',
		);
	});

	test('sets column groupOn property to valuePath when group-on attribute is missing', () => {
		assert.equal(columnWithoutGroupOn.groupOn, 'valuePath');
	});

	test('sets column groupOn property to group-on attribute', () => {
		const column = omnitable.columns.find(
			(col) => col.name === 'columnWithGroupOn',
		);
		assert.equal(column.groupOn, 'groupOnValuePath');
	});

	test('sets column sortPath property to valuePath when sort-path attribute is missing', () => {
		const column = omnitable.columns.find(
			(col) => col.name === 'columnWithoutSortOn',
		);
		assert.equal(column.sortPath, 'valuePath');
	});

	test('sets column sortPath property to sort-path attribute', () => {
		const column = omnitable.columns.find(
			(col) => col.name === 'columnWithSortOn',
		);
		assert.equal(column.sortPath, 'sortOnValuePath');
	});

	test('serializeFilter returns filter', () => {
		const filter = { key: 'value' };
		assert.deepEqual(columnWithoutGroupOn.serializeFilter({}, filter), filter);
	});

	test('serializeFilter handles null filter', () => {
		assert.isNull(columnWithoutGroupOn.serializeFilter({}, null));
	});

	test('deserializeFilter handles encoded strings', () => {
		assert.deepEqual(
			columnWithoutGroupOn.deserializeFilter({}, 'aaaa%40bbb.com'),
			'aaaa@bbb.com',
		);
	});

	test('deserializeFilter returns object', () => {
		assert.deepEqual(
			columnWithoutGroupOn.deserializeFilter({}, { key: 'value' }),
			{ key: 'value' },
		);
	});

	test('deserializeFilter handles null', () => {
		assert.isNull(columnWithoutGroupOn.deserializeFilter({}, null));
	});

	// Column Behavior unit tests for more coverage
	test('_hiddenChanged fires cosmoz-column-hidden-changed', () => {
		const column = omnitable.columns[3][columnSymbol],
			hiddenSpy = spy();
		assert.isUndefined(column.hidden);
		column.addEventListener('cosmoz-column-prop-changed', hiddenSpy);
		column.hidden = true;
		assert.calledOnce(hiddenSpy);
		column.removeEventListener('cosmoz-column-prop-changed', hiddenSpy);
	});
});

suite('default-config', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	test('default valuePath is name', async () => {
		const omnitable = await setupOmnitableFixture(
				html`
					<cosmoz-omnitable id="omnitable" selection-enabled>
						<cosmoz-omnitable-column-date
							id="date1"
							name="date1"
							value-path="date"
						>
						</cosmoz-omnitable-column-date>
						<cosmoz-omnitable-column-date id="date2" name="dateJson">
						</cosmoz-omnitable-column-date>
						<cosmoz-omnitable-column-date id="date3" name="date">
						</cosmoz-omnitable-column-date>
					</cosmoz-omnitable>
				`,
				generateTableDemoData(10, 11, 25),
			),
			date1 = omnitable.columns[0],
			date2 = omnitable.columns[1],
			date3 = omnitable.columns[2];

		expect(date1.valuePath).to.be.equal('date');
		expect(date2.valuePath).to.be.equal('dateJson');
		expect(date3.valuePath).to.be.equal('date');
	});
});

suite('item update effects', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					id="omnitable"
					selection-enabled
					group-on="date1"
					sort-on="date2"
				>
					<cosmoz-omnitable-column-date
						id="date1"
						name="date1"
						value-path="date"
					>
					</cosmoz-omnitable-column-date>
					<cosmoz-omnitable-column-date
						id="date2"
						name="date2"
						value-path="dateJson"
					>
					</cosmoz-omnitable-column-date>
					<cosmoz-omnitable-column-boolean id="bool" name="bool">
					</cosmoz-omnitable-column-boolean>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25),
		);
	});

	test('removeItem removes a given item from the table', () => {
		const numItems = omnitable.data.length,
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
});

suite('render cell function', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		const renderCustom = (column, { item, selected }) =>
			html`${column.valuePath} - ${selected} - ${column.getString(column, item)}`;

		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable selection-enabled>
					<cosmoz-omnitable-column
						name="custom"
						value-path="object.label"
						.renderCell=${renderCustom}
					>
					</cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			[{ object: { label: 'aa', value: 11 }, name: 'BB' }],
		);

		await nextFrame();
	});

	test('renders custom cell template with access to data from the column, row AND item', async () => {
		assert.equal(
			omnitable.shadowRoot
				.querySelector('cosmoz-omnitable-item-row')
				.textContent.trim(),
			'object.label - false - aa',
		);
	});

	test('re-renders when row info changes', async () => {
		omnitable.selectItem(omnitable.data[0]);
		await nextFrame();
		assert.equal(
			omnitable.shadowRoot
				.querySelector('cosmoz-omnitable-item-row')
				.textContent.trim(),
			'object.label - true - aa',
		);

		omnitable.deselectItem(omnitable.data[0]);
		await nextFrame();
		assert.equal(
			omnitable.shadowRoot
				.querySelector('cosmoz-omnitable-item-row')
				.textContent.trim(),
			'object.label - false - aa',
		);
	});

	test('re-renders when an item is updated', async () => {
		omnitable.replaceItemAtIndex(0, { object: { label: 'EDITED', value: 11 } });
		await nextFrame(); // one for useOmnitable
		flush(); // two for iron-list
		await nextFrame(); // three to get ready
		// four, let's go

		assert.equal(
			omnitable.shadowRoot
				.querySelector('cosmoz-omnitable-item-row')
				.textContent.trim(),
			'object.label - false - EDITED',
		);
	});

	test('re-renders when the column setup is updated', async () => {
		omnitable.firstElementChild.valuePath = 'name';
		await nextFrame();
		assert.equal(
			omnitable.shadowRoot
				.querySelector('cosmoz-omnitable-item-row')
				.textContent.trim(),
			'name - false - BB',
		);
	});
});

suite('render header function', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	const getRows = () =>
			Array.from(
				omnitable.shadowRoot.querySelectorAll(
					'cosmoz-omnitable-item-row:not([hidden])',
				),
			),
		toggle = async () => {
			omnitable.shadowRoot
				.querySelector('.header-cell')
				.querySelector('paper-toggle-button')
				.click();
			await nextFrame();
			flush();
			await nextFrame();
		};

	setup(async () => {
		const renderCustomHeader = (column, { filter }, setState) => {
			const onChecked = (event) => {
				setState({
					filter: {
						min: event.detail.value ? 9000 : 0,
						max: undefined,
					},
				});
			};
			return html`<paper-toggle-button
				@checked-changed=${onChecked}
				.value=${filter}
				>Only large numbers</paper-toggle-button
			>`;
		};

		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable selection-enabled>
					<cosmoz-omnitable-column-number
						name="custom"
						value-path="value"
						.renderHeader=${renderCustomHeader}
						locale="en-US"
					>
					</cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25),
		);
		await nextFrame();
	});

	test('renders custom header template', async () => {
		await nextFrame();

		const header = omnitable.shadowRoot.querySelector('.header-cell');

		assert.exists(header.querySelector('paper-toggle-button'));
	});

	test('custom headers can set filters', async () => {
		assert.isFalse(
			getRows().every(
				(row) => parseInt(row.textContent.replace(',', ''), 10) >= 9000,
			),
		);

		await toggle();
		assert.isTrue(
			getRows().every(
				(row) => parseInt(row.textContent.replace(',', ''), 10) >= 9000,
			),
		);

		await toggle();
		assert.isFalse(
			getRows().every(
				(row) => parseInt(row.textContent.replace(',', ''), 10) >= 9000,
			),
		);
	});
});

suite('fit columns behaviour', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		const data = generateTableDemoData(10, 11, 25);
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					selection-enabled
					style="width: 800px"
					.resizeSpeedFactor=${1}
				>
					<cosmoz-omnitable-column
						name="column1"
						title="column1"
						value-path="name"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="column2"
						title="column2"
						value-path="name"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="column3"
						title="column3"
						value-path="name"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="column4"
						title="column4"
						value-path="name"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="column5"
						title="column5"
						value-path="name"
						priority="1"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			data,
		);
		await rowVisible();
	});

	test('it adjusts the visible columns based on the available width', async () => {
		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => !!cell.offsetWidth,
			),
			[true, true, true, true, true],
		);

		omnitable.style.width = '400px';
		await nextFrame();
		await nextFrame();
		await nextFrame();
		await nextFrame();

		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => !!cell.offsetWidth,
			),
			[true, true, true, false, true],
		);

		omnitable.style.width = '800px';
		await nextFrame();
		await nextFrame();
		await nextFrame();
		await nextFrame();

		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => !!cell.offsetWidth,
			),
			[true, true, true, true, true],
		);
	});
});

suite('render group function', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		const renderGroup = (column, { item, folded }) =>
				html`${column.name} - ${folded} - ${item.value}`,
			data = generateTableDemoData(10, 11, 25);
		data[0].value = 0;
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable selection-enabled>
					<cosmoz-omnitable-column-number
						name="custom"
						value-path="value"
						.renderGroup=${renderGroup}
						locale="en-US"
					>
					</cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`,
			data,
		);
		omnitable.setGroupOn('custom');

		await nextFrame();
		flush();
		await nextFrame();
	});

	test('renders custom group template', async () => {
		assert.equal(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-group-row')
				.textContent,
			'custom - false - 0',
		);
	});
});

suite('enabled columns', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	test('displays only enabled columns', async () => {
		const omnitable = await setupOmnitableFixture(
			html` <cosmoz-omnitable
				.resizeSpeedFactor=${0}
				.enabledColumns=${['name1']}
			>
				<cosmoz-omnitable-column
					name="name1"
					value-path="name"
					title="Name1"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="name2"
					value-path="name"
					title="Name2"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="name3"
					value-path="name"
					title="Name3"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>`,
			generateTableDemoData(10, 10, 25),
		);

		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => cell.title,
			),
			['Name1'],
		);
	});

	test('react to enabled columns changes', async () => {
		const omnitable = await setupOmnitableFixture(
			html` <cosmoz-omnitable .resizeSpeedFactor=${0}>
				<cosmoz-omnitable-column
					name="name1"
					value-path="name"
					title="Name1"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="name2"
					value-path="name"
					title="Name2"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="name3"
					value-path="name"
					title="Name3"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>`,
			generateTableDemoData(10, 10, 25),
		);

		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => cell.title,
			),
			['Name1', 'Name2', 'Name3'],
		);

		omnitable.enabledColumns = ['name1'];
		await nextFrame();
		await nextFrame();

		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => cell.title,
			),
			['Name1'],
		);

		omnitable.enabledColumns = ['name2', 'name3'];
		await nextFrame();
		await nextFrame();

		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => cell.title,
			),
			['Name2', 'Name3'],
		);

		omnitable.enabledColumns = undefined;
		await nextFrame();
		await nextFrame();

		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => cell.title,
			),
			['Name1', 'Name2', 'Name3'],
		);
	});
});
