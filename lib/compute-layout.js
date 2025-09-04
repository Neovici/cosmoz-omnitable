import { layout } from './layout';
import { findLastIndex } from './utils';

const _toCss = (layout, config) => {
	const lastVisibleIndex = findLastIndex(layout,
			(width) => width != null && width > 0,
		),
		generateCellCSS = (itemName, width) =>
			`.cell[name="${itemName}"], cosmoz-omnitable-skeleton::part(cell-${itemName}){width: ${Math.floor(
				width,
			)}px;padding: 0 min(3px, ${width / 2}px)}`,
		hideResizeNub = (itemName) =>
			`cosmoz-omnitable-resize-nub[name="${itemName}"]{display:none}`,
		hideColumn = (itemName) =>
			`cosmoz-omnitable-resize-nub[name="${itemName}"], .cell[name="${itemName}"]{display:none}`;

	return config
		.map((item, index) => {
			const width = layout[index];

			// Hidden columns
			if (width == null || width === 0) {
				return hideColumn(item.name);
			}

			// All visible columns
			const cellCSS = generateCellCSS(item.name, width);

			// Last visible column, show cell but hide its resize nub
			if (index === lastVisibleIndex) {
				return `${cellCSS}\n${hideResizeNub(item.name)}`;
			}

			// Other visible columns just show the cell
			return cellCSS;
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
