/* eslint-disable max-lines */
import { assert, html, nextFrame } from '@open-wc/testing';

import { assert as sinonAssert } from 'sinon';

import { flush } from '@polymer/polymer/lib/utils/flush';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import {
	applySingleFilter,
	getComparableValue,
	getCurrency,
	getString,
	renderValue,
	toAmount,
} from '../src/lib/utils-amount';
import { rangeFixture as rangeFixtureShared } from './helpers/fixtures/range-fixture.js';

const data = [
		{
			age: 17,
			amount: {
				amount: '12.4',
				currency: 'USD',
			},
		},
		{
			amount: { amount: 2 },
		},
		{
			age: -11,
			amount: {
				amount: 678,
				currency: 'AUD',
			},
		},
		{
			age: 9,
			amount: {
				amount: -8,
				currency: 'EUR',
			},
		},
		{
			age: 5,
			amount: {
				amount: '3450',
				currency: 'DKK',
			},
		},
		{
			amount: {
				amount: 2015,
				currency: 'EUR',
			},
		},
		{
			age: 46.7511, // 46,75xx
			amount: {
				amount: 347,
				currency: 'USD',
			},
		},
		{
			age: 46.768, // needed in maximumFractionDigits test
			amount: {
				amount: 2581,
				currency: 'EUR',
			},
		},
	],
	rangeFixture = rangeFixtureShared;

sinonAssert.expose(assert, { prefix: '' });

// public drive for the header range input (see test/range.test.js): typing
// through the cosmoz-input's inner input commits the value, a blur commits
// the filter to the omnitable
// shared exchange-rate fixture: EUR is the pivot, the values are
// illustrative cross rates used by the suites below
const testRates = {
	EUR: 1,
	USD: 0.8169982616,
	AUD: 0.6529827192,
	SEK: 0.1019271438,
	GBP: 1.1347079368,
};
const inputsOf = (header) => [
		...header.shadowRoot.querySelectorAll('cosmoz-input'),
	],
	inputValues = (header) =>
		inputsOf(header).map((input) => {
			const v = input.value;
			return typeof v === 'string' && v !== '' && !Number.isNaN(Number(v))
				? Number(v)
				: v;
		}),
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

