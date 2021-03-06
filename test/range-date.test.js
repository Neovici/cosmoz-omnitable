/* eslint-disable max-lines */
import {
	assert, html
} from '@open-wc/testing';

import sinon from 'sinon';

import { setupOmnitableFixture } from './helpers/utils';
import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

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
		<cosmoz-omnitable id="omnitable" style="width: 800px">
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

sinon.assert.expose(chai.assert, { prefix: '' });

suite('render', () => {
	test('basic render', async () => {
		const omnitable = await setupOmnitableFixture(rangeFixture, data);
		polymerFlush();

		const cells = Array.from(omnitable.shadowRoot.querySelectorAll('[slot="item-cell"]'));
		assert.isAtLeast(cells.length, 20);
		assert.equal(cells[0].innerText, '17');
	});
});

suite('date', () => {
	let omnitable,
		column;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[2];
	});

	test('instantiates a cosmoz-omnitable-column-date', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnDate');
	});

	test('toDate converts an value to valid date', () => {
		assert.equal(column.toDate('2023-03-21T00:00:00Z').getTime(), new Date('2023-03-21T00:00:00Z').getTime());
		assert.equal(column.toDate(new Date('2015-03-18T00:00:00Z')).getTime(), new Date('2015-03-18T00:00:00Z').getTime());
		assert.equal(column.toDate(new Date('2017-09-23T01:02:03Z')).getTime(), new Date('2017-09-23T01:02:03Z').getTime());
		assert.equal(column.toDate(new Date(86400000)).getTime(), new Date(Date.UTC(1970, 0, 2)).getTime());
	});

	test('toDate limits parameters', () => {
		assert.equal(
			column.toDate('2023-03-21T00:00:00Z', '2023-03-21T00:00:00Z', Math.min).getTime(),
			new Date('2023-03-21T00:00:00Z').getTime()
		); // min
		assert.equal(
			column.toDate(new Date('2015-03-18T00:00:00Z'), '2053-04-21T00:00:00Z', Math.min).getTime(),
			new Date('2015-03-18T00:00:00Z').getTime()
		); // min
		assert.equal(
			column.toDate('2023-03-21T00:00:00Z', '2023-04-21T00:00:00Z', Math.max).getTime(),
			new Date('2023-04-21T00:00:00Z').getTime()
		); //max
		assert.equal(
			column.toDate(new Date('2015-03-18T00:00:00Z'), '2017-03-18T00:00:00Z').getTime(),
			new Date('2015-03-18T00:00:00Z').getTime()
		); // missing limitFunc returns date
	});

	test('date returns comparable values', () => {
		assert.typeOf(column.getComparableValue('2023-03-21T00:00:00Z'), 'number');
		assert.typeOf(column.getComparableValue(new Date('2015-03-18T00:00:00Z')), 'number');
		assert.typeOf(column.getComparableValue(new Date(86400000)), 'number');
		assert.equal(column.getComparableValue(new Date('2010-01-08T12:04:01Z')), 1262952241000);
	});

	test('getString returns formated date with locale en-US', () => {
		assert.equal(column.getString(), '');
		assert.isString(column.getString(data[0], 'date'));
		assert.isString(column.getString(data[1], 'date'));
		assert.isString(column.getString(data[3], 'date'));
		assert.isString(column.getString(data[4], 'date'));
		assert.isString(column.getString(data[5], 'date'));
		assert.equal(column.getString(data[0]), '3/21/2023');
		assert.equal(column.getString(data[1]), '3/18/2015');
		assert.equal(column.getString(data[3], 'date'), '6/24/1999');
		assert.equal(column.getString(data[4]), '8/27/2016');
	});

	test('_toLocalISOString returns formated date', () => {
		[
			'2016-08-27',
			'2015-01-03',
			'2021-12-31'
		].forEach(value => {
			const date = column.toValue(value);
			assert.equal(
				column._toLocalISOString(date),
				column.toValue(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 23)
			);
		});
	});

	test('changing filter updates _filterInput', () => {
		const min = column.toValue('2015-03-18'),
			max = column.toValue('2023-03-21');

		assert.isNull(column.filter.min);
		assert.isNull(column.filter.max);

		column.filter = {
			min,
			max
		};
		const {
			max: fMax, min: fMin
		} = column._filterInput;
		assert.equal(fMin, column._toLocalISOString(min).slice(0, 10), 'Expect _filterInput.min to be local ISO String');
		assert.equal(fMax, column._toLocalISOString(max).slice(0, 10), 'Expect _filterInput.max to be local ISO String');

		assert.equal(column.toValue(fMin).getTime(), min.getTime(), 'Expect min input and filter to be equal as dates');
		assert.equal(column.toValue(fMax).getTime(), max.getTime(), 'Expect max input and filter to be equal as dates');

	});

	test('changing _filterInput updates filter', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);

		column._filterInput = {
			min: '2015-03-18',
			max: '2023-03-21'
		};
		polymerFlush();
		assert.equal(column.filter.min.getTime(), new Date(2015, 2, 18, 0, 0, 0).getTime());
		assert.equal(column.filter.max.getTime(), new Date(2023, 2, 21, 23, 59, 59).getTime(), 'Expecting max date included');
	});

	test('changing only _filterInput min updates filter min', () => {
		column.set('_filterInput.min', '2015-08-27');
		polymerFlush();
		assert.equal(column.filter.min.getTime(), new Date(2015, 7, 27, 0, 0, 0).getTime());
	});

	test('filtering on specific date with datetime source', () => {
		const value = data[5][column.valuePath], // '2017-12-22T23:00:00Z'
			day = new Date(value).getDate();

		column._filterInput = {
			min: `2017-12-${ day }`,
			max: `2017-12-${ day + 1 }`
		};
		column._filterInput = {
			min: '2017-12-22',
			max: '2017-12-23'
		};
		omnitable.flush();
		assert.include(omnitable.sortedFilteredGroupedItems.map(i => i[column.valuePath]), value);
	});

	test('filtering on specific date, with datetime source, same day test', () => {
		const value = data[5][column.valuePath], // '2017-12-22T23:00:00Z'
			day = new Date(value).getDate();

		column._filterInput = {
			min: `2017-12-${ day }`,
			max: `2017-12-${ day }`
		};

		omnitable.flush();

		assert.include(omnitable.sortedFilteredGroupedItems.map(i => i[column.valuePath]), value);
	});
});

