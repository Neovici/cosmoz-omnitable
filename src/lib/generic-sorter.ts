// eslint-disable-next-line max-statements
export const genericSorter = (a: unknown, b: unknown) => {
	if (a === b) {
		return 0;
	}

	if (a == null) {
		return -1;
	}

	if (b == null) {
		return 1;
	}

	const typeA = typeof a;
	const typeB = typeof b;

	if (typeA === 'object' && typeB === 'object') {
		// HACK(pasleq): worst case, compare using values converted to string
		return a.toString() < b.toString() ? -1 : 1;
	}

	if (typeA === 'number' && typeB === 'number') {
		return (a as number) - (b as number);
	}

	if (typeA === 'string' && typeB === 'string') {
		return (a as string) < (b as string) ? -1 : 1;
	}

	if (typeA === 'boolean' && typeB === 'boolean') {
		return (a as boolean) ? -1 : 1;
	}

	// eslint-disable-next-line no-console
	console.warn('unsupported sort', typeA, a, typeB, b);
	return 0;
};
