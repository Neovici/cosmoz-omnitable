import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable.js';
import '../src/cosmoz-omnitable-column.js';
import '../src/cosmoz-omnitable-column-number.js';

let omnitable;
const data = [
	{ id: 1, name: 'Alice', age: 30 },
	{ id: 2, name: 'Bob', age: 25 },
	{ id: 3, name: 'Charlie', age: 35 },
];

suite('no-sort', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					hash-param="test"
					style="height:300px"
					.resizeSpeedFactor=${1}
					selection-enabled
				>
					<cosmoz-omnitable-column
						title="ID"
						name="id"
						value-path="id"
						sort-on="id"
						no-sort
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						title="Name"
						name="name"
						value-path="name"
						sort-on="name"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column-number
						title="Age"
						name="age"
						value-path="age"
						sort-on="age"
					>
					</cosmoz-omnitable-column-number>
				</cosmoz-omnitable>
			`,
			data,
		);
		await nextFrame();
	});

	teardown(() => {
		location.hash = '#!/';
	});

	test('sets noSort property on column', () => {
		const idColumn = omnitable.columns.find((col) => col.name === 'id');
		assert.isTrue(idColumn.noSort);
	});

	test('does not render sort button in header for no-sort column', () => {
		const idHeaderCell = omnitable.shadowRoot.querySelector(
			'.header-cell[name="id"]',
		);
		const sortButton = idHeaderCell.querySelector('button.sg');
		assert.isNull(
			sortButton,
			'Sort button should not exist for no-sort column',
		);
	});

	test('renders sort button in header for sortable columns', () => {
		const nameHeaderCell = omnitable.shadowRoot.querySelector(
			'.header-cell[name="name"]',
		);
		const sortButton = nameHeaderCell.querySelector('button.sg');
		assert.isNotNull(
			sortButton,
			'Sort button should exist for sortable column',
		);
	});

	test('does not show no-sort column in settings sort section', async () => {
		// Open settings
		const settingsButton = omnitable.shadowRoot.querySelector(
			'cosmoz-omnitable-settings',
		);
		assert.isNotNull(settingsButton, 'Settings button should exist');

		const dropdown = settingsButton.shadowRoot.querySelector('cosmoz-dropdown');
		assert.isNotNull(dropdown, 'Dropdown should exist');

		const button = dropdown.shadowRoot.querySelector('[part="button"]');
		assert.isNotNull(button, 'Dropdown button should exist');

		button.click();
		await nextFrame();

		// Find the settings UI
		const settingsUI = settingsButton.shadowRoot.querySelector(
			'cosmoz-omnitable-settings-ui',
		);
		assert.isNotNull(settingsUI, 'Settings UI should exist');

		// Find the sort section
		const sortConsumer = settingsUI.shadowRoot.querySelector(
			'sort-and-group-consumer.sgs',
		);
		assert.isNotNull(sortConsumer, 'Sort consumer should exist');

		// Check that only sortable columns appear
		const sortButtons = sortConsumer.querySelectorAll('button.sg');
		const sortableColumnNames = Array.from(sortButtons).map((btn) =>
			btn.textContent.trim(),
		);

		assert.notInclude(
			sortableColumnNames,
			'ID',
			'No-sort column should not appear in sort settings',
		);
		assert.include(
			sortableColumnNames,
			'Name',
			'Sortable column should appear in sort settings',
		);
		assert.include(
			sortableColumnNames,
			'Age',
			'Sortable column should appear in sort settings',
		);
	});

	test('ignores sortOn from hash param if column has no-sort', async () => {
		location.hash = '#!/#test-sortOn=id';
		await nextFrame();

		assert.isUndefined(
			omnitable.sortOn,
			'sortOn should be cleared for no-sort column',
		);
	});
});
