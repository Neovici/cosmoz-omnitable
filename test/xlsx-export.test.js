
import {
	assert, html, nextFrame
} from '@open-wc/testing';

import { assert as sinonAssert } from 'sinon';
import { setupOmnitableFixture } from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';
import { prepareXlsxData } from '../lib/save-as-xlsx-action';
import { toDate } from '../lib/utils-date';

sinonAssert.expose(assert, { prefix: '' });

suite('xlsx-export-omnitable', () => {
	let omnitable;
	const data = [{
		id: 0,
		'first-name': 'Carl',
		amount: 12.4,
		date: new Date(2017, 7 - 1, 10)
	}, {
		id: 1,
		'first-name': 'Mia',
		amount: 678,
		date: new Date()
	}, {
		id: 2,
		'first-name': 'Selena',
		amount: 2300,
		date: new Date(Date.UTC(2017, 11, 1, 3, 23, 16))
	}, {
		id: 3,
		'first-name': 'Teo',
		amount: 7000,
		date: new Date(Date.UTC(2016, 0, 13, 10, 41, 58))
	}, {
		id: 4,
		'first-name': 'Klark',
		amount: 23019,
		date: new Date(Date.UTC(2029, 7, 30, 1, 27, 13))
	}, {
		id: 5,
		'first-name': 'Lenotika',
		amount: 9304,
		date: new Date(Date.UTC(2013, 9, 13, 5, 7, 29))
	}, {
		id: 6,
		'first-name': 'Manil',
		amount: 28420,
		date: new Date(Date.UTC(2018, 10, 3, 24, 1, 14))
	}];

	setup(async () => {
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" selection-enabled xlsx-filename="Test.xlsx" .resizeSpeedFactor=${ 1 }>
				<cosmoz-omnitable-column-autocomplete id="id" name="id" title="ID" value-path="id">
				</cosmoz-omnitable-column-autocomplete>
				<cosmoz-omnitable-column id="first-name" name="first-name" title="First Name" value-path="first-name">
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-column-amount id="amount" name="amount" title="Amount" value-path="amount" locale="en-US">
				</cosmoz-omnitable-column-amount>
				<cosmoz-omnitable-column-date id="date" name="date" title="Date" value-path="date">
				</cosmoz-omnitable-column-date>
			</cosmoz-omnitable>
		`, data.slice(0));
	});

	test('it prepares selected items', async () => {
		// select two items
		omnitable.selectItem(data[0]);
		omnitable.selectItem(data[1]);
		await nextFrame();
		// prepare selected items, verify data
		const xlsx = prepareXlsxData(omnitable.columns, omnitable.selectedItems),
			headers = xlsx[0];
		assert.equal(headers[0], omnitable.columns[0].title);
		assert.equal(headers.length, omnitable.columns.length);
	});

});

suite('toXlsx range tests', () => {
	let omnitable,
		xlsx;
	const data = [{
		number: 432,
		amount: {
			currency: 'GBP',
			amount: 2781
		},
		date: new Date(Date.UTC(2020, 2, 14, 11, 48, 13)),
		time: new Date(Date.UTC(2020, 2, 14, 11, 48, 13)),
		datetime: new Date(Date.UTC(2020, 2, 14, 11, 48, 13))
	}, {
		number: 7001,
		amount: {
			currency: 'EUR',
			amount: 845
		},
		date: new Date(Date.UTC(2029, 7, 30, 1, 27, 13)),
		time: new Date(Date.UTC(2029, 7, 30, 1, 27, 13)),
		datetime: new Date(Date.UTC(2029, 7, 30, 1, 27, 13))
	}, {
		number: 2405,
		amount: {
			currency: 'USD',
			amount: 107
		},
		date: new Date(Date.UTC(2018, 4, 25, 2, 31, 29)),
		time: new Date(Date.UTC(2018, 4, 25, 2, 31, 29)),
		datetime: new Date(Date.UTC(2018, 4, 25, 2, 31, 29))
	}, {
		number: 108,
		amount: {
			currency: 'BRL',
			amount: 4406
		},
		date: new Date(Date.UTC(2017, 0, 2, 7, 25, 11)),
		time: new Date(Date.UTC(2017, 0, 2, 7, 25, 11)),
		datetime: new Date(Date.UTC(2017, 0, 2, 7, 25, 11))
	}, {
		number: 857,
		amount: {
			currency: 'JPY',
			amount: 341
		},
		date: new Date(Date.UTC(2016, 1, 27, 17, 30, 51)),
		time: new Date(Date.UTC(2016, 1, 27, 17, 30, 51)),
		datetime: new Date(Date.UTC(2016, 1, 27, 17, 30, 51))
	}, {
		number: 73,
		amount: {
			currency: 'DKK',
			amount: 11
		},
		date: new Date(Date.UTC(2013, 9, 13, 5, 7, 29)),
		time: new Date(Date.UTC(2013, 9, 13, 5, 7, 29)),
		datetime: new Date(Date.UTC(2013, 9, 13, 5, 7, 29))
	}, {
		number: 5774,
		amount: {
			currency: 'EUR',
			amount: 932
		},
		date: '2024-03-14T13:05:07',
		time: '2024-03-14T13:05:07',
		datetime: '2024-03-14T13:05:07'
	}, {
		number: 0,
		amount: {
			currency: 'AED',
			amount: 765432
		},
		date: 'Thu Mar 7 2009 06:25:52 GMT+0200 (EET)', // Bucharest, Romania
		time: 'Thu Mar 7 2009 06:25:52 GMT+0200 (EET)',
		datetime: 'Thu Mar 7 2009 06:25:52 GMT+0200 (EET)'
	}, {
		number: 59,
		amount: {
			currency: 'AUD',
			amount: -101
		},
		date: '2012-10-12T07:22:46Z',
		time: '2012-10-12T07:22:46Z',
		datetime: '2012-10-12T07:22:46Z'
	}, {
		number: -340,
		amount: {
			currency: 'CAD',
			amount: -4321
		},
		date: 'Tue Jan 16 2018 05:47:40 -08:00', // Vancouver Canada
		time: 'Tue Jan 16 2018 05:47:40 -08:00',
		datetime: 'Tue Jan 16 2018 05:47:40 -08:00'
	}, {
		number: -22,
		amount: {
			currency: 'EUR',
			amount: -22
		},
		date: 'Tue Jan 16 2018 14:06:29 +01:00', // Lisbon, Portugal (Lisboa)
		time: 'Tue Jan 16 2018 14:06:29 +01:00',
		datetime: 'Tue Jan 16 2018 14:06:29 +01:00'
	}];

	setup(async () => {
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" selection-enabled xlsx-filename="ToXlsx.xlsx">
				<cosmoz-omnitable-column-number name="number" title="number" value-path="number">
				</cosmoz-omnitable-column-number>
				<cosmoz-omnitable-column-amount name="amount" title="Amount" value-path="amount" locale="en-US">
				</cosmoz-omnitable-column-amount>
				<cosmoz-omnitable-column-date name="date" title="Date" value-path="date">
				</cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-time name="time" title="Time" value-path="time">
				</cosmoz-omnitable-column-time>
				<cosmoz-omnitable-column-datetime name="datetime" title="DateTime" value-path="datetime">
				</cosmoz-omnitable-column-datetime>
			</cosmoz-omnitable>
		`, data);
		data.forEach(item => omnitable.selectItem(item));
		await nextFrame();
		xlsx = prepareXlsxData(omnitable.columns, omnitable.selectedItems);
	});

	test('prepares number values', () => {
		xlsx
			.map(row => row[0])
			.slice(1)
			.forEach((value, index) => {
				assert.equal(value, data[index].number);
			});
	});

	test('prepares amount values', () => {
		const amounts = xlsx.map(row => row[1]);
		// const nonBreakingSpace = String.fromCharCode(160);

		assert.equal(amounts[1], '£2,781.00');	 // currency: 'GBP', amount: 2781
		assert.equal(amounts[2], '€845.00');		// currency: 'EUR', amount: 845
		assert.equal(amounts[3], '$107.00');		// currency: 'USD', amount: 107
		assert.equal(amounts[4], 'R$4,406.00');	 // currency: 'BRL', amount: 4406
		assert.equal(amounts[5], '¥341');	// currency: 'JPY', amount: 341
		// assert.equal(amounts[6], `SEK${nonBreakingSpace}11.00`);		// currency: 'SEK', amount: 11		// 'kr11.00'
		assert.equal(amounts[7], '€932.00');		// currency: 'EUR', amount: 932
		// assert.equal(amounts[8], `AED${nonBreakingSpace}765,432.00`); //currency: 'AED', amount: 765432
		assert.equal(amounts[9], '-A$101.00');	 // currency: 'AUD', amount: -101
		assert.equal(amounts[10], '-CA$4,321.00'); //currency: 'CAD', amount: -4321
		assert.equal(amounts[11], '-€22.00');		 //currency: 'EUR', amount: -22
	});

	test('prepares date values', () => {
		xlsx
			.map(row => row[2])
			.slice(1)
			.forEach((value, index) => {
				const date	= toDate(data[index].date);
				assert.isOk(date, `date at index: ${ index }`);
				date.setHours(0, 0, 0);
				assert.equal(toDate(value).getTime(), date.getTime());
			});
	});

	test('prepares time values', () => {
		const column = omnitable.columns[3];
		xlsx
			.map(row => row[3])
			.slice(1)
			.forEach((value, index) => {
				const time = column.toXlsxValue(column, data[index]);
				assert.equal(value, time);
			});
	});

	test('prepares datetime values', () => {
		const column = omnitable.columns[4];
		xlsx
			.map(row => row[4])
			.slice(1)
			.forEach((value, index) => {
				const time = column.toXlsxValue(column, data[index]);
				assert.equal(value, time);
				assert.equal(toDate(value).getTime(), toDate(data[index].datetime).getTime());
			});
	});
});

