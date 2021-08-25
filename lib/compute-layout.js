import { html } from 'haunted';
import { FORCE_FIT, layout } from './layout';

const
	_toCss = layout =>
		layout
			.map((width, index) =>
				width == null || width === 0
					? `cosmoz-omnitable-resize-nub[index="${ index }"], .cell[index="${ index }"]{display:none}`
					: `.cell[index="${ index }"]{width: ${ width }px;padding: 0 min(3px, ${ width / 2 }px)}`
			)
			.join('\n');

export const
	computeLayout = (_columnConfigs, canvasWidth, numColumns) => {
		const columnConfigs = _columnConfigs.map(({ hidden, ...config }) =>
				hidden ? { ...config, basis: 0, minWidth: 0, grow: 0 } : config
			),
			totalWidths = columnConfigs.reduce((sum, { basis }) => sum + basis, 0);

		if (columnConfigs.length > 1 && totalWidths > canvasWidth) {
			// drop a column
			return computeLayout(columnConfigs.slice(1), canvasWidth, numColumns);
		}

		const widths = layout(columnConfigs, Math.max(canvasWidth, totalWidths), FORCE_FIT);

		return widths.reduce((sorted, width, i) => {
			sorted[columnConfigs[i].index] = width;
			return sorted;
		}, new Array(numColumns).fill(undefined));
	},
	toCss = layout =>
		layout.length === 0
			? html`<style>.cell {display: none;}</style>`
			: html`<style>${ _toCss(layout) }</style>`;