suite('datetime', () => {
	let column;

	setup(async () => {
		const omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[3];
	});

	test('_toHashString handles null', () => {
		assert.equal(column._toHashString(null), '');
	});

	test('_toHashString handles undefined', () => {
		assert.equal(column._toHashString(undefined), '');
	});

	test('_fromHashString handles null', () => {
		assert.isUndefined(column._fromHashString(null));
	});

	test('_fromHashString handles undefined', () => {
		assert.isUndefined(column._fromHashString(undefined));
	});

	test('_fromHashString handles empty string', () => {
		assert.isUndefined(column._fromHashString(''));
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
			'2114-04-22T04:09:00'
		].forEach(value =>
			assert.equal(column._toInputString(value), column._toLocalISOString(column.toValue(value)).slice(0, 19))
		);
	});

	test('_toHashString converts datetime to UTC string replacing : with .', () => {
		[
			'2021-12-03T11:26:04',
			'2016-04-22T07:09:00',
			'2017-01-16T09:19:38'
		].forEach(date =>
			assert.equal(column._toHashString(date), column.toValue(date).toISOString().substr(0, 19)
				.replace(/:/gu, '.'))
		);
	});

	test('changing filter updates _filterInput', () => {
		assert.isNull(column.filter.min);
		assert.isNull(column.filter.max);
		column.filter = {
			min: new Date(1970, 0, 2, 2, 0, 0),
			max: new Date(1999, 5, 24, 11, 33, 30)
		};
		assert.equal(column._filterInput.min, '1970-01-02T02:00:00');
		assert.equal(column._filterInput.max, '1999-06-24T11:33:30');
	});

	test('changing _filterInput updates filter', () => {
		column._filterInput = {
			min: '1970-01-02T02:00:00',
			max: '1999-06-24T11:33:30'
		};
		polymerFlush();
		assert.equal(column.filter.min.getTime(), new Date(1970, 0, 2, 2, 0, 0).getTime());
		assert.equal(column.filter.max.getTime(), new Date(1999, 5, 24, 11, 33, 30).getTime());
	});

	test('changing only _filterInput min updates filter min', () => {
		column.set('_filterInput.min', '2014-06-24T11:33:30');
		polymerFlush();
		assert.equal(column.filter.min.getTime(), new Date(2014, 5, 24, 11, 33, 30).getTime());
	});
});

