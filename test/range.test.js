/* eslint-disable max-lines */
import 'web-animations-js/web-animations-next.min.js';

import {
	assert, html, nextFrame
} from '@open-wc/testing';

import sinon from 'sinon';

import { setupOmnitableFixture } from './helpers/utils';
import { flush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

const data = [{
		age: 17,
		amount: {
			amount: '12.4',
			currency: 'USD'
		}
	}, {
		amount: { amount: 2 }
	}, {
		age: -11,
		amount: {
			amount: 678,
			currency: 'AUD'
		}
	}, {
		age: 9,
		amount: {
			amount: -8,
			currency: 'EUR'
		}
	}, {
		age: 5,
		amount: {
			amount: '3450',
			currency: 'DKK'
		}
	}, {
		amount: {
			amount: 2015,
			currency: 'EUR'
		}
	}, {
		age: 46.7511, // 46,75xx
		amount: {
			amount: 347,
			currency: 'USD'
		}
	}, {
		age: 46.768, // needed in maximumFractionDigits test
		amount: {
			amount: 2581,
			currency: 'EUR'
		}
	}],
	rangeFixture = html`
		<cosmoz-omnitable id="omnitable" .resizeSpeedFactor=${ 1 }>
			<cosmoz-omnitable-column-number title="Age" name="age" value-path="age" maximum-fraction-digits=2>
			</cosmoz-omnitable-column-number>
			<cosmoz-omnitable-column-amount title="Amount" name="amount" value-path="amount" locale="en-US">
			</cosmoz-omnitable-column-amount>
		</cosmoz-omnitable>
	`;

sinon.assert.expose(chai.assert, { prefix: '' });

suite('number', () => {
	let omnitable,
		column;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[0];
		column.autoupdate = true;
	});

	test('instantiates a cosmoz-omnitable-column-number', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnNumber');
	});

	test('toNumber converts a value to Number', () => {
		assert.isUndefined(column.toNumber());
		assert.equal(column.toNumber(-7.5), -7.5);
		assert.equal(column.toNumber('-7.5'), -7.5);
		assert.equal(column.toNumber(123e-5), 0.00123);
		assert.isNotNumber(column.toNumber('some string not number'));
	});

	test('toNumber limits parameters', () => {
		assert.equal(column.toNumber('-2.0014', 4), -2.0014);
		assert.equal(column.toNumber(3, 2, Math.min), 2);
		assert.equal(column.toNumber('23.3', '-10.5443', Math.min), -10.5443);
		assert.equal(column.toNumber(3, '2.0014', Math.min), 2.0014);
		assert.equal(column.toNumber(3, 2.0014, Math.max), 3);
	});

	test('computes range from values', () => {
		assert.isObject(column._range);
		assert.equal(column._range.min, -11);
		assert.equal(column._range.max, 46.768);
	});

	test('returns the value of an item', () => {
		assert.strictEqual(column.getComparableValue({ age: '13' }, 'age'), 13);
		assert.strictEqual(column.getComparableValue(13), 13);
		assert.equal(column.getComparableValue(data[1], 'age'), null);
		assert.strictEqual(column.getComparableValue(data[2], 'age'), -11);
	});

	test('changing filter updates _filterInput', () => {
		assert.isNull(column.filter.min);
		assert.isNull(column.filter.max);
		column.filter = {
			min: 3,
			max: 200
		};
		assert.equal(column._filterInput.min, 3);
		assert.equal(column._filterInput.max, 200);
	});

	test('changing _filterInput updates filter', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);
		column._filterInput = {
			min: -10,
			max: 15
		};
		flush();
		assert.equal(column.filter.min, -10);
		assert.equal(column.filter.max, 15);
	});

	test('changing only _filterInput min updates filter min', () => {
		column.set('_filterInput.min', -21);
		flush();
		assert.equal(column.filter.min, -11);
	});

	test('changing out of range _filterInput limits _filterInput', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);

		column._filterInput = {
			min: -11,
			max: 17
		};
		flush();

		assert.equal(column._filterInput.min, -11);
		assert.equal(column._filterInput.max, 17);
		assert.equal(column.filter.min, -11);
		assert.equal(column.filter.max, 17);

		column.set('_filterInput.min', 20);
		flush();

		assert.equal(column.filter.min, 17);
	});

	test('when autoupdate is off, changing _filterInput does not update filter', () => {
		column.autoupdate = false;
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);
		column._filterInput = {
			min: -10,
			max: 15
		};
		assert.equal(column.filter.min, null);
		assert.equal(column.filter.max, null);
		column._updateFilter();
		assert.equal(column.filter.min, -10);
		assert.equal(column.filter.max, 15);
	});

	test('filter comparision uses maximumFractionDigits; item age outside the range', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);

		column._filterInput = {
			min: 46.75,
			max: 46.76
		};
		flush();
		omnitable.flush();

		const items = omnitable.sortedFilteredGroupedItems;
		assert.equal(
			items.filter(item => item.age && item.age === 46.768).length,
			0,
			'Expected item coresponding to the age: 46.768 not to be in the filtered items, because it is outside the range.'
		);
	});

	test('filter comparision uses maximumFractionDigits, item age inside range', () => {
		column._filterInput = {
			min: 46.75,
			max: 46.76
		};
		flush();
		omnitable.flush();

		const items = omnitable.sortedFilteredGroupedItems;
		assert.equal(
			items.filter(item => item.age && item.age === 46.7511).length,
			1,
			'Expected item coresponding to the age: 46.7511 to be in the filtered items.'
		);
	});

	test('getString displays 46.768 as 46.77', () => {
		assert.include(['46.77', '46,77'], column.getString({ age: 46.768 }));
	});

	test('float label on invalid input', async () => {
		await nextFrame(); // give lit time to render the columns
		const numberHeader = omnitable.root.querySelector('.number-header-cell'),
			filterMenu = numberHeader.querySelector('paper-dropdown-menu'),
			isFloating = element => element.$.container.$.labelAndInputContainer.classList.contains('label-is-floating'),
			inputEvent = new InputEvent('input');

		filterMenu.noAnimations = true;
		assert.isFalse(filterMenu.opened);
		filterMenu.click();
		const [from, to] = filterMenu.querySelectorAll('paper-input');
		assert.isFalse(isFloating(from));
		assert.isFalse(isFloating(to));

		from.value = 'e';
		to.value = 'e';
		flush();
		omnitable.flush();

		assert.isTrue(filterMenu.opened);
		from.dispatchEvent(inputEvent);
		to.dispatchEvent(inputEvent);
		assert.isTrue(isFloating(from));
		assert.isTrue(isFloating(to));
	});

	test('make sure onBadInputFloatLabel doesn\'t explode', () => {
		assert.strictEqual(column.onBadInputFloatLabel(new InputEvent('input')), undefined);
	});
});

