const indexSymbol = Symbol('index');

export { indexSymbol };

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
