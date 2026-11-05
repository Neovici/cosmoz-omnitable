import { FlowLayout } from '@lit-labs/virtualizer/layouts/flow.js';
import { GridLayout } from '@lit-labs/virtualizer/layouts/grid.js';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useCallback, useLayoutEffect, useMemo } from '@pionjs/pion';
import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import type { DirectiveResult } from 'lit/directive.js';
import type { Item } from '../lib/types';
import './cosmoz-grouped-list-row';
import { useCollapsibleItems } from './use-collapsible-items';
import { useSelectedItems } from './use-selected-items';
import {
	byReference,
	GroupItem,
	isExpanded,
	isFolded,
	prepareData,
} from './utils';

export interface RenderItemParams {
	selected: boolean;
	expanded: boolean;
	toggleSelect: (selected?: boolean) => void;
	toggleCollapse: () => void;
}

export interface RenderGroupParams {
	selected: boolean;
	folded: boolean;
	toggleSelect: (selected?: boolean) => void;
	toggleFold: () => void;
}

export interface UseCosmozGroupedListHost extends HTMLElement {
	fixedRowHeight?: number;
	data: (Item | GroupItem<Item>)[];
	renderItem: (item: Item, index: number, params: RenderItemParams) => unknown;
	renderGroup: (
		item: GroupItem<Item>,
		index: number,
		params: RenderGroupParams
	) => unknown;
	displayEmptyGroups: boolean;
	compareItemsFn?: <T>(a: T, b: T) => boolean;
	style: CSSStyleDeclaration;
}

const styles: Record<string, Partial<CSSStyleDeclaration>> = {
	host: { position: 'relative', display: 'flex', flexDirection: 'column' },
};

// Buffer roughly a viewport on each side while retaining variable-height measurement.
class TableFlowLayout extends FlowLayout {
	protected override _overhang = 600;
	get estimatedRowHeight() {
		return this._itemSize.height;
	}
	set estimatedRowHeight(height: number | undefined) {
		if (typeof height === 'number' && Number.isFinite(height) && height > 0) {
			this._itemSize.height = height;
		}
	}
}
class FixedRowLayout extends GridLayout {
	protected override _overhang = 600;
	protected override get _idealSize2() {
		return this._viewDim2;
	}
}

const useCosmozGroupedList = (host: UseCosmozGroupedListHost) => {
	const {
		fixedRowHeight,
		data,
		renderItem,
		renderGroup,
		displayEmptyGroups,
		compareItemsFn = byReference,
	} = host;
	const { toggleFold, toggleCollapse, state, signal } = useCollapsibleItems();
	// TODO: state changes trigger recalculation, which is slow (200ms with 10k items)
	// it only makes sense to do it when a group is folded
	// suggested fix: separate signal for item collapse and group fold
	const flatData = useMemo(
			() => prepareData(data, displayEmptyGroups, state),
			[data, displayEmptyGroups, signal]
		),
		{
			selectedItems,
			isItemSelected,
			isGroupSelected,
			isSelected,
			select,
			deselect,
			selectOnly,
			selectAll,
			deselectAll,
			toggleSelect,
			toggleSelectTo,
		} = useSelectedItems({ compareItemsFn, data, flatData });
	const renderRow = useCallback(
		(item: Item | GroupItem<Item>, index: number) =>
			Array.isArray((item as GroupItem<Item>).items)
				? renderGroup(item as GroupItem<Item>, index, {
						selected: isGroupSelected(item as GroupItem<Item>),
						folded: isFolded(item as Item, state),
						toggleSelect: (selected?: boolean) =>
							toggleSelect(
								item,
								typeof selected === 'boolean' ? selected : undefined
							),
						toggleFold: () => toggleFold(item as Item),
				  })
				: renderItem(item as Item, index, {
						selected: isItemSelected(item as Item),
						expanded: isExpanded(item as Item, state),
						toggleSelect: (selected?: boolean) =>
							toggleSelect(
								item,
								typeof selected === 'boolean' ? selected : undefined
							),
						toggleCollapse: () => toggleCollapse(item as Item),
				  }),
		[renderItem, renderGroup, selectedItems, toggleSelect, signal]
	);

	useLayoutEffect(() => {
		Object.assign(host.style, styles.host);
	}, []);

	const api = {
		toggleFold,
		toggleCollapse,
		isItemSelected,
		isGroupSelected,
		isSelected,
		select,
		deselect,
		selectOnly,
		selectAll,
		deselectAll,
		toggleSelect,
		toggleSelectTo,
	};

	useImperativeApi(api, Object.values(api));

	const rowHeight = useMemo(
		() =>
			typeof fixedRowHeight === 'number' &&
			Number.isFinite(fixedRowHeight) &&
			fixedRowHeight > 0 &&
			flatData?.every(
				(item) =>
					!('items' in item && Array.isArray(item.items)) &&
					!isExpanded(item, state)
			)
				? fixedRowHeight
				: undefined,
		[flatData, signal, fixedRowHeight]
	);
	return { renderRow, flatData, rowHeight, estimatedRowHeight: fixedRowHeight };
};

const renderCosmozGroupedList = ({
	renderRow,
	flatData,
	rowHeight,
	estimatedRowHeight,
}: {
	renderRow: (item: Item | GroupItem<Item>, index: number) => unknown;
	flatData: (Item | GroupItem<Item>)[] | undefined;
	rowHeight?: number;
	estimatedRowHeight?: number;
}): DirectiveResult => {
	// Invalidate on parent updates, including explicit refreshes of mutable items.
	// Scrolling alone reuses bindings for rows that remain mounted.
	const renderEpoch = {};
	const fixedLayout: NonNullable<
		ConstructorParameters<typeof GridLayout>[1]
	> & { type: typeof FixedRowLayout } = {
		type: FixedRowLayout,
		itemSize: { width: '1px', height: `${rowHeight ?? 1}px` },
		flex: { preserve: 'height' },
		gap: '0',
		padding: '0',
	};
	const flowLayout: NonNullable<ConstructorParameters<typeof FlowLayout>[1]> & {
		type: typeof TableFlowLayout;
		estimatedRowHeight?: number;
	} = { type: TableFlowLayout, estimatedRowHeight };
	return virtualize({
		items: flatData,
		layout: rowHeight ? fixedLayout : flowLayout,
		renderItem: (item: Item, index: number) =>
			html`${guard(
				[renderEpoch, item, index],
				() =>
					html`<cosmoz-grouped-list-row
						style=${styleMap({
							height: rowHeight ? `${rowHeight}px` : 'auto',
							width: '100%',
						})}
						.item=${item}
						.index=${index}
						.renderFn=${renderRow}
					></cosmoz-grouped-list-row>`
			)}`,
	});
};
export { renderCosmozGroupedList, useCosmozGroupedList };
