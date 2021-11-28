// eslint-disable-next-line max-statements
export const genericSorter = (a, b) => {
	if (a === b) {
		return 0;
	}

	if (a == null) {
		return -1;
	}

	if (b == null) {
		return 1;
	}

	if (typeof a === 'object' && typeof b === 'object') {
		// HACK(pasleq): worst case, compare using values converted to string
		return a.toString() < b.toString() ? -1 : 1;
	}

	if (typeof a === 'number' && typeof b === 'number') {
		return a - b;
	}

	if (typeof a === 'string' && typeof b === 'string') {
		return a < b ? -1 : 1;
	}

	if (typeof a === 'boolean' && typeof b === 'boolean') {
		return a ? -1 : 1;
	}

	// eslint-disable-next-line no-console
	console.warn('unsupported sort', typeof a, a, typeof b, b);
	return 0;
};
