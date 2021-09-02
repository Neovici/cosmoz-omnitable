const finite = num => Number.isFinite(num) ? num : 0;
export const
	FORCE_FIT = true,
	// eslint-disable-next-line max-lines-per-function,  max-statements
	layout = (_columns, container, forceFit) => {
		const result = [];
		let columns = _columns;

		if (forceFit) {
			columns = _columns.map((c, index) => index === 0 ? { ...c, grow: 1 } : c);
		}

		// eslint-disable-next-line one-var
		let [basisSum, lots] = columns.reduce(
				([basisSum, lots], { basis, grow }) => [
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

		// first pass: apply and drop lots with minWidth or grow 0
		for (let i = 0; i < columns.length; i++) {
			const { basis, minWidth, grow } = columns[i],
				adjustment = freeRealEstate >= 0
					? lotSize * grow
					: basis * freeRealEstate / basisSum;

			if (minWidth > basis + adjustment) {
				droppedBasis += basis;
				droppedContainerWidth += minWidth;
				droppedLots += grow;
				result[i] = minWidth;
				continue;
			}

			if (grow === 0) {
				droppedBasis += basis;
				droppedContainerWidth += basis;
				result[i] = basis;
				continue;
			}
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

			const { basis, grow } = columns[i],
				adjustment = freeRealEstate >= 0
					? lotSize * grow
					: basis * freeRealEstate / basisSum;

			result[i] = basis + adjustment;
		}

		return result;
	};
