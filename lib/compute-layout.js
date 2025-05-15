import { layout } from './layout';

const _toCss = (layout, config) => {
	const lastVisibleIndex = layout.findLastIndex(
		(width) => width != null && width > 0,
	);

	return config
		.map((item, index) => {
			const width = layout[index];
			// Hidden columns
			if (width == null || width === 0) {
				return `cosmoz-omnitable-resize-nub[name="${item.name}"], .cell[name="${item.name}"]{display:none}`;
			}

			// Last visible column, show the cell but hide its resize nub
			if (index === lastVisibleIndex) {
				return `.cell[name="${item.name}"]{width: ${Math.floor(
					width,
				)}px;padding: 0 min(3px, ${width / 2}px)}
							cosmoz-omnitable-resize-nub[name="${item.name}"]{display:none}`;
			}

			// Other visible columns
			return `.cell[name="${item.name}"]{width: ${Math.floor(
				width,
			)}px;padding: 0 min(3px, ${width / 2}px)}`;
		})
		.join('\n');
};

export const computeLayout = (_columnConfigs, canvasWidth, numColumns) => {
		const columnConfigs = _columnConfigs.filter((c) => !c.hidden),
			totalWidths = columnConfigs.reduce((sum, { width }) => sum + width, 0);

		if (columnConfigs.length > 1 && totalWidths > canvasWidth) {
			// drop a column
			return computeLayout(columnConfigs.slice(1), canvasWidth, numColumns);
		}

		// calculate the index of the last visible column, the one that needs to flex,
		// as the column configs might now be in a different order than displayed
		// due to priority settings
		const lastColumnIndex = columnConfigs.reduce(
			([max, maxIndex], column, index) => [
				Math.max(max, column.index),
				column.index > max ? index : maxIndex,
			],
			[-1, -1],
		)[1];

		// force the last visible column to flex
		if (lastColumnIndex !== -1) {
			columnConfigs[lastColumnIndex].flex = 1;
		}

		const widths = layout(columnConfigs, canvasWidth);

		return widths.reduce((sorted, width, i) => {
			sorted[columnConfigs[i].index] = width;
			return sorted;
		}, new Array(numColumns).fill(undefined));
	},
	toCss = (layout, config) =>
		layout.length === 0 ? '.cell {display: none;}' : _toCss(layout, config);
