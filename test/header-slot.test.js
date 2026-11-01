import { assert, html, nextFrame } from '@open-wc/testing';

import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const mount = async (slotted) => {
		const omnitable = await setupOmnitableFixture(
			html`<cosmoz-omnitable>
				<cosmoz-omnitable-column
					name="name"
					value-path="name"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="amount"
					value-path="amount"
				></cosmoz-omnitable-column>
				${slotted}
			</cosmoz-omnitable>`,
			generateTableDemoData(10, 11, 25)
		);
		await nextFrame();
		await nextFrame();
		return omnitable;
	},
	headerSlot = (omnitable) =>
		omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-header-row slot[name="header"]'
		);

suite('header slot', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('slotted content replaces the column cells', async () => {
		const omnitable = await mount(html`<input slot="header" id="search" />`),
			search = omnitable.querySelector('#search');

		assert.deepEqual(headerSlot(omnitable).assignedElements(), [search]);
		assert.isAbove(search.getBoundingClientRect().width, 0, 'search shows');
		omnitable.shadowRoot
			.querySelectorAll('.header-cell')
			.forEach((cell) =>
				assert.equal(cell.getBoundingClientRect().width, 0, 'cells hide')
			);
		assert.exists(
			omnitable.shadowRoot.querySelector('cosmoz-omnitable-settings'),
			'settings stay'
		);
		assert.exists(
			omnitable.shadowRoot.querySelector('.header .checkbox.all'),
			'select all stays'
		);
	});

	test('without slotted content the column cells render as before', async () => {
		const omnitable = await mount(''),
			cells = [...omnitable.shadowRoot.querySelectorAll('.header-cell')];

		assert.isEmpty(headerSlot(omnitable).assignedElements());
		assert.deepEqual(
			cells.map((cell) => cell.getAttribute('name')),
			['name', 'amount']
		);
		cells.forEach((cell) => {
			assert.isAbove(cell.getBoundingClientRect().width, 0);
			assert.equal(getComputedStyle(cell).display, 'inline-flex');
		});
	});
});
