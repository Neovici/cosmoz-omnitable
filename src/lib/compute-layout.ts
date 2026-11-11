import { ColumnConfig, ColumnConfigInput, layout } from './layout';
import { findLastIndex } from './utils';

type ItemName = ColumnConfigInput['name'];
interface HideRule {
	name: string;
	kind: 'hide';
}
interface WidthRule {
	name: string;
	kind: 'width';
	width: number;
	lastVisible: boolean;
}
// One rule per column config entry, in config order. The trailing resize-nub
// hide rule (last visible column) is not part of this list.
export type LayoutRule = HideRule | WidthRule;

export const toLayoutRules = (
	layout: (number | undefined)[],
	config: ColumnConfigInput[],
): LayoutRule[] => {
	const lastVisibleIndex = findLastIndex(
		layout,
		(width) => width != null && width > 0,
	);

	let cumulative = 0,
		offset = 0;

	return config.map((item, index) => {
		const width = layout[index];

		// Hidden columns
		if (width == null || width === 0) {
			return { name: item.name, kind: 'hide' };
		}

		cumulative += width;
		const nextOffset = Math.round(cumulative),
			cellWidth = nextOffset - offset;
		offset = nextOffset;

		return {
			name: item.name,
			kind: 'width',
			width: cellWidth,
			lastVisible: index === lastVisibleIndex,
		};
	});
};

const cellCss = (rule: WidthRule) =>
	`.cell[name="${rule.name}"]{width: ${rule.width}px;padding: 0 min(3px, ${rule.width / 2}px)}`;

const hideNubCss = (name: ItemName) =>
	`cosmoz-omnitable-resize-nub[name="${name}"]{display:none}`;

const hideColumnCss = (name: ItemName) =>
	`cosmoz-omnitable-resize-nub[name="${name}"], .cell[name="${name}"]{display:none}`;

const _toCss = (rules: LayoutRule[]): string => {
	const parts = rules.map((rule) => {
		if (rule.kind === 'hide') {
			return hideColumnCss(rule.name);
		}
		const css = cellCss(rule);
		// Last visible column, show cell but hide its resize nub
		return rule.lastVisible ? `${css}\n${hideNubCss(rule.name)}` : css;
	});
	return parts.join('\n');
};

export const computeLayout = (
	_columnConfigs: ColumnConfig[],
	canvasWidth: number,
	numColumns: number,
): (number | undefined)[] => {
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
};

export const toCss = (
	layout: (number | undefined)[],
	config: ColumnConfigInput[],
): string =>
	layout.length === 0
		? '.cell {display: none;}'
		: _toCss(toLayoutRules(layout, config));
