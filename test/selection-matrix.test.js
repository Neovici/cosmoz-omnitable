import { assert, html, nextFrame } from '@open-wc/testing';

import { perform } from '@neovici/cfg/web/perform.js';

import {
	ensureDemoI18nInitialized,
	setDemoLanguage,
} from '../demo/helpers/i18n';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import { All } from '../src/lib/utils';

const threeColumnOmnitable = (variant = 'plain') =>
		html`<cosmoz-omnitable
			style="height: 300px"
			selection-enabled
			?enable-select-all=${variant === 'all'}
			${variant === 'all' ? html`.allItemsCount=${10000}` : html``}
			.resizeSpeedFactor=${1}
		>
			<cosmoz-omnitable-column
				title="Name"
				name="name"
				value-path="name"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column-number
				title="Age"
				name="age"
				value-path="age"
			></cosmoz-omnitable-column-number>
		</cosmoz-omnitable>`,
	data = [
		{ id: 0, name: 'Alice', age: 30 },
		{ id: 1, name: 'Bob', age: 25 },
		{ id: 2, name: 'Carol', age: 35 },
	];

const rowCheckbox = (omni, row) =>
		omni.shadowRoot.querySelectorAll('.itemRow input.checkbox')[row],
	uncheck = async (omni, row) => {
		await rowVisible();
		rowCheckbox(omni, row).click();
		await nextFrame();
		await nextFrame();
	};

suite('selection matrix', function () {
	/* eslint-disable-next-line no-invalid-this */
	this.timeout(30000);
	ignoreResizeObserverLoopErrors(setup, teardown);

	setup(async () => {
		await ensureDemoI18nInitialized();
		await setDemoLanguage('en');
	});

	suite('footer select-all (the `All` selection model)', () => {
		test('selecting all displayed rows switches the selection to All', async () => {
			const omni = await setupOmnitableFixture(
				threeColumnOmnitable('all'),
				data,
			);
			await uncheck(omni, 0);
			await uncheck(omni, 1);
			await uncheck(omni, 2);
			await nextFrame();
			omni.allItemsCount = 10000;
			omni.shadowRoot.querySelector('.selectAllItems').click();
			await nextFrame();
			await nextFrame();
			await nextFrame();
			assert.equal(
				omni.selectedItems,
				All,
				'the selection model switches to the All sentinel',
			);
			const footerInfo = omni.shadowRoot.querySelector(
				'#bottomBar [slot="info"]',
			);
			assert.include(
				footerInfo?.textContent ?? '',
				'10000',
				'the footer reports the allItemsCount under the All model',
			);
		});

		test('deselecting one row under All produces the array of the remaining items', async () => {
			const omni = await setupOmnitableFixture(
				threeColumnOmnitable('all'),
				data,
			);
			await uncheck(omni, 0);
			await uncheck(omni, 1);
			await uncheck(omni, 2);
			omni.shadowRoot.querySelector('.selectAllItems').click();
			await nextFrame();
			await nextFrame();
			assert.equal(omni.selectedItems, All, 'the All model is active');

			await uncheck(omni, 1); // Bob leaves the selection
			const selected = omni.selectedItems;
			assert.isArray(
				selected,
				'leaving the All model collapses back to an array',
			);
			assert.lengthOf(selected, 2, 'the two remaining rows stay selected');
			assert.isFalse(
				selected.some((item) => item.name === 'Bob'),
				'the deselected row left the selection',
			);
			assert.isTrue(
				selected.some((item) => item.name === 'Alice'),
				'the untouched row stayed selected',
			);
		});

		test('unchecking the header checkbox under All clears the selection', async () => {
			const omni = await setupOmnitableFixture(
				threeColumnOmnitable('all'),
				data,
			);
			await uncheck(omni, 0);
			await uncheck(omni, 1);
			await uncheck(omni, 2);
			omni.shadowRoot.querySelector('.selectAllItems').click();
			await nextFrame();
			await nextFrame();
			assert.equal(omni.selectedItems, All, 'the All model is active');

			const headerCheckbox = omni.shadowRoot.querySelector(
				'input[type="checkbox"].all',
			);
			assert.isTrue(
				headerCheckbox.checked,
				'the header reflects the All selection as checked',
			);
			headerCheckbox.click();
			await nextFrame();
			await nextFrame();
			assert.deepEqual(
				omni.selectedItems,
				[],
				'unchecking the header clears the selection',
			);
		});

		test('without enable-select-all the All sentinel never leaks', async () => {
			const omni = await setupOmnitableFixture(threeColumnOmnitable(), data);
			await uncheck(omni, 0);
			await uncheck(omni, 1);
			await uncheck(omni, 2);
			await nextFrame();
			assert.isNull(
				omni.shadowRoot.querySelector('.selectAllItems'),
				'the select-all affordance is hidden',
			);
			const selected = omni.selectedItems;
			assert.isArray(
				selected,
				'the selection stays an array (no All sentinel)',
			);
			assert.lengthOf(
				selected,
				3,
				'all three manually checked rows are in the selection',
			);
		});
	});

	suite('export click-through', () => {
		test('the XLSX save action downloads the default workbook name', async () => {
			const omni = await setupOmnitableFixture(
				threeColumnOmnitable('all'),
				data,
			);
			await uncheck(omni, 0);
			await nextFrame();

			const suggested = await perform(async ({ page }) => {
				// opening the dropdown (focus) renders the save buttons
				const [download] = await Promise.all([
					page.waitForEvent('download', { timeout: 6000 }),
					page
						.locator('cosmoz-omnitable')
						.locator('cosmoz-dropdown-menu')
						.click(),
					page
						.locator('cosmoz-omnitable')
						.locator('cosmoz-button', {
							hasText: 'Save selected items as XLSX',
						})
						.click(),
				]);
				return download.suggestedFilename();
			});

			assert.equal(suggested, 'omnitable.xlsx');
		});

		test('the CSV save action downloads the default csv name', async () => {
			const omni = await setupOmnitableFixture(
				threeColumnOmnitable('all'),
				data,
			);
			await uncheck(omni, 0);
			await nextFrame();

			const suggested = await perform(async ({ page }) => {
				const [download] = await Promise.all([
					page.waitForEvent('download', { timeout: 6000 }),
					page
						.locator('cosmoz-omnitable')
						.locator('cosmoz-dropdown-menu')
						.click(),
					page
						.locator('cosmoz-omnitable')
						.locator('cosmoz-button', {
							hasText: 'Save selected items as CSV',
						})
						.click(),
				]);
				return download.suggestedFilename();
			});

			assert.equal(suggested, 'omnitable.csv');
		});
	});
});
