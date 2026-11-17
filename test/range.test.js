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
	getComparableValue,
	getString,
	toNumber,
} from '../src/lib/utils-number';
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

// Public drive for the header range input: the two cosmoz-input fields its
// template binds _filterInput to. Typing goes through the component's inner
// input (its 'input' event is what commits the value, exactly like a user
// keystroke: programmatic host property writes fire no value-changed), and a
// blur commits the filter to the omnitable.
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

suite('number', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, column, columnHeaderInput;

	setup(async () => {
		omnitable = await setupOmnitableFixture(rangeFixture, data);
		column = omnitable.querySelector('cosmoz-omnitable-column-number');
		column.autoupdate = true;
		await nextFrame();
		columnHeaderInput = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-number-range-input',
		);
	});

	test('instantiates a cosmoz-omnitable-column-number', () => {
		assert.isNotNull(
			customElements.get('cosmoz-omnitable-column-number'),
			'the number column element is registered',
		);
		assert.equal(omnitable.columns[0].name, 'age');
	});

	test('computes range from values (bounds on the public inputs)', async () => {
		// settle the header render so the computed bounds are committed
		await nextFrame();
		await nextFrame();
		const inputs = inputsOf(columnHeaderInput).map((i) =>
			i.shadowRoot.querySelector('input'),
		);
		assert.isNotEmpty(inputs, 'the range header exposes two inputs');
		assert.equal(inputs[0].min, '-11');
		assert.equal(inputs[0].max, '46.768');
	});

	test('changing filter reflects on the header inputs', async () => {
		assert.isUndefined(omnitable.filters.age);
		omnitable.setFilterState('age', {
			filter: {
				min: 3,
				max: 200,
			},
		});
		flush();
		await nextFrame();
		assert.deepEqual(inputValues(columnHeaderInput), [3, 200]);
	});

	test('changing the header inputs updates filter', async () => {
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);
		await typeInto(columnHeaderInput, 0, -10);
		await typeInto(columnHeaderInput, 1, 15);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.age.min, -10);
		assert.equal(omnitable.filters.age.max, 15);
	});

	test('changing only the min input updates filter min', async () => {
		await typeInto(columnHeaderInput, 0, -21);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.age.min, -11);
	});

	test('out of range header inputs are limited to the computed range', async () => {
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);
		await typeInto(columnHeaderInput, 0, -11);
		await typeInto(columnHeaderInput, 1, 17);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();

		assert.deepEqual(inputValues(columnHeaderInput), ['-11', '17']);
		assert.equal(omnitable.filters.age.min, -11);
		assert.equal(omnitable.filters.age.max, 17);

		await typeInto(columnHeaderInput, 0, 20);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();

		assert.equal(omnitable.filters.age.min, 17);
	});

	test('without autoupdate, committing the header inputs still applies the filter (blur)', async () => {
		column.autoupdate = false;
		await nextFrame();

		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);
		await typeInto(columnHeaderInput, 0, -10);
		await typeInto(columnHeaderInput, 1, 15);
		// the component applies on blur/enter without autoupdate
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();
		assert.equal(omnitable.filters.age.min, -10);
		assert.equal(omnitable.filters.age.max, 15);
	});

	test('filter comparision uses maximumFractionDigits; item age outside the range', async () => {
		assert.deepEqual(inputValues(columnHeaderInput), [null, null]);
		await typeInto(columnHeaderInput, 0, 46.75);
		await typeInto(columnHeaderInput, 1, 46.76);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();

		const items = omnitable.sortedFilteredGroupedItems;
		assert.equal(
			items.filter((item) => item.age && item.age === 46.768).length,
			0,
			'Expected item coresponding to the age: 46.768 not to be in the filtered items, because it is outside the range.',
		);
	});

	test('filter comparision uses maximumFractionDigits, item age inside range', async () => {
		await typeInto(columnHeaderInput, 0, 46.75);
		await typeInto(columnHeaderInput, 1, 46.76);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();

		const items = omnitable.sortedFilteredGroupedItems;
		assert.equal(
			items.filter((item) => item.age && item.age === 46.7511).length,
			1,
			'Expected item coresponding to the age: 46.7511 to be in the filtered items.',
		);
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
		assert.strictEqual(
			getComparableValue({ valuePath: 'age' }, { age: '13' }),
			13,
		);
		assert.strictEqual(getComparableValue({}, 13), 13);
		assert.equal(getComparableValue({ valuePath: 'age' }, data[1]), null);
		assert.strictEqual(getComparableValue({ valuePath: 'age' }, data[2]), -11);
	});

	test('getString displays 46.768 as 46.77', () => {
		assert.include(
			['46.77', '46,77'],
			getString(
				{ valuePath: 'age', locale: 'en-US', maximumFractionDigits: 2 },
				{ age: 46.768 },
			),
		);
	});
});

suite('external values', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('changing _filterInput min on column with external values updates filter min correctly', async () => {
		const omnitable = await setupOmnitableFixture(
				html`
					<cosmoz-omnitable>
						<cosmoz-omnitable-column-number
							title="Age"
							name="age"
							value-path="age"
							maximum-fraction-digits="2"
							external-values
						>
						</cosmoz-omnitable-column-number>
					</cosmoz-omnitable>
				`,
				[{ age: 1 }, { age: 0 }, { age: 20 }],
			),
			columnHeaderInput = omnitable.shadowRoot.querySelector(
				'cosmoz-omnitable-number-range-input',
			);
		omnitable
			.querySelector('cosmoz-omnitable-column-number')
			.setAttribute('autoupdate', '');
		await nextFrame();

		await typeInto(columnHeaderInput, 0, -1);
		applyFilter(columnHeaderInput);
		flush();
		await nextFrame();

		assert.equal(omnitable.filters.age.min, -1);
	});
});
