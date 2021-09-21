import { html } from 'haunted';
import { FORCE_FIT, layout } from './layout';

const
	_toCss = (layout, config) =>
		config
			.map((item, index) => {
				const width = layout[index];
				return width == null || width === 0
					? `cosmoz-omnitable-resize-nub[name="${ item.name }"], .cell[name="${ item.name }"]{display:none}`
					: `.cell[name="${ item.name }"]{width: ${ width }px;padding: 0 min(3px, ${ width / 2 }px)}`;
			})
			.join('\n');

export const
	computeLayout = (_columnConfigs, canvasWidth, numColumns) => {
		const columnConfigs = _columnConfigs.filter(c => !c.hidden),
			totalWidths = columnConfigs.reduce((sum, { width }) => sum + width, 0);

		if (columnConfigs.length > 1 && totalWidths > canvasWidth) {
			// drop a column
			return computeLayout(columnConfigs.slice(1), canvasWidth, numColumns);
		}

		const widths = layout(columnConfigs, canvasWidth, FORCE_FIT);

		return widths.reduce((sorted, width, i) => {
			sorted[columnConfigs[i].index] = width;
			return sorted;
		}, new Array(numColumns).fill(undefined));
	},
	toCss = (layout, config) =>
		layout.length === 0
			? html`<style>.cell {display: none;}</style>`
			: html`<style>${ _toCss(layout, config) }</style>`;
