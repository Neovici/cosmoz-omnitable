import { assert } from '@open-wc/testing';
import {
	applySingleFilter,
	fromHashString,
	getComparableValue,
	getFormatter,
	renderValue,
	toHashString,
	getString,
} from '../src/lib/utils-amount';

suite('utils-amount', () => {
	suite('renderValue', () => {
		test('value null', () => {
			assert.equal(renderValue({}, null, ''), '');
		});

		test('value empty string', () => {
			assert.equal(renderValue({}, '', ''), '');
		});

		test('amount empty string', () => {
			assert.equal(renderValue({}, { currency: 'ron', amount: '' }, ''), '');
		});

		test('currency empty string', () => {
			assert.equal(renderValue({}, { currency: '', amount: 2 }, ''), '');
		});
	});
	suite('getComparableValue', () => {
		test('item null', () => {
			assert.equal(getComparableValue({}, null), undefined);
		});

		test('value null', () => {
			assert.equal(
				getComparableValue(
					{ valuePath: 'totalAmount', rates: { SEK: 2 } },
					{ totalAmount: null },
				),
				undefined,
			);
		});

		test('rates null', () => {
			assert.equal(
				getComparableValue(
					{ valuePath: 'totalAmount', rates: null },
					{ totalAmount: { amount: 2, currency: 'SEK' } },
				),
				2,
			);
		});

		test('rates empty object', () => {
			assert.equal(
				getComparableValue(
					{ valuePath: 'totalAmount', rates: {} },
					{ totalAmount: { amount: 2, currency: 'SEK' } },
				),
				2,
			);
		});

		test('return amount', () => {
			assert.equal(
				getComparableValue(
					{ valuePath: 'totalAmount', rates: { SEK: 2 } },
					{ totalAmount: { amount: 2, currency: 'SEK' } },
				),
				4,
			);
		});
	});

	suite('appySingleFilter', () => {
		test('return amount', () => {
			assert.equal(applySingleFilter({ valuePath: 'totalAmount' })(), false);
			assert.equal(
				applySingleFilter({ valuePath: 'totalAmount' }, { max: 1 })(null),
				false,
			);
			assert.equal(
				applySingleFilter(
					{ valuePath: 'totalAmount' },
					{ max: 1 },
				)({ totalAmount: { amount: 2, currency: 'SEK' } }),
				true,
			);
		});
	});

	suite('getFormatter', () => {
		const formatter = getFormatter('SEK', 'en-GB'),
			formatter1 = getFormatter('SEK');

		test('return formatter', () => {
			assert.equal(formatter.constructor.name, 'NumberFormat');
			assert.equal(formatter1.constructor.name, 'NumberFormat');
		});
	});

	suite('getString', () => {
		const column = { valuePath: 'totalAmount', rates: { SEK: 2 } };

		test('getString returns values', () => {
			assert.equal(getString(column, {}), '');
		});
	});

	suite('toHashString', () => {
		const value = { amount: 2, currency: 'SEK' };

		test('_toHashString handles null', () => {
			assert.equal(toHashString(null), '');
		});

		test('_toHashString handles undefined', () => {
			assert.equal(toHashString(undefined), '');
		});

		test('_toHashString amount + currency', () => {
			assert.equal(toHashString(value), '2SEK');
		});
	});

	suite('fromHashString', () => {
		test('_fromHashString handles null', () => {
			assert.isUndefined(fromHashString(null));
		});

		test('_fromHashString handles undefined', () => {
			assert.isUndefined(fromHashString(undefined));
		});

		test('_fromHashString handles empty string', () => {
			assert.isUndefined(fromHashString(''));
		});
	});
});
