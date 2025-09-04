const indexSymbol = Symbol('index');

export { indexSymbol };

export const findLastIndex = (array, predicate) => {
	if (Array.prototype.findLastIndex) {
		return array.findLastIndex(predicate);
	}

	for (let i = array.length - 1; i >= 0; i--) {
		if (predicate(array[i], i, array)) {
			return i;
		}
	}

	return -1;
};