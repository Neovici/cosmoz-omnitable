import { assert, html, nextFrame } from '@open-wc/testing';
import { perform } from '@neovici/cfg/web/perform.js';
import i18next from 'i18next';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

suite('header filter sizing', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('keeps a narrow numeric filter visible and interactive beside sorting', async () => {
		await i18next.init({ lng: 'en', resources: {} });
		const table = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable style="width: 500px; height: 300px; --cz-control-height-md: 32px; --cz-spacing: 4px">
					<cosmoz-omnitable-column-number
						name="percent"
						title="Campaign rebate %"
						value-path="percent"
						width="25px"
						min-width="25px"
						flex="0"
					></cosmoz-omnitable-column-number>
					<cosmoz-omnitable-column
						name="description"
						title="Description"
						value-path="description"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			[{ percent: 1, description: 'First' }, { percent: 5, description: 'Second' }]
		);
		await nextFrame();
		const cell = table.shadowRoot.querySelector('.header-cell[name="percent"]');
		assert.equal(cell.getBoundingClientRect().width, 25);
		assert.equal(cell.querySelector('.sg').getBoundingClientRect().width, 12);
		assert.isAbove(
			cell.querySelector('cosmoz-omnitable-number-range-input').getBoundingClientRect().width,
			0
		);
		await perform(async ({ page, expect }) => {
			const cell = page.locator('.header-cell[name="percent"]');
			const range = cell.locator('cosmoz-omnitable-number-range-input');
			await range.getByRole('button', { name: 'Campaign rebate %', exact: true }).click();
			await expect(range.getByRole('spinbutton', { name: 'From', exact: true })).toBeVisible();
			await range.getByRole('spinbutton', { name: 'From', exact: true }).fill('2');
			await range.getByRole('spinbutton', { name: 'From', exact: true }).press('Enter');
		});
		assert.equal(table.filters.percent.min, 2);
	});

	test('stretches the filter label across the header cell', async () => {
		await i18next.init({ lng: 'en', resources: {} });
		const table = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable style="width: 500px; height: 300px">
					<cosmoz-omnitable-column-number
						name="quantity"
						title="Ordered quantity"
						value-path="quantity"
						width="150px"
						flex="0"
					></cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`,
			[{ quantity: 1 }]
		);
		await nextFrame();
		const label = table.shadowRoot
			.querySelector('.header-cell[name="quantity"] cosmoz-omnitable-number-range-input')
			.shadowRoot.querySelector('cosmoz-omnitable-dropdown-input')
			.shadowRoot.querySelector('label');
		assert.isAbove(label.getBoundingClientRect().width, 100);
	});
});
