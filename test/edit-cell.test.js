import { assert, html } from '@open-wc/testing';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

suite('edit cells', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('render compact inputs', async () => {
		const omnitable = await setupOmnitableFixture(
			html`<cosmoz-omnitable>
				<cosmoz-omnitable-column name="text" value-path="text" editable>
				</cosmoz-omnitable-column>
				<cosmoz-omnitable-column-number
					name="number"
					value-path="number"
					editable
				>
				</cosmoz-omnitable-column-number>
				<cosmoz-omnitable-column-amount
					name="amount"
					value-path="amount"
					editable
				>
				</cosmoz-omnitable-column-amount>
				<cosmoz-omnitable-column-date name="date" value-path="date" editable>
				</cosmoz-omnitable-column-date>
			</cosmoz-omnitable>`,
			[
				{
					text: 'a',
					number: 1,
					amount: { amount: 1, currency: 'EUR' },
					date: new Date(2026, 0, 1),
				},
			]
		);
		await rowVisible();

		const inputs = omnitable.shadowRoot.querySelectorAll(
			'.itemRow cosmoz-input'
		);
		assert.lengthOf(inputs, 4);
		inputs.forEach((input) => assert.isTrue(input.hasAttribute('compact')));
	});
});