suite('amount', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	const rates = undefined;
	let omnitable, column, columnHeaderInput;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.querySelector('cosmoz-omnitable-column-amount');
		column.autoupdate = true;
		await nextFrame();
		columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-amount-range-input',
		);
	});

	test('column is an instance of the correct class', () => {
		assert.isNotNull(
			customElements.get('cosmoz-omnitable-column-amount'),
			'the amount column element is registered',
		);
		assert.equal(omnitable.columns[1].name, 'amount');
	});

	test('toAmount returns a valid amount', () => {
		assert.isUndefined(toAmount(rates));
		assert.isNull(toAmount(rates, '123'));
		assert.isNull(toAmount(rates, { amount: 123 }));
		assert.isNull(toAmount(rates, { amount: '123' }));
		assert.isNull(toAmount(rates, { currency: 'USD' }));

		assert.isObject(
			toAmount(rates, {
				amount: 75,
				currency: 'SEK',
			}),
		);
		assert.deepEqual(
			toAmount(rates, {
				amount: 123,
				currency: 'AUD',
			}),
			{
				amount: 123,
				currency: 'AUD',
			},
		);
		assert.deepEqual(
			toAmount(rates, {
				amount: '2300',
				currency: 'USD',
			}),
			{
				amount: 2300,
				currency: 'USD',
			},
		);
		assert.deepEqual(
			toAmount(rates, {
				amount: 99,
				currency: 'SEK',
			}),
			{
				amount: 99,
				currency: 'SEK',
			},
		);
	});

	test('toAmount limits parameters value', () => {
		assert.equal(
			toAmount(
				rates,
				{
					amount: '-2.0014',
					currency: 'SEK',
				},
				4,
			).amount,
			-2.0014,
		);
		assert.equal(
			toAmount(
				rates,
				{
					amount: 3,
					currency: 'EUR',
				},
				{
					amount: 2,
					currency: 'EUR',
				},
				Math.min,
			).amount,
			2,
		);
		assert.equal(
			toAmount(
				rates,
				{
					amount: '23.3',
					currency: 'AUD',
				},
				{
					amount: '-10.5443',
					currency: 'AUD',
				},
				Math.min,
			).amount,
			-10.5443,
		);
		assert.equal(
			toAmount(
				rates,
				{
					amount: 15.3,
					currency: 'DKK',
				},
				{
					amount: '2.0014',
					currency: 'DKK',
				},
				Math.min,
			).amount,
			2.0014,
		);
		assert.equal(
			toAmount(
				rates,
				{
					amount: 1592,
					currency: 'SEK',
				},
				{
					amount: 2.0014,
					currency: 'SEK',
				},
				Math.max,
			).amount,
			1592,
		);
	});

	test('returns comparable value', () => {
		assert.equal(getComparableValue({ valuePath: 'amount' }, data[3]), -8);
		assert.equal(getComparableValue({ valuePath: 'amount' }, data[4]), 3450);
		assert.equal(
			getComparableValue(
				{},
				{
					amount: '13',
					currency: 'EUR',
				},
			),
			13,
		);
		assert.isUndefined(getComparableValue({}, {}));
		assert.isUndefined(getComparableValue({}, []));
	});

	test('amount renders symbol and value', () => {
		assert.equal(renderValue(rates, null), '');
		assert.equal(renderValue(rates, {}), '');
		assert.equal(renderValue(rates, []), '');
		assert.equal(
			renderValue(rates, {
				amount: '12.4',
				currency: 'USD',
			}),
			'$12.40',
		);
		assert.equal(renderValue(rates, { amount: 534 }), '');
		assert.equal(
			renderValue(rates, {
				amount: -897,
				currency: 'EUR',
			}),
			'-€897.00',
		);
	});

	test('getString returns valid amount or Invalid value', () => {
		const column = { valuePath: 'amount', rates };
		assert.equal(getString(column, { amount: null }), '');
		assert.equal(getString(column, { amount: {} }), 'Invalid value');
		assert.equal(getString(column, { amount: [] }), 'Invalid value');
		assert.equal(getString(column, data[0]), '$12.40');
		assert.equal(
			getString(column, { amount: { amount: 2036 } }),
			'Invalid value',
			'Expected missing currency to be treated as invalid.',
		);
		assert.equal(
			getString(column, {
				amount: {
					amount: 372,
					currency: 'EUR',
				},
			}),
			'€372.00',
		);
	});

	test('getCurrency returns valid currency or null', () => {
		const column = { valuePath: 'amount', rates };
		assert.equal(getCurrency(column, data[0]), 'USD');
		assert.isUndefined(getCurrency(column, data[1]));
		assert.equal(getCurrency(column, data[2]), 'AUD');
		assert.equal(getCurrency(column, data[3]), 'EUR');
		assert.equal(getCurrency(column, data[4]), 'DKK');
	});

	test('computes array of formaters', () => {
		renderValue(rates, {
			amount: '12.4',
			currency: 'SEK',
		});
		renderValue(rates, {
			amount: '12.4',
			currency: 'USD',
		});
		renderValue(rates, {
			amount: '12.4',
			currency: 'AUD',
		});
		renderValue(rates, {
			amount: '12.4',
			currency: 'EUR',
		});
		renderValue(rates, {
			amount: '12.4',
			currency: 'DKK',
		});
	});

	test('changing filter updates _filterInput', async () => {
		assert.isUndefined(omnitable.filters.amount);
		omnitable.setFilterState('amount', {
			filter: {
				min: {
					amount: 225,
					currency: 'EUR',
				},
				max: {
					amount: 457,
					currency: 'EUR',
				},
			},
		});
		flush();
		await nextFrame();
		assert.deepEqual(inputValues(columnHeaderInput), [225, 457]);
	});

	test('changing _filterInput updates filter', async () => {
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);
		await typeInto(columnHeaderInput, 0, 1);
		await typeInto(columnHeaderInput, 1, 15);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.amount.min.amount, 1);
		assert.equal(omnitable.filters.amount.max.amount, 15);
	});

	test('changing only _filterInput min updates filter min', async () => {
		await typeInto(columnHeaderInput, 0, -2317);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.amount.min.amount, -8);
	});

	test('changing out of range _filterInput limits _filterInput', async () => {
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);

		await typeInto(columnHeaderInput, 0, 7);
		await typeInto(columnHeaderInput, 1, 77);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();
		assert.deepEqual(inputValues(columnHeaderInput), [7, 77]);
		assert.equal(omnitable.filters.amount.min.amount, 7);
		assert.equal(omnitable.filters.amount.max.amount, 77);

		await typeInto(columnHeaderInput, 0, 9992);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.amount.min.amount, 77);
	});
});

