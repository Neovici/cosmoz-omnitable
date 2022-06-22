/* eslint-disable max-lines */
import { assert, html, nextFrame } from '@open-wc/testing';

import '../demo/helpers/cosmoz-translations';
import { setupOmnitableFixture } from './helpers/utils';
import { generateTableDemoData } from '../demo/table-demo-helper';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-columns.js';

suite('basic', () => {
	let omnitable;
	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable id="omnitable">
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);
	});

	test('selects and deselect all items', async () => {
		const all = omnitable.shadowRoot.querySelector('input[type="checkbox"]');
		all.click();
		assert.isTrue(all.checked);

		await nextFrame();

		assert.sameMembers(omnitable.data, omnitable.selectedItems);
		assert.isTrue(
			Array.from(omnitable.shadowRoot.querySelectorAll('.itemRow')).every(
				(el) => el.matches('[selected]')
			)
		);

		all.click();

		await nextFrame();

		assert.isNotTrue(all.checked);
		assert.deepEqual(omnitable.selectedItems, []);
	});

	test('shift click select multiple items', async () => {
		const items = Array.from(
				omnitable.shadowRoot.querySelectorAll('.itemRow input[type="checkbox"]')
			),
			keyEvent = new KeyboardEvent('keydown', {
				key: 'Shift',
				shiftKey: true,
			});
		items[0].click();

		await nextFrame();

		window.dispatchEvent(keyEvent);

		items[3].click();

		await nextFrame();

		assert.isTrue(items.slice(0, 4).every((el) => el.checked));

		assert.sameMembers(omnitable.data.slice(0, 4), omnitable.selectedItems);
		assert.isTrue(
			Array.from(omnitable.shadowRoot.querySelectorAll('.itemRow'))
				.slice(0, 4)
				.every((el) => el.matches('[selected]'))
		);
	});

	test('ctrl click to remain one item selected', async () => {
		const items = Array.from(
				omnitable.shadowRoot.querySelectorAll('.itemRow input[type="checkbox"]')
			),
			keyEvent = new KeyboardEvent('keydown', {
				key: 'Ctrl',
				ctrlKey: true,
			});
		items[0].click();
		items[1].click();
		items[2].click();

		await nextFrame();

		assert.isTrue(items.slice(0, 3).every((el) => el.checked));
		assert.sameMembers(omnitable.data.slice(0, 3), omnitable.selectedItems);

		window.dispatchEvent(keyEvent);

		items[2].click();

		await nextFrame();

		assert.isTrue(items[2].checked);
		assert.isNotOk(
			items
				.slice(0, 2)
				.concat(items.slice(-5))
				.every((el) => el.checked)
		);
		assert.notSameMembers(omnitable.data, omnitable.selectedItems);
	});
});