suite('time', () => {
	let column;

	setup(async () => {
		const omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[4];
	});

	test('instantiates a cosmoz-omnitable-column-time', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnTime');
	});

	test('time toDate converts timestamp to valid date', () => {
		assert.equal(column.toDate(''), null);
		assert.equal(column.toDate(), null);
		assert.equal(column.toDate(86400000).getTime(), new Date(Date.UTC(1970, 0, 2)).getTime());
		assert.isNull(column.toDate('86400000'));
	});

	test('time toDate accepts time as string and converts it to date', () => {
		assert.equal(column.toDate('2016-08-27T14:34:56Z').getTime(), new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime());
	});

	test('time toDate limits parameters', () => {
		assert.equal(column.toDate(new Date(86400000), '2023-04-21T04:00:00Z', Math.min).getTime(), new Date(Date.UTC(1970, 0, 2)).getTime()); // min
		assert.equal(column.toDate(new Date(86400000), '2053-04-21T11:23:32Z', Math.max).getTime(), new Date('2053-04-21T11:23:32Z').getTime()); // max
		assert.equal(column.toDate('2016-08-27T14:34:56Z', '2023-04-21T04:00:00Z', Math.min).getTime(), new Date(Date.UTC(2023, 3, 21, 4)).getTime()); //min
		assert.equal(
			column.toDate('2023-04-21T10:23:32Z', new Date('2023-04-21T11:23:32Z').getTime(), Math.max).getTime(),
			new Date('2023-04-21T11:23:32Z').getTime()
		); //max
		assert.equal(
			column.toDate('2016-08-27T14:34:56Z', '2017-03-18T11:23:32Z').getTime(),
			new Date(Date.UTC(2016, 7, 27, 14, 34, 56)).getTime()
		); // missing limitFunc returns date
	});

	test('time toDate accepts limit as timestamp', () => {
		assert.equal(column.toDate(new Date(2029, 0, 2, 17, 23, 12).getTime(), 86400000, Math.min).getTime(), 86400000);
	});

	test('time getComparableValue returns right value', () => {
		assert.equal(column.getComparableValue({ time: '2015-03-18T00:00:00Z' }, 'time'), 0);
	});

	test('time _toInputString returns local ISO string', () => {
		assert.equal(column._toInputString(), null);
		assert.equal(column._toInputString('2019-11-03T17:21:44'), '17:21:44');
		assert.equal(column._toInputString('2016-08-27T14:34:56'), '14:34:56');
		assert.equal(column._toInputString('2016-08-27T14:34:56Z'), column._toLocalISOString(column.toValue('2016-08-27T14:34:56Z')).slice(11, 19));
	});

	test('time _toHashString converts time to UTC string replacing : with .', () => {
		assert.equal(column._toHashString(new Date(86400000)), '00.00.00');
		assert.equal(column._toHashString(new Date('2016-08-27T14:34:56Z')), '14.34.56');
		assert.equal(column._toHashString(new Date('2004-11-14T06:13:06Z')), '06.13.06');
		assert.equal(column._toHashString(new Date('2019-01-01T03:03:03Z')), '03.03.03');
		assert.equal(column._toHashString(new Date('2014-12-07T07:25:13Z')), '07.25.13');
		assert.equal(column._toHashString(new Date('1986-09-29T02:28:56Z')), '02.28.56');
	});

	test('changing filter updates _filterInput', () => {
		assert.isNull(column.filter.min);
		assert.isNull(column.filter.max);
		column.filter = {
			min: '2000-01-01T09:12:00',
			max: '2016-08-27T09:34:56'
		};
		assert.equal(column._filterInput.min, '09:12:00');
		assert.equal(column._filterInput.max, '09:34:56');
	});

	test('changing _filterInput updates filter', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);

		const min = '08:12:00',
			max = '11:34:56';

		column._filterInput = {
			min,
			max
		};
		polymerFlush();
		const {
			min: fMin, max: fMax
		} = column.filter;
		assert.equal(fMin.getTime(), column.toValue(min).getTime());
		assert.equal(fMax.getTime(), column.toValue(max).getTime());
	});

	test('changing only _filterInput min updates filter min', () => {
		const min = '04:21:10';
		column.set('_filterInput.min', min);
		polymerFlush();
		assert.equal(column.filter.min.getTime(), column.toValue(min).getTime());
	});

});
