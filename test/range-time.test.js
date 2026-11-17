import { assert, nextFrame } from '@open-wc/testing';

import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import '../src/cosmoz-omnitable';
import {
	getComparableValue,
	toDate,
	toHashString,
	toInputString,
} from '../src/lib/utils-time';
import { rangeAllFixture } from './helpers/fixtures/range-fixture.js';

const data = [
		{
			age: 17,
			amount: {
				amount: '12.4',
				currency: 'USD',
			},
			date: '2023-03-21T00:00:00Z',
			time: '',
		},
		{
			amount: { amount: 2 },
			date: new Date('2015-03-18T00:00:00Z'),
		},
		{
			age: -11,
			amount: {
				amount: 678,
				currency: 'AUD',
			},
			date: new Date(86400000), // Fri Jan 02 1970
			time: 86400000,
		},
		{
			age: 9,
			amount: {
				amount: -8,
				currency: 'EUR',
			},
			date: new Date(99, 5, 24, 11, 33, 30, 0), // Thu Jun 24 1999 11:33:30 GMT+0300 (EEST)
			time: '86400000',
		},
		{
			age: 5,
			amount: {
				amount: '3450',
				currency: 'DKK',
			},
			date: new Date('2016-08-27'),
			time: '2016-08-27T14:34:56Z',
		},
		{
			date: '2017-12-22T23:00:00Z',
			time: '00:00:00',
		},
	],
	rangeFixture = rangeAllFixture;

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

suite('time', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, column, columnHeaderInput;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[4];
		columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-time-range-input',
		);
	});

	test('instantiates a cosmoz-omnitable-column-time', () => {
		assert.isNotNull(
			customElements.get('cosmoz-omnitable-column-time'),
			'the time column element is registered',
		);
		assert.equal(column.name, 'time');
	});

	test('changing filter updates _filterInput', async () => {
		assert.isUndefined(omnitable.filters.time);
		omnitable.setFilterState('time', {
			filter: {
				min: '2000-01-01T09:12:00',
				max: '2016-08-27T09:34:56',
			},
		});
		polymerFlush();
		await nextFrame();
		await nextFrame();
		await nextFrame();
		const live = omnitable.shadowRoot.querySelector(
				'cosmoz-omnitable-time-range-input',
			),
			sameAsSetup = live === columnHeaderInput;
		assert.deepEqual(
			inputValues(live),
			['09:12:00', '09:34:56'],
			JSON.stringify({
				sameAsSetup,
				fi: live._filterInput,
				filter: live.filter,
				filters: { ...omnitable.filters },
				timeFilters: omnitable.filters.time,
				filterStateTouched: omnitable.filterState,
			}),
		);
		assert.isTrue(sameAsSetup, 'the header input element persists');
	});

	test('changing _filterInput updates filter', async () => {
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);

		const min = '08:12:00',
			max = '11:34:56';

		await typeInto(columnHeaderInput, 0, min);
		await typeInto(columnHeaderInput, 1, max);
		applyFilter(columnHeaderInput);
		polymerFlush();
		await nextFrame();
		await nextFrame();
		const timeFilter = omnitable.filters.time ?? {},
			{ min: fMin, max: fMax } = timeFilter;
		assert.equal(fMin.getTime(), columnHeaderInput.toValue(min).getTime());
		assert.equal(fMax.getTime(), columnHeaderInput.toValue(max).getTime());
	});

	test('changing only _filterInput min updates filter min', async () => {
		const min = '04:21:10';
		await typeInto(columnHeaderInput, 0, min);
		applyFilter(columnHeaderInput);
		polymerFlush();
		await nextFrame();
		await nextFrame();
		const minFilter = omnitable.filters.time ?? {};
		assert.equal(minFilter.min?.getTime?.() ?? null, toDate(min).getTime());
	});
});

suite('time - pure functions', () => {
	test('time toDate converts timestamp to valid date', () => {
		assert.equal(toDate(''), null);
		assert.equal(toDate(), null);
		assert.equal(
			toDate(86400000).getTime(),
			new Date(Date.UTC(1970, 0, 2)).getTime(),
		);
		assert.isNull(toDate('86400000'));
	});

	test('time toDate accepts time as string and converts it to date', () => {
		assert.equal(
			toDate('2016-08-27T14:34:56Z').getTime(),
			new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime(),
		);
	});

	test('time toDate limits parameters', () => {
		assert.equal(
			toDate(new Date(86400000), '2023-04-21T04:00:00Z', Math.min).getTime(),
			new Date(Date.UTC(1970, 0, 2)).getTime(),
		); // min
		assert.equal(
			toDate(new Date(86400000), '2053-04-21T11:23:32Z', Math.max).getTime(),
			new Date('2053-04-21T11:23:32Z').getTime(),
		); // max
		assert.equal(
			toDate(
				'2016-08-27T14:34:56Z',
				'2023-04-21T04:00:00Z',
				Math.min,
			).getTime(),
			new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime(),
		); //min
		assert.equal(
			toDate(
				'2023-04-21T10:23:32Z',
				new Date('2023-04-21T11:23:32Z').getTime(),
				Math.max,
			).getTime(),
			new Date('2023-04-21T11:23:32Z').getTime(),
		); //max
		assert.equal(
			toDate('2016-08-27T14:34:56Z', '2017-03-18T11:23:32Z').getTime(),
			new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime(),
		); // missing limitFunc returns date
	});

	test('time toDate accepts limit as timestamp', () => {
		assert.equal(
			toDate(
				new Date(2029, 0, 2, 17, 23, 12).getTime(),
				86400000,
				Math.min,
			).getTime(),
			86400000,
		);
	});

	test('time getComparableValue returns right value', () => {
		assert.equal(
			getComparableValue(
				{ valuePath: 'time' },
				{ time: '2015-03-18T00:00:00Z' },
			),
			0,
		);
	});

	test('time _toInputString returns local ISO string', () => {
		assert.equal(toInputString(), null);
		assert.equal(toInputString('2019-11-03T17:21:44'), '17:21:44');
		assert.equal(toInputString('2016-08-27T14:34:56'), '14:34:56');
		assert.equal(
			toInputString('2016-08-27T14:34:56Z'),
			toLocalISOString(toDate('2016-08-27T14:34:56Z')).slice(11, 19),
		);
	});

	test('time _toHashString converts time to UTC string replacing : with .', () => {
		assert.equal(toHashString(new Date(86400000)), '00.00.00');
		assert.equal(toHashString(new Date('2016-08-27T14:34:56Z')), '14.34.56');
		assert.equal(toHashString(new Date('2004-11-14T06:13:06Z')), '06.13.06');
		assert.equal(toHashString(new Date('2019-01-01T03:03:03Z')), '03.03.03');
		assert.equal(toHashString(new Date('2014-12-07T07:25:13Z')), '07.25.13');
		assert.equal(toHashString(new Date('1986-09-29T02:28:56Z')), '02.28.56');
	});
});
