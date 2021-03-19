import 'web-animations-js/web-animations-next.min.js';
import { flush } from '@polymer/polymer/lib/utils/flush';
import {
	expect, html, aTimeout, oneEvent
} from '@open-wc/testing';

import {
	pressEnter, pressAndReleaseKeyOn
} from '@polymer/iron-test-helpers/mock-interactions.js';

import '../../cosmoz-omnitable.js';
import '../../cosmoz-omnitable-column-number.js';
import { setupOmnitableFixture } from '../helpers/utils';

const wait = time => new Promise(resolve => setTimeout(resolve, time)),
	data = [{
		age: 17
	}, {
		age: 11,
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
		age: 46.7511
	}, {
		age: 46.768
	}];

suite('cosmoz-omnitable-column-number', () => {
	let omnitable;

	const getHeaderMenu = () => omnitable.shadowRoot.querySelector('cosmoz-omnitable-header-row paper-dropdown-menu'),
		openHeaderMenu = async () => {
			const header = getHeaderMenu();
			header.noAnimations = true;
			header.click();
			await oneEvent(header.querySelector('paper-input'), 'focus');
		},

		getInputs = () =>
			omnitable.shadowRoot.querySelectorAll('cosmoz-omnitable-header-row paper-dropdown-menu paper-input'),

		getFocusedInput = () =>
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-header-row paper-dropdown-menu paper-input:focus-within'),

		setInputValue = async (inputNo, value) => {
			const input = getInputs()[inputNo];
			input.focus();
			input.value = value;
		};

	setup(async () => {
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable">
				<cosmoz-omnitable-column-number title="Age" name="age" value-path="age" maximum-fraction-digits="2">
				</cosmoz-omnitable-column-number>
			</cosmoz-omnitable>
		`, data);

		flush();
		omnitable.flush();
	});

	test('filters the table', async () => {
		// given that the header menu is open
		await openHeaderMenu();

		// and the omnitable displays all items
		expect(omnitable.sortedFilteredGroupedItems).to.have.lengthOf(6);

		// when I fill in the filter values
		await setInputValue(0, 10);
		await setInputValue(1, 12);

		// and I hit enter
		pressEnter(getFocusedInput());

		// then the omnitable displays only one item
		omnitable.flush();
		expect(omnitable.sortedFilteredGroupedItems).to.have.lengthOf(1);
	});

	test('when opened, the first input is focused', async () => {
		// given that the header menu is closed
		// when I open the menu
		await openHeaderMenu();

		// then the first input is focused
		expect(getFocusedInput()).to.equal(getInputs()[0]);
	});

	test('navigation using enter', async () => {
		// given that the header menu is open
		await openHeaderMenu();
		expect(getHeaderMenu().opened).to.be.true;

		// when I hit Enter
		const inputs = getInputs();
		pressEnter(getFocusedInput());

		// then the next input is focused
		expect(getFocusedInput()).to.equal(inputs[1]);

		// when I hit Enter again
		pressEnter(getFocusedInput());

		// then the menu is closed
		expect(getHeaderMenu().opened).to.be.false;
	});

	test('tab navigation closes the input', async () => {
		// given that the header menu is open
		await openHeaderMenu();
		expect(getHeaderMenu().opened).to.be.true;

		const inputs = getInputs();
		// when I focus the last input
		inputs[1].focus();

		// and I hit tab
		pressAndReleaseKeyOn(getFocusedInput(), 9);

		// then the menu is closed
		expect(getHeaderMenu().opened).to.be.false;
	});

	test('out of range values are limited on blur', async () => {
		// given that the header menu is open
		await openHeaderMenu();

		// when I fill in a value outside of the available range
		getFocusedInput().value = 2;

		// then the value is accepted
		const inputs = getInputs();
		expect(inputs[0].value).to.equal(2);

		// when I move to the next input
		pressEnter(getFocusedInput());

		// then the value is replaced with the minimum value
		expect(inputs[0].value).to.equal(5);

		// when I fill in the next value
		getFocusedInput().value = 1000;

		// then the value is accepted
		expect(inputs[1].value).to.equal(1000);

		// when I hit enter
		pressEnter(getFocusedInput());

		// then the value is replace with the maximum value
		expect(inputs[1].value).to.equal(46.768);

		// when I hit enter again
		pressEnter(getFocusedInput());

		// then the menu is closed
		expect(getHeaderMenu().opened).to.be.false;
	});

	test('clearing the inputs clear the filter', async () => {
		// given that the header menu is filtered
		await openHeaderMenu();
		await setInputValue(0, 10);
		await setInputValue(1, 12);
		pressEnter(getFocusedInput());
		omnitable.flush();
		expect(omnitable.sortedFilteredGroupedItems).to.have.lengthOf(1);

		// when I click the clear buttons
		const inputs = getInputs();
		inputs[0].querySelector('iron-icon').click();
		inputs[1].querySelector('iron-icon').click();

		// then the omnitable displays all items
		omnitable.flush();
		expect(omnitable.sortedFilteredGroupedItems).to.have.lengthOf(6);
	});
});
