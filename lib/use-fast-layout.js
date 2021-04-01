/* eslint-disable object-curly-newline, object-property-newline */
import {
	html, useEffect, useMemo, useState
} from 'haunted';
import { nothing } from 'lit-html';
import { layout } from './layout';

const
	computeLayout = (columnConfigs, canvasWidth, numColumns) => {
		const totalWidths = columnConfigs.reduce((sum, [totalWidths]) => sum + totalWidths, 0);

		if (columnConfigs.length > 1 && totalWidths > canvasWidth) {
			// drop a column
			return computeLayout(columnConfigs.slice(1), canvasWidth, numColumns);
		}

		const widths = layout(columnConfigs, Math.max(canvasWidth, totalWidths));

		return widths.reduce((sorted, width, index) => {
			sorted[columnConfigs[index][3]] = width;
			return sorted;
		}, new Array(numColumns).fill(undefined));
	},
	_toCss = layout => layout
		.map((width, index) => width == null
			? `.cell[index="${ index }"]{display:none}`
			: `.cell[index="${ index }"]{width: ${ width }px}`
		)
		.join('\n'),
	toCss = layout => layout.length === 0
		? html`<style>.cell{display:none;}</style>`
		: html`<style>${ _toCss(layout) }</style>`;

export const useFastLayout = host => {
	const
		{
			columns, groupOnColumn, fastLayout
		} = host,
		[canvasWidth, setCanvasWidth] = useState(0),

		columnLayout = useMemo(() => {
			if (!fastLayout || !Array.isArray(columns) || canvasWidth == null) {
				return [];
			}

			const columnConfigs = columns
				.filter(column => column !== groupOnColumn)
				.map(column => [parseInt(column.width, 10), parseInt(column.minWidth, 10), parseInt(column.flex, 10), column.columnIndex, column.priority])
				.sort(([, , , aIndex, aPriority], [, , , bIndex, bPriority]) => aPriority === bPriority
					? bIndex - aIndex
					: aPriority - bPriority);

			return computeLayout(columnConfigs, canvasWidth, columnConfigs.length);
		}, [columns, canvasWidth, groupOnColumn, fastLayout]),

		layoutCss = useMemo(() => fastLayout ? toCss(columnLayout) : nothing, [columnLayout, fastLayout]);

	// track omnitable size
	useEffect(() => {
		const
			onResize = ([entry]) => setCanvasWidth(entry.contentRect?.width - 20/* scrollbar width */ - 44/* checkbox width */ - 24/* expand button width */),
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);

	// determine disabled columns
	useEffect(() => {
		if (!fastLayout || !Array.isArray(columns)) {
			return;
		}

		host.disabledColumns = columns.reduce((acc, column) => columnLayout[column.columnIndex] != null ? acc : [...acc, column], []);
	}, [columns, columnLayout]);

	return layoutCss;
};
