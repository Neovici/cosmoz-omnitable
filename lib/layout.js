const finite = num => Number.isFinite(num) ? num : 0;

// eslint-disable-next-line max-statements
export const layout = (columns, container) => {
	const result = [];
	let [basisSum, lots] = columns.reduce(
			([basisSum, lots], [basis, , grow]) => [
				basisSum + basis,
				lots + grow
			],
			[0, 0]
		),
		freeRealEstate = container - basisSum,
		lotSize = finite(freeRealEstate / lots),
		droppedBasis = 0,
		droppedContainerWidth = 0,
		droppedLots = 0;

	// first pass: apply and drop lots with minWidth
	for (let i = 0; i < columns.length; i++) {
		const [basis, minWidth, grow] = columns[i],
			adjustment = freeRealEstate >= 0
				? lotSize * grow
				: basis * freeRealEstate / basisSum;

		if (minWidth < basis + adjustment) {
			continue;
		}

		droppedBasis += basis;
		droppedContainerWidth += minWidth;
		droppedLots += grow;
		result[i] = minWidth;
	}

	basisSum -= droppedBasis;
	freeRealEstate = container - droppedContainerWidth - basisSum;
	lots -= droppedLots;
	lotSize = finite(freeRealEstate / lots);

	// second pass: distribute the remaining space
	for (let i = 0; i < columns.length; i++) {
		if (result[i] != null) {
			continue;
		}

		const [basis, , grow] = columns[i],
			adjustment = freeRealEstate >= 0
				? lotSize * grow
				: basis * freeRealEstate / basisSum;
		result[i] = basis + adjustment;
	}

	return result;
};