suite('currency rates', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, column, columnHeaderInput;

	const rates = {
		EUR: 1,
		USD: 0.8169982616,
		AUD: 0.6529827192,
		SEK: 0.1019271438,
		GBP: 1.1347079368,
	};

	setup(async () => {
		const newData = data.concat([
			{
				amount: {
					amount: -21,
					currency: 'USD',
				},
			},
			{
				amount: {
					amount: 935,
					currency: 'EUR',
				},
			},
			{
				amount: {
					amount: 345,
					currency: 'EUR',
				},
			},
			{
				amount: {
					amount: 2136,
					currency: 'EUR',
				},
			},
			{
				amount: {
					amount: -142,
					currency: 'USD',
				},
			},
			{
				amount: {
					amount: 5917,
					currency: 'AUD',
				},
			},
		]);
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable>
					<cosmoz-omnitable-column-amount
						title="Amount"
						name="amount"
						value-path="amount"
						autodetect
					>
					</cosmoz-omnitable-column-amount>
				</cosmoz-omnitable>
			`,
			newData,
		);
		column = omnitable.querySelector('cosmoz-omnitable-column-amount');
		column.autoupdate = true;
		column.rates = testRates;
		columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-amount-range-input',
		);
		await nextFrame();
	});

	test('column is an instance of the correct class', () => {
		assert.isNotNull(
			customElements.get('cosmoz-omnitable-column-amount'),
			'the amount column element is registered',
		);
		assert.equal(omnitable.columns[0].name, 'amount');
	});

	test('getComparableValue with rates returns value', () => {
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: '10',
					currency: 'EUR',
				},
			),
			10,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: -645,
					currency: 'EUR',
				},
			),
			-645,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: '10',
					currency: 'USD',
				},
			),
			8.169982616,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 10,
					currency: 'GBP',
				},
			),
			11.347079368,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 10,
					currency: 'SEK',
				},
			).toFixed(8),
			1.01927144,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 678,
					currency: 'AUD',
				},
			).toFixed(8),
			442.72228362,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: '12.4',
					currency: 'USD',
				},
			).toFixed(8),
			10.13077844,
		);
	});

	test('changing currency does not affect comparable value', async () => {
		column.currency = 'USD';
		await nextFrame();
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: '-3147',
					currency: 'EUR',
				},
			),
			-3147,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: '1000',
					currency: 'USD',
				},
			),
			816.9982616,
		);

		column.currency = 'GBP';
		await nextFrame();
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 333,
					currency: 'EUR',
				},
			),
			333,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: -100,
					currency: 'USD',
				},
			),
			-81.69982616,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 2534,
					currency: 'SEK',
				},
			).toFixed(8),
			258.28338239,
		);
	});

	test('getComparableValue with default rate returns value', () => {
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: '3450',
					currency: 'DKK',
				},
			),
			3450,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: -888,
					currency: 'AED',
				},
			),
			-888,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 491,
					currency: 'AED',
				},
			),
			491,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 7321,
					currency: 'CRC',
				},
			),
			7321,
		);
		assert.equal(
			getComparableValue(
				{ rates },
				{
					amount: 901,
					currency: 'BHD',
				},
			),
			901,
		);
	});

	test('toAmount limits the value with rates', () => {
		assert.deepEqual(
			toAmount(rates, {
				amount: 746,
				currency: 'GBP',
			}),
			{
				amount: 746,
				currency: 'GBP',
			},
		);
		assert.deepEqual(
			toAmount(
				rates,
				{
					amount: 1248,
					currency: 'GBP',
				},
				{
					amount: 46,
					currency: 'SEK',
				},
				Math.max,
			),
			{
				amount: 1248,
				currency: 'GBP',
			},
		);

		assert.deepEqual(
			toAmount(
				rates,
				{
					amount: 15,
					currency: 'SEK',
				},
				{
					amount: 12,
					currency: 'EUR',
				},
				Math.min,
			),
			{
				amount: 15,
				currency: 'SEK',
			},
		);
		assert.deepEqual(
			toAmount(
				rates,
				{
					amount: 150,
					currency: 'SEK',
				},
				{
					amount: 12,
					currency: 'EUR',
				},
				Math.min,
			),
			{
				amount: 12,
				currency: 'EUR',
			},
		);

		assert.deepEqual(
			toAmount(
				rates,
				{
					amount: 20,
					currency: 'AUD',
				},
				{
					amount: 19,
					currency: 'EUR',
				},
				Math.min,
			),
			{
				amount: 20,
				currency: 'AUD',
			},
		);
		assert.deepEqual(
			toAmount(
				rates,
				{
					amount: 30,
					currency: 'AUD',
				},
				{
					amount: 19,
					currency: 'EUR',
				},
				Math.min,
			),
			{
				amount: 19,
				currency: 'EUR',
			},
		);
	});

	test('min and max of filter input is converted to currency', () => {
		assert.equal(
			columnHeaderInput._toInputStringAmount(columnHeaderInput._limit.fromMin),
			-116.01,
		); // ( -142 * 0.8169982616 / 1 ).toFixed(2)
		assert.equal(
			columnHeaderInput._toInputStringAmount(columnHeaderInput._limit.fromMax),
			3863.7,
		); // ( 5917 * 0.6529827192 / 1 ).toFixed(2)
	});

	test('currency is auto-detected', () => {
		assert.equal(columnHeaderInput.currency, 'EUR');
	});

	test('currency is auto-detected after data change', async () => {
		assert.equal(columnHeaderInput.currency, 'EUR');

		omnitable.data = [
			{
				amount: {
					amount: 345,
					currency: 'GBP',
				},
			},
			{
				amount: {
					amount: -21,
					currency: 'USD',
				},
			},
			{
				amount: {
					amount: 935,
					currency: 'INR',
				},
			},
			{
				amount: {
					amount: 345,
					currency: 'GBP',
				},
			},
			{
				amount: {
					amount: 2136,
					currency: 'AUD',
				},
			},
			{
				amount: {
					amount: -142,
					currency: 'GBP',
				},
			},
			{
				amount: {
					amount: 1917,
					currency: 'AUD',
				},
			},
		];
		await nextFrame();
		assert.equal(columnHeaderInput.currency, 'GBP');

		omnitable.data = [
			{
				amount: {
					amount: 1917,
					currency: 'AUD',
				},
			},
			{
				amount: {
					amount: 6515,
					currency: 'SEK',
				},
			},
			{
				amount: {
					amount: 234,
					currency: 'EUR',
				},
			},
			{
				amount: {
					amount: 7843,
					currency: 'INR',
				},
			},
			{
				amount: {
					amount: 454,
					currency: 'INR',
				},
			},
			{
				amount: {
					amount: 539,
					currency: 'INR',
				},
			},
			{
				amount: {
					amount: -326,
					currency: 'GBP',
				},
			},
			{
				amount: {
					amount: 1917,
					currency: 'AUD',
				},
			},
			{
				amount: {
					amount: 1917,
					currency: 'USD',
				},
			},
		];
		await nextFrame();
		assert.equal(columnHeaderInput.currency, 'INR');
	});
});

suite('default currency', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, column, columnHeaderInput;

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable>
					<cosmoz-omnitable-column-amount
						title="Amount"
						name="amount"
						value-path="amount"
						currency="SEK"
					>
					</cosmoz-omnitable-column-amount>
				</cosmoz-omnitable>
			`,
			data,
		);
		column = omnitable.querySelector('cosmoz-omnitable-column-amount');
		column.autoupdate = true;
		column.rates = testRates;
		await nextFrame();
		columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-amount-range-input',
		);
	});

	test('currency is configurable', () => {
		assert.equal(columnHeaderInput.currency, 'SEK');
	});

	test('changing _filterInput updates filter with rates', async () => {
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);
		await typeInto(columnHeaderInput, 0, 105);
		await typeInto(columnHeaderInput, 1, 150);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.amount.min.amount, 105);
		assert.equal(omnitable.filters.amount.max.amount, 150);
	});
});

suite('amount filter', () => {
	const column = { valuePath: 'amount' },
		items = [10, 50, 100].map((amount) => ({
			amount: { amount, currency: 'EUR' },
		})),
		eur = (amount) => ({ amount, currency: 'EUR' }),
		amounts = (filter) =>
			items
				.filter(applySingleFilter(column, filter))
				.map((item) => item.amount.amount);

	test('filters on min only', () => {
		assert.deepEqual(amounts({ min: eur(50), max: undefined }), [50, 100]);
	});

	test('filters on max only', () => {
		assert.deepEqual(amounts({ min: undefined, max: eur(50) }), [10, 50]);
	});

	test('filters on min and max', () => {
		assert.deepEqual(amounts({ min: eur(20), max: eur(60) }), [50]);
	});

	test('excludes items without an amount', () => {
		assert.isFalse(applySingleFilter(column, { min: eur(0) })({}));
	});
});
