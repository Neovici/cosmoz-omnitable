import { assert, html } from '@open-wc/testing';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

suite('primary column', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('marks only the cells of the primary column', async () => {
		const omnitable = await setupOmnitableFixture(
			html`<cosmoz-omnitable>
				<cosmoz-omnitable-column
					name="supplier"
					primary
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column name="invoice"></cosmoz-omnitable-column>
			</cosmoz-omnitable>`,
			[{ supplier: 'Acme Supplies AB', invoice: '100482' }]
		);
		await rowVisible();

		const cell = (name) =>
			omnitable.shadowRoot.querySelector(`.itemRow-cell[name="${name}"]`);
		assert.isTrue(cell('supplier').hasAttribute('primary'));
		assert.isFalse(cell('invoice').hasAttribute('primary'));
	});
});
