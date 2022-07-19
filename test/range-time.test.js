
/* eslint-disable max-lines */
import {
	assert, html, nextFrame
} from '@open-wc/testing';

import { setupOmnitableFixture } from './helpers/utils';
import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-omnitable';
import { getComparableValue, toDate, toHashString, toInputString } from '../lib/utils-time';
import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import { columnSymbol } from '../lib/use-dom-columns';

const data = [{
		age: 17,
		amount: {
			amount: '12.4',
			currency: 'USD'
		},
		date: '2023-03-21T00:00:00Z',
		time: ''
	}, {
		amount: { amount: 2 },
		date: new Date('2015-03-18T00:00:00Z')
	}, {
		age: -11,
		amount: {
			amount: 678,
			currency: 'AUD'
		},
		date: new Date(86400000), // Fri Jan 02 1970
		time: 86400000
	}, {
		age: 9,
		amount: {
			amount: -8,
			currency: 'EUR'
		},
		date: new Date(99, 5, 24, 11, 33, 30, 0), // Thu Jun 24 1999 11:33:30 GMT+0300 (EEST)
		time: '86400000'
	}, {
		age: 5,
		amount: {
			amount: '3450',
			currency: 'DKK'
		},
		date: new Date('2016-08-27'),
		time: '2016-08-27T14:34:56Z'
	}, {
		date: '2017-12-22T23:00:00Z',
		time: '00:00:00'
	}],
	rangeFixture = html`
		<cosmoz-omnitable id="omnitable" style="width: 800px" .resizeSpeedFactor=${ 1 }>
			<cosmoz-omnitable-column-number title="Age" name="age" value-path="age">
			</cosmoz-omnitable-column-number>
			<cosmoz-omnitable-column-amount title="Amount" name="amount" value-path="amount">
			</cosmoz-omnitable-column-amount>
			<cosmoz-omnitable-column-date title="Date" name="date" value-path="date" locale="en-US" editable>
			</cosmoz-omnitable-column-date>
			<cosmoz-omnitable-column-datetime title="Datetime" name="datetime" value-path="date" editable>
			</cosmoz-omnitable-column-datetime>
			<cosmoz-omnitable-column-time title="Time" name="time" value-path="time" editable>
			</cosmoz-omnitable-column-time>
		</cosmoz-omnitable>
	`;

suite('time', () => {
	let
		omnitable,
		column,
		columnHeaderInput;


	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[4][columnSymbol];
		columnHeaderInput = omnitable.shadowRoot.querySelector('cosmoz-omnitable-time-range-input');
	});

	test('instantiates a cosmoz-omnitable-column-time', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnTime');
	});


	test('changing filter updates _filterInput', async () => {
		assert.isUndefined(omnitable.filters.time.filter);
		omnitable.setFilterState('time', { filter: {
			min: '2000-01-01T09:12:00',
			max: '2016-08-27T09:34:56'
		}});
		await nextFrame();
		assert.equal(columnHeaderInput._filterInput.min, '09:12:00');
		assert.equal(columnHeaderInput._filterInput.max, '09:34:56');
	});

	test('changing _filterInput updates filter', async () => {
		assert.isNull(columnHeaderInput._filterInput.min);
		assert.isNull(columnHeaderInput._filterInput.max);

		const min = '08:12:00',
			max = '11:34:56';

		columnHeaderInput._filterInput = {
			min,
			max
		};
		polymerFlush();
		await nextFrame();
		const {
			min: fMin, max: fMax
		} = omnitable.filters.time.filter;
		assert.equal(fMin.getTime(), columnHeaderInput.toValue(min).getTime());
		assert.equal(fMax.getTime(), columnHeaderInput.toValue(max).getTime());
	});

	test('changing only _filterInput min updates filter min', async () => {
		const min = '04:21:10';
		columnHeaderInput.set('_filterInput.min', min);
		polymerFlush();
		await nextFrame();
		assert.equal(omnitable.filters.time.filter.min.getTime(), toDate(min).getTime());
	});
});

suite('time - pure functions', () => {
	test('time toDate converts timestamp to valid date', () => {
		assert.equal(toDate(''), null);
		assert.equal(toDate(), null);
		assert.equal(toDate(86400000).getTime(), new Date(Date.UTC(1970, 0, 2)).getTime());
		assert.isNull(toDate('86400000'));
	});

	test('time toDate accepts time as string and converts it to date', () => {
		assert.equal(toDate('2016-08-27T14:34:56Z').getTime(), new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime());
	});

	test('time toDate limits parameters', () => {
		assert.equal(toDate(new Date(86400000), '2023-04-21T04:00:00Z', Math.min).getTime(), new Date(Date.UTC(1970, 0, 2)).getTime()); // min
		assert.equal(toDate(new Date(86400000), '2053-04-21T11:23:32Z', Math.max).getTime(), new Date('2053-04-21T11:23:32Z').getTime()); // max
		assert.equal(toDate('2016-08-27T14:34:56Z', '2023-04-21T04:00:00Z', Math.min).getTime(), new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime()); //min
		assert.equal(
			toDate('2023-04-21T10:23:32Z', new Date('2023-04-21T11:23:32Z').getTime(), Math.max).getTime(),
			new Date('2023-04-21T11:23:32Z').getTime()
		); //max
		assert.equal(
			toDate('2016-08-27T14:34:56Z', '2017-03-18T11:23:32Z').getTime(),
			new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime()
		); // missing limitFunc returns date
	});

	test('time toDate accepts limit as timestamp', () => {
		assert.equal(toDate(new Date(2029, 0, 2, 17, 23, 12).getTime(), 86400000, Math.min).getTime(), 86400000);
	});

	test('time getComparableValue returns right value', () => {
		assert.equal(getComparableValue({ valuePath: 'time' }, { time: '2015-03-18T00:00:00Z' }), 0);
	});

	test('time _toInputString returns local ISO string', () => {
		assert.equal(toInputString(), null);
		assert.equal(toInputString('2019-11-03T17:21:44'), '17:21:44');
		assert.equal(toInputString('2016-08-27T14:34:56'), '14:34:56');
		assert.equal(toInputString('2016-08-27T14:34:56Z'), toLocalISOString(toDate('2016-08-27T14:34:56Z')).slice(11, 19));
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
