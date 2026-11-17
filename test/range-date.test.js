import { assert, nextFrame } from '@open-wc/testing';
import { assert as sinonAssert } from 'sinon';

import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import { getComparableValue, getString, toDate } from '../src/lib/utils-date';
import { rangeAllFixture } from './helpers/fixtures/range-fixture.js';

const data = [
		{
			age: 17,
			amount: { amount: '12.4', currency: 'USD' },
			date: '2023-03-21T00:00:00Z',
			time: '',
		},
		{ amount: { amount: 2 }, date: new Date('2015-03-18T00:00:00Z') },
		{
			age: -11,
			amount: { amount: 678, currency: 'AUD' },
			date: new Date(86400000), // Fri Jan 02 1970
			time: 86400000,
		},
		{
			age: 9,
			amount: { amount: -8, currency: 'EUR' },
			date: new Date(99, 5, 24, 11, 33, 30, 0), // Thu Jun 24 1999 11:33:30 GMT+0300 (EEST)
			time: '86400000',
		},
		{
			age: 5,
			amount: { amount: '3450', currency: 'DKK' },
			date: new Date('2016-08-27'),
			time: '2016-08-27T14:34:56Z',
		},
		{ date: '2017-12-22T23:00:00Z', time: '00:00:00' },
	],
	rangeFixture = rangeAllFixture;

sinonAssert.expose(assert, { prefix: '' });

suite('render', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('basic render', async () => {
		const omnitable = await setupOmnitableFixture(rangeFixture, data);
		await rowVisible();

		const cells = Array.from(
			omnitable.shadowRoot.querySelectorAll('.itemRow-cell'),
		);
		assert.isAtLeast(cells.length, 20);
		assert.equal(cells[0].innerText, '17');
	});
});

// public drive for the header range input (see test/range.test.js): typing
// through the cosmoz-input's inner input commits the value, a blur commits
// the filter to the omnitable
const inputsOf = (header) => [
		...header.shadowRoot.querySelectorAll('cosmoz-input'),
	],
	inputValues = (header) => inputsOf(header).map((input) => input.value),
	typeInto = async (header, inputNo, value) => {
		const input = inputsOf(header)[inputNo];
		input.focus();
		await nextFrame();
		const inner = input.shadowRoot.querySelector('input, textarea');
		inner.value = String(value);
		inner.dispatchEvent(new Event('input', { bubbles: true }));
		await nextFrame();
	},
	applyFilter = (header) =>
		inputsOf(header).forEach((input) => input.dispatchEvent(new Event('blur')));

suite('date', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, column, columnHeaderInput;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[2];
		columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-date-range-input',
		);
	});

	test('instantiates a cosmoz-omnitable-column-date', () => {
		assert.isNotNull(
			customElements.get('cosmoz-omnitable-column-date'),
			'the date column element is registered',
		);
		assert.equal(column.name, 'date');
	});

	test('deserializeFilter returns null for non-string filters', () => {
		assert.isNull(column.deserializeFilter({}, { min: '2015-03-18' }));
	});

	test('changing filter updates _filterInput', async () => {
		const min = toDate('2015-03-18'),
			max = toDate('2023-03-21');

		assert.isUndefined(omnitable.filters.date);

		omnitable.setFilterState('date', { filter: { min, max } });
		polymerFlush();
		await nextFrame();
		await nextFrame();

		const [fMin, fMax] = inputValues(columnHeaderInput);
		assert.equal(
			fMin,
			toLocalISOString(min).slice(0, 10),
			'Expect _filterInput.min to be local ISO String',
		);
		assert.equal(
			fMax,
			toLocalISOString(max).slice(0, 10),
			'Expect _filterInput.max to be local ISO String',
		);

		assert.equal(
			toDate(fMin).getTime(),
			min.getTime(),
			'Expect min input and filter to be equal as dates',
		);
		assert.equal(
			toDate(fMax).getTime(),
			max.getTime(),
			'Expect max input and filter to be equal as dates',
		);
	});

	test('changing _filterInput updates filter', async () => {
		const columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-date-range-input',
		);
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);

		await typeInto(columnHeaderInput, 0, '2015-03-18');
		await typeInto(columnHeaderInput, 1, '2023-03-21');
		applyFilter(columnHeaderInput);
		polymerFlush();
		await nextFrame();
		await nextFrame();
		assert.equal(
			omnitable.filters.date.min.getTime(),
			new Date(2015, 2, 18, 0, 0, 0).getTime(),
		);
		assert.equal(
			omnitable.filters.date.max.getTime(),
			new Date(2023, 2, 21, 23, 59, 59).getTime(),
			'Expecting max date included',
		);
	});

	test('changing only _filterInput min updates filter min', async () => {
		await typeInto(columnHeaderInput, 0, '2015-08-27');
		applyFilter(columnHeaderInput);
		polymerFlush();
		await nextFrame();
		await nextFrame();
		assert.equal(
			omnitable.filters.date.min.getTime(),
			new Date(2015, 7, 27, 0, 0, 0).getTime(),
		);
	});

	test('filtering on specific date with datetime source', async () => {
		const value = data[5][column.valuePath]; // '2017-12-22T23:00:00Z'

		await typeInto(columnHeaderInput, 0, '2017-12-22');
		await typeInto(columnHeaderInput, 1, '2017-12-23');
		applyFilter(columnHeaderInput);
		polymerFlush();
		await nextFrame();
		await nextFrame();

		assert.include(
			omnitable.sortedFilteredGroupedItems.map((i) => i[column.valuePath]),
			value,
		);
		assert.lengthOf(omnitable.sortedFilteredGroupedItems, 1);
	});

	test('filtering on specific date, with datetime source, same day test', async () => {
		const value = data[5][column.valuePath], // '2017-12-22T23:00:00Z'
			// TZ-stable: the filtered day is the value's local ISO day
			day = toLocalISOString(toDate(value)).slice(0, 10);

		columnHeaderInput._filterInput = {
			min: day,
			max: day,
		};

		polymerFlush();
		await nextFrame();

		assert.include(
			omnitable.sortedFilteredGroupedItems.map((i) => i[column.valuePath]),
			value,
		);
		assert.lengthOf(omnitable.sortedFilteredGroupedItems, 1);
	});
});

