/* eslint-disable max-lines */
import { assert, html, nextFrame } from '@open-wc/testing';

import { ignoreResizeObserverLoopErrors, setupOmnitableFixture } from './helpers/utils';
import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';
import {
	fromHashString,
	toHashString,
	toInputString,
} from '../lib/utils-datetime';
import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import { toDate } from '../lib/utils-date';

import '../cosmoz-omnitable';

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
	rangeFixture = html`
		<cosmoz-omnitable
			id="omnitable"
			style="width: 800px"
			.resizeSpeedFactor=${1}
		>
			<cosmoz-omnitable-column-number title="Age" name="age" value-path="age">
			</cosmoz-omnitable-column-number>
			<cosmoz-omnitable-column-amount
				title="Amount"
				name="amount"
				value-path="amount"
			>
			</cosmoz-omnitable-column-amount>
			<cosmoz-omnitable-column-date
				title="Date"
				name="date"
				value-path="date"
				locale="en-US"
				editable
			>
			</cosmoz-omnitable-column-date>
			<cosmoz-omnitable-column-datetime
				title="Datetime"
				name="datetime"
				value-path="date"
				editable
			>
			</cosmoz-omnitable-column-datetime>
			<cosmoz-omnitable-column-time
				title="Time"
				name="time"
				value-path="time"
				editable
			>
			</cosmoz-omnitable-column-time>
		</cosmoz-omnitable>
	`;

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
		await nextFrame();
		assert.equal(columnHeaderInput._filterInput.min, '1970-01-02T02:00:00');
		assert.equal(columnHeaderInput._filterInput.max, '1999-06-24T11:33:30');
	});

	test('changing _filterInput updates filter', async () => {
		columnHeaderInput._filterInput = {
			min: '1970-01-02T02:00:00',
			max: '1999-06-24T11:33:30',
		};
		polymerFlush();
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
		columnHeaderInput.set('_filterInput.min', '2014-06-24T11:33:30');
		polymerFlush();
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
