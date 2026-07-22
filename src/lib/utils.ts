const indexSymbol = Symbol('index');

export { indexSymbol };

/**
 * Sentinel symbol representing the bulk selection feature.
 * Set as `selectedItems` when user clicks the footer "Select all items" button.
 * The total count is provided via the `allItemsCount` property.
 */
export const All = Symbol('All');
export type TAll = typeof All;

export const findLastIndex = (
	array: (number | undefined)[],
	predicate: (
		prop: number | undefined,
		index?: number,
		array?: (number | undefined)[],
	) => boolean,
) => {
	if (typeof array.findLastIndex === 'function') {
		return array.findLastIndex(predicate);
	}

	for (let i = array.length - 1; i >= 0; i--) {
		if (predicate(array[i], i, array)) {
			return i;
		}
	}

	return -1;
};
