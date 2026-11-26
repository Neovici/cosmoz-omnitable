import { assert, html, nextFrame } from '@open-wc/testing';

import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const labelColor = (omnitable, name) => {
	const cell = omnitable.shadowRoot.querySelector(`.header-cell[name=${name}]`);
	const input = cell.querySelector('cosmoz-input, cosmoz-autocomplete-ui');
	const label = (
		input.shadowRoot.querySelector('cosmoz-input') ?? input
	).shadowRoot.querySelector('label');
	return getComputedStyle(label).color;
};

suite('header titles', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('read in the secondary text color', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					style="--cz-color-text-secondary: rgb(1, 2, 3); --cz-color-text-quaternary: rgb(7, 8, 9)"
				>
					<cosmoz-omnitable-column
						name="name"
						title="Name"
						value-path="name"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column-autocomplete
						name="group"
						title="Group"
						value-path="group"
					></cosmoz-omnitable-column-autocomplete>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25),
		);
		await nextFrame();
		await nextFrame();

		assert.equal(labelColor(omnitable, 'name'), 'rgb(1, 2, 3)');
		assert.equal(labelColor(omnitable, 'group'), 'rgb(1, 2, 3)');
	});
});
