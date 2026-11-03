import { assert, html, nextFrame, waitUntil } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-column.js';
import '../src/cosmoz-omnitable.js';

suite('inline settings', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('settings are not capped at the height of an inline table body', async () => {
		const omnitable = await setupOmnitableFixture(
			html`<cosmoz-omnitable inline>
				<cosmoz-omnitable-column
					title="Name"
					name="name"
					value-path="name"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					title="City"
					name="city"
					value-path="city"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>`,
			[{ name: 'Alice', city: 'Gothenburg' }]
		);
		await rowVisible();
		const tableContent = omnitable.shadowRoot.querySelector('#tableContent');
		await waitUntil(
			() =>
				omnitable.style.getPropertyValue('--ot-height') ===
				`${tableContent.getBoundingClientRect().height}px`
		);

		const settings = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-settings'
		);
		settings.shadowRoot
			.querySelector('cosmoz-dropdown')
			.shadowRoot.querySelector('#dropdownButton')
			.click();
		await nextFrame();

		const settingsUI = settings.shadowRoot.querySelector(
			'cosmoz-omnitable-settings-ui'
		);
		assert.isAbove(
			settingsUI.getBoundingClientRect().height,
			tableContent.getBoundingClientRect().height
		);
	});
});
