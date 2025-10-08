export interface ColumnConfig {
	flex: number;
	index: number;
	minWidth: number;
	width: number;
	priority: number;
	name: string;
	title: string;
	hidden?: boolean;
}

type Columns = ColumnConfig[];

const finite = (num: number) => (Number.isFinite(num) ? num : 0);
export const // eslint-disable-next-line max-statements
	layout = (columns: Columns, container: number) => {
		const result = [];

		let [widthSum, lots] = columns.reduce(
				([widthSum, lots], { width, flex }) => [widthSum + width, lots + flex],
				[0, 0],
			),
			freeRealEstate = container - widthSum,
			lotSize = finite(freeRealEstate / lots),
			droppedWidth = 0,
			droppedContainerWidth = 0,
			droppedLots = 0;

		// first pass: apply and drop lots with minWidth or flex 0
		for (let i = 0; i < columns.length; i++) {
			const { width, minWidth, flex } = columns[i],
				adjustment =
					freeRealEstate >= 0
						? lotSize * flex
						: (width * freeRealEstate) / widthSum;

			if (minWidth > width + adjustment) {
				droppedWidth += width;
				droppedContainerWidth += minWidth;
				droppedLots += flex;
				result[i] = minWidth;
				continue;
			}

			if (flex === 0) {
				droppedWidth += width;
				droppedContainerWidth += width;
				result[i] = width;
				continue;
			}
		}

		widthSum -= droppedWidth;
		freeRealEstate = container - droppedContainerWidth - widthSum;
		lots -= droppedLots;
		lotSize = finite(freeRealEstate / lots);

		// second pass: distribute the remaining space
		for (let i = 0; i < columns.length; i++) {
			if (result[i] != null) {
				continue;
			}

			const { width, flex } = columns[i],
				adjustment =
					freeRealEstate >= 0
						? lotSize * flex
						: (width * freeRealEstate) / widthSum;

			result[i] = width + adjustment;
		}

		return result;
	};
