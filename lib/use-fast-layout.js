/* eslint-disable object-curly-newline, object-property-newline */
import {
	html, useEffect, useMemo, useState
} from 'haunted';
import { layout } from './layout';

const
	computeLayout = (_columnConfigs, canvasWidth, numColumns) => {
		const columnConfigs = _columnConfigs.map(({ hidden, ...config }) =>
				hidden ? { ...config, basis: 0, minWidth: 0, grow: 0 } : config
			),
			totalWidths = columnConfigs.reduce((sum, { basis }) => sum + basis, 0);

		if (columnConfigs.length > 1 && totalWidths > canvasWidth) {
			// drop a column
			return computeLayout(columnConfigs.slice(1), canvasWidth, numColumns);
		}

		const widths = layout(columnConfigs, Math.max(canvasWidth, totalWidths));

		return widths.reduce((sorted, width, i) => {
			sorted[columnConfigs[i].index] = width;
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
		: html`<style>${ _toCss(layout) }</style>`,
	useTrackSize = (host, setCanvasWidth) => useEffect(() => {
		const
			onResize = ([entry]) => requestAnimationFrame(() =>
				setCanvasWidth(entry.contentRect?.width - 20/* scrollbar width */ - 44/* checkbox width */ - 24/* expand button width */)),
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);

export const useFastLayout = host => {
	const
		{
			columns, groupOnColumn
		} = host,
		[canvasWidth, setCanvasWidth] = useState(0),

		columnLayout = useMemo(() => {
			if (!Array.isArray(columns) || canvasWidth == null) {
				return [];
			}

			const columnConfigs = columns
				.map(column => ({
					basis: parseInt(column.width, 10),
					minWidth: parseInt(column.minWidth, 10),
					grow: parseInt(column.flex, 10),
					index: column.columnIndex,
					priority: column.priority,
					hidden: column === groupOnColumn
				}))
				.sort(({ index: aIndex, priority: aPriority }, { index: bIndex, priority: bPriority }) =>
					aPriority === bPriority
						? bIndex - aIndex
						: aPriority - bPriority);

			return computeLayout(columnConfigs, canvasWidth, columnConfigs.length);
		}, [columns, canvasWidth, groupOnColumn]),

		layoutCss = useMemo(() => toCss(columnLayout), [columnLayout]),

		disabledColumns = useMemo(() =>	Array.isArray(columns)
			? columns.reduce((acc, column) => columnLayout[column.columnIndex] != null || column === groupOnColumn ? acc : [...acc, column], [])
			: []
		,	[columns, columnLayout]);

	useTrackSize(host, setCanvasWidth);

	return {
		layoutCss,
		disabledColumns
	};
};
