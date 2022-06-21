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

	test('selects all items', async () => {
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
	});

	test('shift click some items', async () => {
		const item = Array.from(
				omnitable.shadowRoot.querySelectorAll('.itemRow input[type="checkbox"]')
			),
			keyEvent = new KeyboardEvent('keydown', {
				key: 'Shift',
				shiftKey: true,
			});
		item[0].click();

		await nextFrame();

		window.dispatchEvent(keyEvent);

		item[3].click();

		await nextFrame();

		assert.isTrue(item.slice(0, 4).every((el) => el.checked));

		assert.sameMembers(omnitable.data.slice(0, 4), omnitable.selectedItems);
		assert.isTrue(
			Array.from(omnitable.shadowRoot.querySelectorAll('.itemRow'))
				.slice(0, 4)
				.every((el) => el.matches('[selected]'))
		);
	});
});
