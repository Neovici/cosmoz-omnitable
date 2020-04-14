import {
	useMemo
} from 'haunted';

const
	/**
	 * Parses the configuration and checks if all required configurations options are set up correctly.
	 *
	 * NOTE: It assumes that all items have the same schema
	 *
	 * @param {Object} config the omnitable configuration
	 * @param {Array<Object>} items the list of items
	 * @returns {(Boolean|Error)} a configuration error or false if the config is valid
	 */
	parseConfig = (config, items) => {
		if (typeof config !== 'object') {
			return new Error('"config" must be an object');
		}

		if (!Array.isArray(items)) {
			return new Error('"items" must be an array');
		}

		// TODO: validate each config option

		if (items.length === 0) {
			return false; // not enough information
		}

		for (const key in items[0]) {
			if (config[key] == null) {
				return new Error(`Key "${key}" is missing configuration`);
			}
		}

		return false;
	},

	sortingFunctions = {
		[Number]: (a, b) => a - b,
		[Boolean]: (a, b) => a - b,
		// eslint-disable-next-line no-nested-ternary
		[String]: (a, b) => a === b	? 0	: a < b	? 1	: -1,
		[Object]: (a, b) => a < b,
		[Array]: (a, b) => a < b
	},

	filterItems = (items, filters) =>
		!Array.isArray(filters) || filters.length === 0
			? items
			: items.reduce((acc, item) => {
				if (Array.isArray(filters) && filters.some(filter => !filter(item))) {
					return acc;
				}

				acc.push(item);
				return acc;
			}, []),

	filterAndGroupItems = (items, filters, groupBy) =>
		Array.from(
			// filter and group remaining items
			items.reduce((acc, item) => {
				if (Array.isArray(filters) && filters.some(filter => !filter(item))) {
					return acc;
				}

				const groupValue = item[groupBy]; // TODO: support group by path; comparable value
				if (!acc.has(groupValue)) {
					return acc.set(groupValue, [item]);
				}

				acc.get(groupValue).push(item);
				return acc;
			}, new Map())
				.entries()
			// convert Map to Array
		).map(([groupValue, items]) => ({
			[groupBy]: groupValue,
			items
		})),

	sortItems = (items, sortBy, sortDirection, config) => {
		if (sortBy == null) {
			return items;
		}

		const sortFn = sortingFunctions[config[sortBy].type];
		return items.slice().sort((a, b) => sortFn(a[sortBy], b[sortBy]) * sortDirection); // TODO: support sortBy path?
	},
	// eslint-disable-next-line max-params
	sortGroupedItems = (groups, sortBy, groupBy, sortDirection, groupDirection, config) =>
		sortBy == null
			? sortItems(groups, groupBy, groupDirection, config)
			: sortItems(
				groups.map(group => ({
					...group,
					items: sortItems(group.items, sortBy, sortDirection, config)
				})),
				groupBy,
				groupDirection,
				config
			);

export const
	SORT_ASCENDING = 1,
	SORT_DESCENDING = -1,
	useGroupFilterSort = ({
		config, items,
		filters, sortBy, groupBy,
		sortDirection = SORT_ASCENDING,
		groupDirection = SORT_ASCENDING
	}) => {
		const configError = useMemo(() => parseConfig(config, items), [config, items]);
		if (configError) {
			return {
				visibleItems: items,
				configError
			};
		}

		let visibleItems = useMemo(
			() => groupBy == null
				? filterItems(items, filters)
				: filterAndGroupItems(items, filters, groupBy)
			, [items, filters, groupBy]);

		visibleItems = useMemo(
		// eslint-disable-next-line no-nested-ternary
			() => groupBy == null
				? sortItems(visibleItems, sortBy, sortDirection, config)
				: sortGroupedItems(visibleItems, sortBy, groupBy, sortDirection, groupDirection, config)
			, [visibleItems, sortBy, groupBy, sortDirection, groupDirection, config]
		);

		return {
			visibleItems,
			configError
		};
	};
