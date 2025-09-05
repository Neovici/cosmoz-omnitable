const symbols = {
		group: Symbol('group'),
	},
	getItemState = (item, itemsState) => {
		if (!itemsState.has(item)) {
			itemsState.set(item, {});
		}

		return itemsState.get(item);
	},
	isExpanded = (item, itemsState) =>
		Boolean(getItemState(item, itemsState).expanded),
	isFolded = (group, itemsState) =>
		Boolean(getItemState(group, itemsState).folded),
	isGroup = (item) => (item ? item.items instanceof Array : false),
	/**
	 * Asserts that data is either all items or all groups, never mixed.
	 * @param	 {Array} data the data
	 * @return {void}
	 */
	_assertDataIsHomogeneous = (data) => {
		if (!Array.isArray(data) || data.length === 0) {
			return;
		}

		const firstItemIsAGroup = Array.isArray(data[0].items),
			isHomogeneous = data.every(
				(group) => Array.isArray(group.items) === firstItemIsAGroup,
			);

		if (!isHomogeneous) {
			throw new Error('Data must be homogeneous.');
		}
	},
	/**
	 * Prepare data.
	 * @param {array} data Data.
	 * @param {boolean} displayEmptyGroups Flag.
	 * @param {WeakMap} itemsState State.
	 * @returns {void|array} Prepared data.
	 */
	prepareData = (data, displayEmptyGroups, itemsState) => {
		if (!Array.isArray(data)) {
			return;
		}

		// data should be either all items or all grouped items, never mixed
		_assertDataIsHomogeneous(data);

		const flatData = data.reduce((acc, item) => {
			// simple items
			if (!item.items) {
				return acc.concat(item);
			}

			// groups with items
			if (item.items.length) {
				if (getItemState(item, itemsState).folded) {
					return acc.concat(item);
				}
				return acc.concat(
					item,
					item.items.map((i) => Object.assign(i, { [symbols.group]: item })),
				);
			}

			// groups without items
			if (displayEmptyGroups) {
				return acc.concat(item);
			}

			return acc;
		}, []);

		return flatData;
	},
	callFn = (fn, ...args) => (typeof fn === 'function' ? fn(...args) : fn),
	byReference = (a, b) => a === b;

export {
	symbols,
	prepareData,
	getItemState,
	isExpanded,
	isFolded,
	isGroup,
	callFn,
	byReference,
};