suite('amount', () => {
	let column;

	setup(async () => {
		const omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[1];
		column.autoupdate = true;
	});

	test('column is an instance of the correct class', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnAmount');
	});

	test('toAmount returns a valid amount', () => {
		assert.isUndefined(column.toAmount());
		assert.isNull(column.toAmount('123'));
		assert.isNull(column.toAmount({ amount: 123 }));
		assert.isNull(column.toAmount({ amount: '123' }));
		assert.isNull(column.toAmount({ currency: 'USD' }));

		assert.isObject(column.toAmount({
			amount: 75,
			currency: 'SEK'
		}));
		assert.deepEqual(column.toAmount({
			amount: 123,
			currency: 'AUD'
		}), {
			amount: 123,
			currency: 'AUD'
		});
		assert.deepEqual(column.toAmount({
			amount: '2300',
			currency: 'USD'
		}), {
			amount: 2300,
			currency: 'USD'
		});
		assert.deepEqual(column.toAmount({
			amount: 99,
			currency: 'SEK'
		}), {
			amount: 99,
			currency: 'SEK'
		});
	});

	test('toAmount limits parameters value', () => {
		assert.equal(column.toAmount({
			amount: '-2.0014',
			currency: 'SEK'
		}, 4).amount, -2.0014);
		assert.equal(column.toAmount({
			amount: 3,
			currency: 'EUR'
		}, {
			amount: 2,
			currency: 'EUR'
		}, Math.min).amount, 2);
		assert.equal(column.toAmount({
			amount: '23.3',
			currency: 'AUD'
		}, {
			amount: '-10.5443',
			currency: 'AUD'
		}, Math.min).amount, -10.5443);
		assert.equal(column.toAmount({
			amount: 15.3,
			currency: 'DKK'
		}, {
			amount: '2.0014',
			currency: 'DKK'
		}, Math.min).amount, 2.0014);
		assert.equal(column.toAmount({
			amount: 1592,
			currency: 'SEK'
		}, {
			amount: 2.0014,
			currency: 'SEK'
		}, Math.max).amount, 1592);
	});

	test('returns comparable value', () => {
		assert.equal(column.getComparableValue(data[3], 'amount'), -8);
		assert.equal(column.getComparableValue(data[4], 'amount'), 3450);
		assert.equal(column.getComparableValue({
			amount: '13',
			currency: 'EUR'
		}), 13);
		assert.isUndefined(column.getComparableValue({}));
		assert.isUndefined(column.getComparableValue([]));
	});

	test('amount renders symbol and value', () => {
		assert.equal(column.renderValue(null), '');
		assert.equal(column.renderValue({}), '');
		assert.equal(column.renderValue([]), '');
		assert.equal(column.renderValue({
			amount: '12.4',
			currency: 'USD'
		}), '$12.40');
		assert.equal(column.renderValue({ amount: 534 }), '');
		assert.equal(column.renderValue({
			amount: -897,
			currency: 'EUR'
		}), '-€897.00');
	});

	test('getString returns valid amount or Invalid value', () => {
		assert.equal(column.getString({ amountPath: null }, 'amountPath'), '');
		assert.equal(column.getString({ amountPath: {}}, 'amountPath'), 'Invalid value');
		assert.equal(column.getString({ amountPath: []}, 'amountPath'), 'Invalid value');
		assert.equal(column.getString(data[0]), '$12.40');
		assert.equal(column.getString({ amountPath: { amount: 2036 }}, 'amountPath'), 'Invalid value', 'Expected missing currency to be treated as invalid.');
		assert.equal(column.getString({
			amountPath: {
				amount: 372,
				currency: 'EUR'
			}
		}, 'amountPath'), '€372.00');
	});

	test('getCurrency returns valid currency or null', () => {
		assert.equal(column.getCurrency(data[0], 'amount'), 'USD');
		assert.isUndefined(column.getCurrency(data[1], 'amount'));
		assert.equal(column.getCurrency(data[2], 'amount'), 'AUD');
		assert.equal(column.getCurrency(data[3], 'amount'), 'EUR');
		assert.equal(column.getCurrency(data[4], 'amount'), 'DKK');
	});

	test('computes array of formaters', () => {
		column.renderValue({
			amount: '12.4',
			currency: 'SEK'
		});
		column.renderValue({
			amount: '12.4',
			currency: 'USD'
		});
		column.renderValue({
			amount: '12.4',
			currency: 'AUD'
		});
		column.renderValue({
			amount: '12.4',
			currency: 'EUR'
		});
		column.renderValue({
			amount: '12.4',
			currency: 'DKK'
		});

		const formatters = column._formatters;
		Object.keys(formatters).forEach(el => {
			assert.include(['SEKen-US', 'USDen-US', 'AUDen-US', 'EURen-US', 'DKKen-US'], el);
		});
	});

	test('changing filter updates _filterInput', () => {
		assert.isNull(column.filter.min);
		assert.isNull(column.filter.max);
		column.filter = {
			min: {
				amount: 225,
				currency: 'EUR'
			},
			max: {
				amount: 457,
				currency: 'EUR'
			}
		};
		assert.equal(column._filterInput.min, 225);
		assert.equal(column._filterInput.max, 457);
	});

	test('changing _filterInput updates filter', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);
		column._filterInput = {
			min: 1,
			max: 15
		};
		flush();
		assert.equal(column.filter.min.amount, 1);
		assert.equal(column.filter.max.amount, 15);
	});

	test('changing only _filterInput min updates filter min', () => {
		column.set('_filterInput.min', -2317);
		flush();
		assert.equal(column.filter.min.amount, -8);
	});

	test('changing out of range _filterInput limits _filterInput', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);

		column._filterInput = {
			min: 7,
			max: 77
		};
		flush();
		assert.equal(column._filterInput.min, 7);
		assert.equal(column._filterInput.max, 77);
		assert.equal(column.filter.min.amount, 7);
		assert.equal(column.filter.max.amount, 77);

		column.set('_filterInput.min', 9992);
		flush();
		assert.equal(column.filter.min.amount, 77);
	});
});

