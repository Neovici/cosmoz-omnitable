import { assert, nextFrame } from '@open-wc/testing';

import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';
import { toDate } from '../src/lib/utils-date';
import {
	fromHashString,
	toHashString,
	toInputString,
} from '../src/lib/utils-datetime';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable';
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
// the datetime header composites a cosmoz-datetime-input wrapping two
// cosmoz-inputs (date part first, time part second)
const inputsOf = (header) =>
		[...header.shadowRoot.querySelectorAll('cosmoz-datetime-input')].flatMap(
			(composite) => [...composite.shadowRoot.querySelectorAll('cosmoz-input')],
		),
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

suite('datetime', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, columnHeaderInput;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-datetime-range-input',
		);
	});

	test('changing filter updates _filterInput', async () => {
		assert.isUndefined(omnitable.filters.datetime);
		omnitable.setFilterState('datetime', {
			filter: {
				min: new Date(1970, 0, 2, 2, 0, 0),
				max: new Date(1999, 5, 24, 11, 33, 30),
			},
		});
		polymerFlush();
		await nextFrame();
		await nextFrame();
		assert.deepEqual(inputValues(columnHeaderInput), [
			'1970-01-02',
			'02:00:00',
			'1999-06-24',
			'11:33:30',
		]);
	});

	test('changing _filterInput updates filter', async () => {
		// the composite splits each datetime into a date and a time input
		await typeInto(columnHeaderInput, 0, '1970-01-02');
		await typeInto(columnHeaderInput, 1, '02:00:00');
		await typeInto(columnHeaderInput, 2, '1999-06-24');
		await typeInto(columnHeaderInput, 3, '11:33:30');
		applyFilter(columnHeaderInput);
		polymerFlush();
		await nextFrame();
		await nextFrame();
		await nextFrame();
		assert.equal(
			omnitable.filters.datetime.min.getTime(),
			new Date(1970, 0, 2, 2, 0, 0).getTime(),
		);
		assert.equal(
			omnitable.filters.datetime.max.getTime(),
			new Date(1999, 5, 24, 11, 33, 30).getTime(),
		);
	});

	test('changing only _filterInput min updates filter min', async () => {
		await typeInto(columnHeaderInput, 0, '2014-06-24');
		await typeInto(columnHeaderInput, 1, '11:33:30');
		applyFilter(columnHeaderInput);
		polymerFlush();
		await nextFrame();
		await nextFrame();
		await nextFrame();
		assert.equal(
			omnitable.filters.datetime.min.getTime(),
			new Date(2014, 5, 24, 11, 33, 30).getTime(),
		);
	});
});

suite('datetime - pure functions', () => {
	test('_toHashString handles null', () => {
		assert.equal(toHashString(null), '');
	});

	test('_toHashString handles undefined', () => {
		assert.equal(toHashString(undefined), '');
	});

	test('_fromHashString handles null', () => {
		assert.isUndefined(fromHashString(null));
	});

	test('_fromHashString handles undefined', () => {
		assert.isUndefined(fromHashString(undefined));
	});

	test('_fromHashString handles empty string', () => {
		assert.isUndefined(fromHashString(''));
	});

	// test('toXlsxValue handles undefined valuePath parameter and property', done => {
	//	column.valuePath = undefined;
	//	assert.equal(column.toXlsxValue({date: new Date() }), '');
	//	done();
	// });

	test('_toInputString converts datetime to local string', () => {
		[
			86400000,
			'2006-07-14T07:05:39',
			'2021-12-03T09:26:04',
			'2114-04-22T04:09:00',
		].forEach((value) =>
			assert.equal(
				toInputString(value),
				toLocalISOString(toDate(value)).slice(0, 19),
			),
		);
	});

	test('_toHashString converts datetime to UTC string replacing : with .', () => {
		[
			'2021-12-03T11:26:04',
			'2016-04-22T07:09:00',
			'2017-01-16T09:19:38',
		].forEach((date) =>
			assert.equal(
				toHashString(date),
				toDate(date).toISOString().substr(0, 19).replace(/:/gu, '.'),
			),
		);
	});
});
