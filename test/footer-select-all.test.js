import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ensureDemoI18nInitialized,
	setDemoLanguage,
} from '../demo/helpers/i18n';
import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import { All } from '../src/lib/utils';

suite('footer select all', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		await ensureDemoI18nInitialized();
		await setDemoLanguage('en');
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					id="omnitable"
					selection-enabled
					enable-select-all
					.allItemsCount=${10000}
				>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25),
		);
		await nextFrame();
	});

	test('shows select-all button after selecting displayed rows and switches to All', async () => {
		const headerCheckbox = omnitable.shadowRoot.querySelector(
			'input[type="checkbox"]',
		);
		headerCheckbox.click();
		await nextFrame();

		assert.isTrue(headerCheckbox.checked);
		assert.include(omnitable.shadowRoot.textContent, 'Select all items');

		omnitable.shadowRoot.querySelector('.selectAllItems').click();
		await nextFrame();
		await nextFrame();

		const footerInfo = omnitable.shadowRoot.querySelector(
			'#bottomBar [slot="info"]',
		);

		assert.strictEqual(omnitable.selectedItems, All);
		assert.notInclude(footerInfo.textContent, 'Select all items');
		assert.match(footerInfo.textContent, /All \d+ items selected/u);
	});
});