suite('currency rates', () => {
	let omnitable,
		column;

	setup(async () => {
		const newData = data.concat([{
			amount: {
				amount: -21,
				currency: 'USD'
			}
		}, {
			amount: {
				amount: 935,
				currency: 'EUR'
			}
		}, {
			amount: {
				amount: 345,
				currency: 'EUR'
			}
		}, {
			amount: {
				amount: 2136,
				currency: 'EUR'
			}
		}, {
			amount: {
				amount: -142,
				currency: 'USD'
			}
		}, {
			amount: {
				amount: 5917,
				currency: 'AUD'
			}
		}]);
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable>
				<cosmoz-omnitable-column-amount title="Amount" name="amount" value-path="amount" autodetect>
				</cosmoz-omnitable-column-amount>
			</cosmoz-omnitable>
		`, newData);
		column = omnitable.columns[0];
		column.autoupdate = true;
		column.rates = {
			EUR: 1,
			USD: 0.8169982616,
			AUD: 0.6529827192,
			SEK: 0.1019271438,
			GBP: 1.1347079368
		};
	});

	test('column is an instance of the correct class', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnAmount');
	});

	test('getComparableValue with rates returns value', () => {
		assert.equal(column.getComparableValue({
			amount: '10',
			currency: 'EUR'
		}), 10);
		assert.equal(column.getComparableValue({
			amount: -645,
			currency: 'EUR'
		}), -645);
		assert.equal(column.getComparableValue({
			amount: '10',
			currency: 'USD'
		}), 8.169982616);
		assert.equal(column.getComparableValue({
			amount: 10,
			currency: 'GBP'
		}), 11.347079368);
		assert.equal(column.getComparableValue({
			amount: 10,
			currency: 'SEK'
		}).toFixed(8), 1.01927144);
		assert.equal(column.getComparableValue({
			amount: 678,
			currency: 'AUD'
		}).toFixed(8), 442.72228362);
		assert.equal(column.getComparableValue({
			amount: '12.4',
			currency: 'USD'
		}).toFixed(8), 10.13077844);
	});

	test('changing currency does not affect comparable value', () => {
		column.currency = 'USD';
		assert.equal(column.getComparableValue({
			amount: '-3147',
			currency: 'EUR'
		}), -3147);
		assert.equal(column.getComparableValue({
			amount: '1000',
			currency: 'USD'
		}), 816.9982616);
		column.currency = 'GBP';
		assert.equal(column.getComparableValue({
			amount: 333,
			currency: 'EUR'
		}), 333);
		assert.equal(column.getComparableValue({
			amount: -100,
			currency: 'USD'
		}), -81.69982616);
		assert.equal(column.getComparableValue({
			amount: 2534,
			currency: 'SEK'
		}).toFixed(8), 258.28338239);
	});

	test('getComparableValue with default rate returns value', () => {
		assert.equal(column.getComparableValue({
			amount: '3450',
			currency: 'DKK'
		}), 3450);
		assert.equal(column.getComparableValue({
			amount: -888,
			currency: 'AED'
		}), -888);
		assert.equal(column.getComparableValue({
			amount: 491,
			currency: 'AED'
		}), 491);
		assert.equal(column.getComparableValue({
			amount: 7321,
			currency: 'CRC'
		}), 7321);
		assert.equal(column.getComparableValue({
			amount: 901,
			currency: 'BHD'
		}), 901);
	});

	test('toAmount limits the value with rates', () => {
		assert.deepEqual(column.toAmount({
			amount: 746,
			currency: 'GBP'
		}), {
			amount: 746,
			currency: 'GBP'
		});
		assert.deepEqual(column.toAmount({
			amount: 1248,
			currency: 'GBP'
		}, {
			amount: 46,
			currency: 'SEK'
		}, Math.max), {
			amount: 1248,
			currency: 'GBP'
		});

		assert.deepEqual(column.toAmount({
			amount: 15,
			currency: 'SEK'
		}, {
			amount: 12,
			currency: 'EUR'
		}, Math.min), {
			amount: 15,
			currency: 'SEK'
		});
		assert.deepEqual(column.toAmount({
			amount: 150,
			currency: 'SEK'
		}, {
			amount: 12,
			currency: 'EUR'
		}, Math.min), {
			amount: 12,
			currency: 'EUR'
		});

		assert.deepEqual(column.toAmount({
			amount: 20,
			currency: 'AUD'
		}, {
			amount: 19,
			currency: 'EUR'
		}, Math.min), {
			amount: 20,
			currency: 'AUD'
		});
		assert.deepEqual(column.toAmount({
			amount: 30,
			currency: 'AUD'
		}, {
			amount: 19,
			currency: 'EUR'
		}, Math.min), {
			amount: 19,
			currency: 'EUR'
		});
	});

	test('min and max of filter input is converted to currency', () => {
		assert.equal(column._toInputStringAmount(column._limit.fromMin), -116.01); // ( -142 * 0.8169982616 / 1 ).toFixed(2)
		assert.equal(column._toInputStringAmount(column._limit.fromMax), 3863.70); // ( 5917 * 0.6529827192 / 1 ).toFixed(2)
	});

	test('currency is auto-detected', () => {
		assert.equal(column.currency, 'EUR');
	});

	test('currency is auto-detected after data change', () => {
		assert.equal(column.currency, 'EUR');

		omnitable.data = [{
			amount: {
				amount: 345,
				currency: 'GBP'
			}
		}, {
			amount: {
				amount: -21,
				currency: 'USD'
			}
		}, {
			amount: {
				amount: 935,
				currency: 'INR'
			}
		}, {
			amount: {
				amount: 345,
				currency: 'GBP'
			}
		}, {
			amount: {
				amount: 2136,
				currency: 'AUD'
			}
		}, {
			amount: {
				amount: -142,
				currency: 'GBP'
			}
		}, {
			amount: {
				amount: 1917,
				currency: 'AUD'
			}
		}];
		assert.equal(column.currency, 'GBP');

		omnitable.data = [{
			amount: {
				amount: 1917,
				currency: 'AUD'
			}
		}, {
			amount: {
				amount: 6515,
				currency: 'SEK'
			}
		}, {
			amount: {
				amount: 234,
				currency: 'EUR'
			}
		}, {
			amount: {
				amount: 7843,
				currency: 'INR'
			}
		}, {
			amount: {
				amount: 454,
				currency: 'INR'
			}
		}, {
			amount: {
				amount: 539,
				currency: 'INR'
			}
		}, {
			amount: {
				amount: -326,
				currency: 'GBP'
			}
		}, {
			amount: {
				amount: 1917,
				currency: 'AUD'
			}
		}, {
			amount: {
				amount: 1917,
				currency: 'USD'
			}
		}];
		assert.equal(column.currency, 'INR');
	});
});

suite('default currency', () => {
	let column;

	setup(async () => {
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable>
				<cosmoz-omnitable-column-amount title="Amount" name="amount" value-path="amount" currency="SEK">
				</cosmoz-omnitable-column-amount>
			</cosmoz-omnitable>
		`, data);
		column = omnitable.columns[0];
		column.autoupdate = true;
		column.rates = {
			EUR: 1,
			USD: 0.8169982616,
			AUD: 0.6529827192,
			SEK: 0.1019271438,
			GBP: 1.1347079368
		};
	});

	test('currency is configurable', () => {
		assert.equal(column.currency, 'SEK');
	});

	test('changing _filterInput updates filter with rates', () => {
		assert.isNull(column._filterInput.min);
		assert.isNull(column._filterInput.max);
		column._filterInput = {
			min: 105,
			max: 150
		};
		flush();
		assert.equal(column.filter.min.amount, 105);
		assert.equal(column.filter.max.amount, 150);
	});
});

suite('external values', () => {
	let column;
	setup(async () => {
		const omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable>
				<cosmoz-omnitable-column-number title="Age" name="age" value-path="age" maximum-fraction-digits=2 external-values>
				</cosmoz-omnitable-column-number>
			</cosmoz-omnitable>
		`, [
			{ age: 1 },
			{ age: 0 },
			{ age: 20 }
		]);
		column = omnitable.columns[0];
		column.autoupdate = true;
	});
	test('changing _filterInput min on column with external values updates filter min correctly', () => {
		column.set('_filterInput.min', -1);
		flush();
		assert.equal(column.filter.min, -1);
	});
});
