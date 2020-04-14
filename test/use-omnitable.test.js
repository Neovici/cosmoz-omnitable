/* eslint-disable max-lines */
import {
	useGroupFilterSort, SORT_ASCENDING, SORT_DESCENDING
} from '../lib/use-group-filter-sort';
import { component } from 'haunted';
import {
	assert, html, fixture
} from '@open-wc/testing';

customElements.define(
	'use-group-filter-sort',
	component(function (props) {
		// eslint-disable-next-line no-invalid-this
		this.current = useGroupFilterSort(props);
	})
);

const initialItems = [
		{
			id: 1,
			name: 'Item 1',
			isActive: true,
			price: 0,
			features: ['a', 'b', 'c']
		},
		{
			id: 2,
			name: 'Item 2',
			isActive: false,
			price: 12.3,
			features: ['b', 'd']
		},
		{
			id: 3,
			name: 'Item 3',
			isActive: true,
			price: -20,
			features: []
		}
	],
	config = {
		id: {
			type: Number
		},
		name: {
			type: String
		},
		isActive: {
			type: Boolean
		},
		price: {
			type: Number
		},
		features: {
			type: Array
		}
	};

suite.only('use-group-filter-sort', () => {
	test('it returns data unchanged if no sorting, filtering, grouping is defined', async () => {
		const items = initialItems.slice(),
			result = await fixture(
				html`<use-group-filter-sort .items=${ items } />`
			);

		assert.deepStrictEqual(result.current.visibleItems, initialItems);
	});

	test('it sorts data', async () => {
		const items = initialItems.slice(),
			sortBy = 'price',
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .sortBy="${sortBy}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				id: 3,
				name: 'Item 3',
				isActive: true,
				price: -20,
				features: []
			},
			{
				id: 1,
				name: 'Item 1',
				isActive: true,
				price: 0,
				features: ['a', 'b', 'c']
			},
			{
				id: 2,
				name: 'Item 2',
				isActive: false,
				price: 12.3,
				features: ['b', 'd']
			}
		]);
	});

	test('it sorts data in reverse', async () => {
		const items = initialItems.slice(),
			sortBy = 'price',
			sortDirection = SORT_DESCENDING,
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .sortBy="${sortBy}" .sortDirection="${sortDirection}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				id: 2,
				name: 'Item 2',
				isActive: false,
				price: 12.3,
				features: ['b', 'd']
			},
			{
				id: 1,
				name: 'Item 1',
				isActive: true,
				price: 0,
				features: ['a', 'b', 'c']
			},
			{
				id: 3,
				name: 'Item 3',
				isActive: true,
				price: -20,
				features: []
			}
		]);
	});

	test('it filters data', async () => {
		const items = initialItems.slice(),
			filters = [
				({ price }) => price >= 0,
				({ isActive }) => isActive
			],
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .filters="${filters}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				id: 1,
				name: 'Item 1',
				isActive: true,
				price: 0,
				features: ['a', 'b', 'c']
			}
		]);
	});

	test('it sorts and filters data', async () => {
		const items = initialItems.slice(),
			sortBy = 'price',
			filters = [
				({ isActive }) => isActive
			],
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .filters="${filters}" .sortBy="${sortBy}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				id: 3,
				name: 'Item 3',
				isActive: true,
				price: -20,
				features: []
			},
			{
				id: 1,
				name: 'Item 1',
				isActive: true,
				price: 0,
				features: ['a', 'b', 'c']
			}
		]);
	});

	test('it groups data', async () => {
		const items = initialItems.slice(),
			groupBy = 'price',
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				price: -20,
				items: [
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					}
				]
			},
			{
				price: 0,
				items: [
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					}
				]
			},
			{
				price: 12.3,
				items: [
					{
						id: 2,
						name: 'Item 2',
						isActive: false,
						price: 12.3,
						features: ['b', 'd']
					}
				]
			}
		]);
	});

	test('it groups data in reverse', async () => {
		const items = initialItems.slice(),
			groupBy = 'price',
			groupDirection = SORT_DESCENDING,
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .groupDirection="${groupDirection}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				price: 12.3,
				items: [
					{
						id: 2,
						name: 'Item 2',
						isActive: false,
						price: 12.3,
						features: ['b', 'd']
					}
				]
			},
			{
				price: 0,
				items: [
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					}
				]
			},
			{
				price: -20,
				items: [
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					}
				]
			}
		]);
	});

	test('it filters and groups data', async () => {
		const items = initialItems.slice(),
			groupBy = 'price',
			filters = [({ isActive }) => isActive],
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .filters="${filters}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				price: -20,
				items: [
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					}
				]
			},
			{
				price: 0,
				items: [
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					}
				]
			}
		]);
	});

	test('it filters and groups data 2', async () => {
		const items = initialItems.slice(),
			groupBy = 'price',
			filters = [({ price }) => price > 0],
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .filters="${filters}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				price: 12.3,
				items: [
					{
						id: 2,
						name: 'Item 2',
						isActive: false,
						price: 12.3,
						features: ['b', 'd']
					}
				]
			}
		]);
	});

	test('it sorts and groups data', async () => {
		const items = initialItems.slice(),
			groupBy = 'isActive',
			sortBy = 'price',
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .sortBy="${sortBy}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				isActive: false,
				items: [
					{
						id: 2,
						name: 'Item 2',
						isActive: false,
						price: 12.3,
						features: ['b', 'd']
					}
				]
			},
			{
				isActive: true,
				items: [
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					},
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					}
				]
			}
		]);
	});

	test('it sorts, filters and groups data', async () => {
		const items = initialItems.slice(),
			groupBy = 'isActive',
			sortBy = 'price',
			filters = [({ isActive }) => isActive],
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .sortBy="${sortBy}" .filters="${filters}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				isActive: true,
				items: [
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					},
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					}
				]
			}
		]);
	});

	test('it sorts and groups data, with mixed directions', async () => {
		const items = initialItems.slice(),
			groupBy = 'isActive',
			sortBy = 'price',
			sortDirection = SORT_DESCENDING,
			groupDirection = SORT_ASCENDING,
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .sortBy="${sortBy}" .sortDirection="${sortDirection}" .groupDirection="${groupDirection}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				isActive: false,
				items: [
					{
						id: 2,
						name: 'Item 2',
						isActive: false,
						price: 12.3,
						features: ['b', 'd']
					}
				]
			},
			{
				isActive: true,
				items: [
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					},
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					}
				]
			}
		]);
	});

	test('it sorts and groups data, with mixed directions 2', async () => {
		const items = initialItems.slice(),
			groupBy = 'isActive',
			sortBy = 'price',
			sortDirection = SORT_ASCENDING,
			groupDirection = SORT_DESCENDING,
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .sortBy="${sortBy}" .sortDirection="${sortDirection}" .groupDirection="${groupDirection}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				isActive: true,
				items: [
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					},
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					}
				]
			},
			{
				isActive: false,
				items: [
					{
						id: 2,
						name: 'Item 2',
						isActive: false,
						price: 12.3,
						features: ['b', 'd']
					}
				]
			}
		]);
	});

	test('it sorts and groups data, with mixed directions 3', async () => {
		const items = initialItems.slice(),
			groupBy = 'isActive',
			sortBy = 'price',
			sortDirection = SORT_DESCENDING,
			groupDirection = SORT_DESCENDING,
			result = await fixture(
				html`<use-group-filter-sort .config=${config} .items=${items} .groupBy="${groupBy}" .sortBy="${sortBy}" .sortDirection="${sortDirection}" .groupDirection="${groupDirection}"/>`
			);

		assert.deepStrictEqual(result.current.visibleItems, [
			{
				isActive: true,
				items: [
					{
						id: 1,
						name: 'Item 1',
						isActive: true,
						price: 0,
						features: ['a', 'b', 'c']
					},
					{
						id: 3,
						name: 'Item 3',
						isActive: true,
						price: -20,
						features: []
					}
				]
			},
			{
				isActive: false,
				items: [
					{
						id: 2,
						name: 'Item 2',
						isActive: false,
						price: 12.3,
						features: ['b', 'd']
					}
				]
			}
		]);
	});
});
