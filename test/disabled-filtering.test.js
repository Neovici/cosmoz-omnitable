import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-column-number.js';
import '../src/cosmoz-omnitable-column.js';
import '../src/cosmoz-omnitable.js';

const data = [
	{ id: 1, name: 'Alice', age: 30 },
	{ id: 2, name: 'Bob', age: 25 },
	{ id: 3, name: 'Charlie', age: 35 },
];

suite('disabled-filtering (per-column)', () => {
	let omnitable;

	ignoreResizeObserverLoopErrors(setup, teardown);

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					hash-param="test-df"
					style="height:300px"
					.resizeSpeedFactor=${1}
					selection-enabled
				>
					<cosmoz-omnitable-column
						title="ID"
						name="id"
						value-path="id"
						disabled-filtering
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column title="Name" name="name" value-path="name">
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column-number
						title="Age"
						name="age"
						value-path="age"
						disabled-filtering
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

	test('sets disabledFiltering property on column', () => {
		const idColumn = omnitable.columns.find((col) => col.name === 'id');
		assert.isTrue(idColumn.disabledFiltering);
	});

	test('does not set disabledFiltering on column without attribute', () => {
		const nameColumn = omnitable.columns.find((col) => col.name === 'name');
		assert.isFalse(nameColumn.disabledFiltering);
	});

	test('text column header input is disabled', () => {
		const idHeaderCell = omnitable.shadowRoot.querySelector(
			'.header-cell[name="id"]',
		);
		const input = idHeaderCell.querySelector('cosmoz-input');
		assert.isNotNull(input, 'Input should exist');
		assert.isTrue(input.hasAttribute('disabled'), 'Input should be disabled');
	});

	test('text column without disabled-filtering has enabled input', () => {
		const nameHeaderCell = omnitable.shadowRoot.querySelector(
			'.header-cell[name="name"]',
		);
		const input = nameHeaderCell.querySelector('cosmoz-input');
		assert.isNotNull(input, 'Input should exist');
		assert.isFalse(
			input.hasAttribute('disabled'),
			'Input should not be disabled',
		);
	});

	test('number column range input is disabled', () => {
		const ageHeaderCell = omnitable.shadowRoot.querySelector(
			'.header-cell[name="age"]',
		);
		const rangeInput = ageHeaderCell.querySelector(
			'cosmoz-omnitable-number-range-input',
		);
		assert.isNotNull(rangeInput, 'Range input should exist');
		assert.isTrue(
			rangeInput.hasAttribute('disabled'),
			'Range input should be disabled',
		);
	});

	test('sort buttons still render on disabled-filtering columns', () => {
		const idHeaderCell = omnitable.shadowRoot.querySelector(
			'.header-cell[name="id"]',
		);
		const sortButton = idHeaderCell.querySelector('button.sg');
		assert.isNotNull(
			sortButton,
			'Sort button should still exist for disabled-filtering column',
		);
	});
});

suite('disabled-filtering (table-level)', () => {
	let omnitable;

	ignoreResizeObserverLoopErrors(setup, teardown);

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					hash-param="test-df2"
					style="height:300px"
					.resizeSpeedFactor=${1}
					selection-enabled
					disabled-filtering
				>
					<cosmoz-omnitable-column title="ID" name="id" value-path="id">
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column title="Name" name="name" value-path="name">
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column-number
						title="Age"
						name="age"
						value-path="age"
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

	test('all columns have disabledFiltering set to true', () => {
		omnitable.columns.forEach((col) => {
			assert.isTrue(
				col.disabledFiltering,
				`Column "${col.name}" should have disabledFiltering=true`,
			);
		});
	});

	test('all text column inputs are disabled', () => {
		const idInput = omnitable.shadowRoot
			.querySelector('.header-cell[name="id"]')
			?.querySelector('cosmoz-input');
		const nameInput = omnitable.shadowRoot
			.querySelector('.header-cell[name="name"]')
			?.querySelector('cosmoz-input');

		assert.isTrue(
			idInput?.hasAttribute('disabled'),
			'ID input should be disabled',
		);
		assert.isTrue(
			nameInput?.hasAttribute('disabled'),
			'Name input should be disabled',
		);
	});

	test('number column range input is disabled', () => {
		const rangeInput = omnitable.shadowRoot
			.querySelector('.header-cell[name="age"]')
			?.querySelector('cosmoz-omnitable-number-range-input');
		assert.isTrue(
			rangeInput?.hasAttribute('disabled'),
			'Age range input should be disabled',
		);
	});

	test('table-level overrides per-column (columns without attribute are still disabled)', () => {
		// None of the columns have disabled-filtering attribute, but the table does
		const nameColumn = omnitable.columns.find((col) => col.name === 'name');
		assert.isTrue(
			nameColumn.disabledFiltering,
			'Column without per-column disabled-filtering should still be disabled due to table-level attribute',
		);
	});

	test('sort buttons still render', () => {
		const idHeaderCell = omnitable.shadowRoot.querySelector(
			'.header-cell[name="id"]',
		);
		const sortButton = idHeaderCell.querySelector('button.sg');
		assert.isNotNull(
			sortButton,
			'Sort button should still exist when filtering is disabled',
		);
	});
});