suite('date - pure functions', () => {
	test('toDate converts an value to valid date', () => {
		assert.equal(
			toDate('2023-03-21T00:00:00Z').getTime(),
			new Date('2023-03-21T00:00:00Z').getTime(),
		);
		assert.equal(
			toDate(new Date('2015-03-18T00:00:00Z')).getTime(),
			new Date('2015-03-18T00:00:00Z').getTime(),
		);
		assert.equal(
			toDate(new Date('2017-09-23T01:02:03Z')).getTime(),
			new Date('2017-09-23T01:02:03Z').getTime(),
		);
		assert.equal(
			toDate(new Date(86400000)).getTime(),
			new Date(Date.UTC(1970, 0, 2)).getTime(),
		);
	});

	test('toDate limits parameters', () => {
		assert.equal(
			toDate(
				'2023-03-21T00:00:00Z',
				'2023-03-21T00:00:00Z',
				Math.min,
			).getTime(),
			new Date('2023-03-21T00:00:00Z').getTime(),
		); // min
		assert.equal(
			toDate(
				new Date('2015-03-18T00:00:00Z'),
				'2053-04-21T00:00:00Z',
				Math.min,
			).getTime(),
			new Date('2015-03-18T00:00:00Z').getTime(),
		); // min
		assert.equal(
			toDate(
				'2023-03-21T00:00:00Z',
				'2023-04-21T00:00:00Z',
				Math.max,
			).getTime(),
			new Date('2023-04-21T00:00:00Z').getTime(),
		); //max
		assert.equal(
			toDate(
				new Date('2015-03-18T00:00:00Z'),
				'2017-03-18T00:00:00Z',
			).getTime(),
			new Date('2015-03-18T00:00:00Z').getTime(),
		); // missing limitFunc returns date
	});

	test('date returns comparable values', () => {
		assert.typeOf(getComparableValue({}, '2023-03-21T00:00:00Z'), 'number');
		assert.typeOf(
			getComparableValue({}, new Date('2015-03-18T00:00:00Z')),
			'number',
		);
		assert.typeOf(getComparableValue({}, new Date(86400000)), 'number');
		assert.equal(
			getComparableValue({}, new Date('2010-01-08T12:04:01Z')),
			1262952241000,
		);
	});

	test('getString returns formated date with locale en-US', () => {
		const column = { valuePath: 'date', locale: 'en-US' };
		assert.equal(getString(column), '');
		assert.isString(getString(column, data[0]));
		assert.isString(getString(column, data[1]));
		assert.isString(getString(column, data[3]));
		assert.isString(getString(column, data[4]));
		assert.isString(getString(column, data[5]));
		assert.equal(getString(column, data[0]), '3/21/2023');
		assert.equal(getString(column, data[1]), '3/18/2015');
		assert.equal(getString(column, data[3]), '6/24/1999');
		assert.equal(getString(column, data[4]), '8/27/2016');
	});

	test('_toLocalISOString returns formated date', () => {
		['2016-08-27', '2015-01-03', '2021-12-31'].forEach((value) => {
			const date = toDate(value);
			assert.equal(
				toLocalISOString(date),
				toDate(date.getTime() - date.getTimezoneOffset() * 6e4)
					.toISOString()
					.slice(0, 23),
			);
		});
	});
});
