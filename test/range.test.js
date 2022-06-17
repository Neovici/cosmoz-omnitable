/* eslint-disable max-lines */
import 'web-animations-js/web-animations-next.min.js';

import {
	assert, html, nextFrame
} from '@open-wc/testing';

import { assert as sinonAssert } from 'sinon';

import { setupOmnitableFixture } from './helpers/utils';
import { flush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';
import { getComparableValue, getString, toNumber } from '../lib/utils-number';
import { columnSymbol } from '../lib/use-dom-columns';

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

sinonAssert.expose(assert, { prefix: '' });

suite('number', () => {
	let
		omnitable,
		column,
		columnHeaderInput;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.columns[0][columnSymbol];
		column.autoupdate = true;
		await nextFrame();
		columnHeaderInput = omnitable.shadowRoot.querySelector('cosmoz-omnitable-number-range-input');
	});

	test('instantiates a cosmoz-omnitable-column-number', () => {
		assert.equal(column.constructor.name, 'OmnitableColumnNumber');
	});

	test('computes range from values', () => {
		assert.isObject(columnHeaderInput._range);
		assert.equal(columnHeaderInput._range.min, -11);
		assert.equal(columnHeaderInput._range.max, 46.768);
	});

	test('changing filter updates _filterInput', async () => {
		assert.isUndefined(omnitable.filters.age.filter);
		omnitable.setFilterState('age', { filter: {
			min: 3,
			max: 200
		}});
		await nextFrame();
		assert.equal(columnHeaderInput._filterInput.min, 3);
		assert.equal(columnHeaderInput._filterInput.max, 200);
	});

	test('changing _filterInput updates filter', async () => {
		assert.isNull(columnHeaderInput._filterInput.min);
		assert.isNull(columnHeaderInput._filterInput.max);
		columnHeaderInput._filterInput = {
			min: -10,
			max: 15
		};
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.age.filter.min, -10);
		assert.equal(omnitable.filters.age.filter.max, 15);
	});

	test('changing only _filterInput min updates filter min', async () => {
		columnHeaderInput.set('_filterInput.min', -21);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.age.filter.min, -11);
	});

	test('changing out of range _filterInput limits _filterInput', async () => {
		assert.isNull(columnHeaderInput._filterInput.min);
		assert.isNull(columnHeaderInput._filterInput.max);

		columnHeaderInput._filterInput = {
			min: -11,
			max: 17
		};
		flush();
		await nextFrame();

		assert.equal(columnHeaderInput._filterInput.min, -11);
		assert.equal(columnHeaderInput._filterInput.max, 17);
		assert.equal(omnitable.filters.age.filter.min, -11);
		assert.equal(omnitable.filters.age.filter.max, 17);

		columnHeaderInput.set('_filterInput.min', 20);
		flush();
		await nextFrame();

		assert.equal(omnitable.filters.age.filter.min, 17);
	});

	test('when autoupdate is off, changing _filterInput does not update filter', async () => {
		column.autoupdate = false;
		await nextFrame();

		assert.isNull(columnHeaderInput._filterInput.min);
		assert.isNull(columnHeaderInput._filterInput.max);
		columnHeaderInput._filterInput = {
			min: -10,
			max: 15
		};
		await nextFrame();

		assert.isUndefined(omnitable.filters.age.filter);
		columnHeaderInput._updateFilter();

		await nextFrame();
		assert.equal(omnitable.filters.age.filter.min, -10);
		assert.equal(omnitable.filters.age.filter.max, 15);
	});

	test('filter comparision uses maximumFractionDigits; item age outside the range', async () => {
		assert.isNull(columnHeaderInput._filterInput.min);
		assert.isNull(columnHeaderInput._filterInput.max);

		columnHeaderInput._filterInput = {
			min: 46.75,
			max: 46.76
		};
		flush();
		await nextFrame();

		const items = omnitable.sortedFilteredGroupedItems;
		assert.equal(
			items.filter(item => item.age && item.age === 46.768).length,
			0,
			'Expected item coresponding to the age: 46.768 not to be in the filtered items, because it is outside the range.'
		);
	});

	test('filter comparision uses maximumFractionDigits, item age inside range', async () => {
		columnHeaderInput._filterInput = {
			min: 46.75,
			max: 46.76
		};
		flush();
		await nextFrame();

		const items = omnitable.sortedFilteredGroupedItems;
		assert.equal(
			items.filter(item => item.age && item.age === 46.7511).length,
			1,
			'Expected item coresponding to the age: 46.7511 to be in the filtered items.'
		);
	});

	test('make sure onBadInputFloatLabel doesn\'t explode', () => {
		assert.strictEqual(columnHeaderInput.onBadInputFloatLabel(new InputEvent('input')), undefined);
	});

	test('float label on invalid input', async () => {
		await nextFrame(); // give lit time to render the columns
		const
			filterMenu = columnHeaderInput.root.querySelector('paper-dropdown-menu'),
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
		await nextFrame();

		assert.isTrue(filterMenu.opened);
		from.dispatchEvent(inputEvent);
		to.dispatchEvent(inputEvent);
		assert.isTrue(isFloating(from));
		assert.isTrue(isFloating(to));
	});
});

suite('number - pure functions', () => {
	test('toNumber converts a value to Number', () => {
		assert.isUndefined(toNumber());
		assert.equal(toNumber(-7.5), -7.5);
		assert.equal(toNumber('-7.5'), -7.5);
		assert.equal(toNumber(123e-5), 0.00123);
		assert.isNotNumber(toNumber('some string not number'));
	});

	test('toNumber limits parameters', () => {
		assert.equal(toNumber('-2.0014', 4), -2.0014);
		assert.equal(toNumber(3, 2, Math.min), 2);
		assert.equal(toNumber('23.3', '-10.5443', Math.min), -10.5443);
		assert.equal(toNumber(3, '2.0014', Math.min), 2.0014);
		assert.equal(toNumber(3, 2.0014, Math.max), 3);
	});

	test('returns the value of an item', () => {
		assert.strictEqual(getComparableValue({ valuePath: 'age' }, { age: '13' }), 13);
		assert.strictEqual(getComparableValue({}, 13), 13);
		assert.equal(getComparableValue({ valuePath: 'age' }, data[1]), null);
		assert.strictEqual(getComparableValue({ valuePath: 'age' }, data[2]), -11);
	});

	test('getString displays 46.768 as 46.77', () => {
		assert.include(['46.77', '46,77'], getString({ valuePath: 'age', locale: 'en-US', maximumFractionDigits: 2 }, { age: 46.768 }));
	});
});

suite('external values', () => {
	test('changing _filterInput min on column with external values updates filter min correctly', async () => {
		const
			omnitable = await setupOmnitableFixture(html`
				<cosmoz-omnitable>
					<cosmoz-omnitable-column-number title="Age" name="age" value-path="age" maximum-fraction-digits=2 external-values>
					</cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`, [
				{ age: 1 },
				{ age: 0 },
				{ age: 20 }
			]),
			column = omnitable.columns[0][columnSymbol],
			columnHeaderInput = omnitable.shadowRoot.querySelector('cosmoz-omnitable-number-range-input');

		column.autoupdate = true;
		await nextFrame();

		columnHeaderInput.set('_filterInput.min', -1);
		flush();
		await nextFrame();

		assert.equal(omnitable.filters.age.filter.min, -1);
	});
});
