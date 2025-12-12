import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useLayoutEffect, useMemo } from '@pionjs/pion';
import { html } from 'lit-html';
import './cosmoz-grouped-list-row';
import { useCollapsibleItems } from './use-collapsible-items';
import { useSelectedItems } from './use-selected-items';
import {
	byReference,
	isExpanded,
	isFolded,
	prepareData,
	GroupItem,
} from './utils';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
import type { DirectiveResult } from 'lit/directive.js';
import type { Item as BaseItem } from '../lib/types';
import { indexSymbol } from '../lib/utils';

export interface Item extends BaseItem {
	[indexSymbol]: number;
}

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

export type RenderItemFunction = (
	item: Item,
	index: number,
	params: RenderItemParams,
) => unknown;

export type RenderGroupFunction = (
	item: GroupItem<Item>,
	index: number,
	params: RenderGroupParams,
) => unknown;

export interface UseCosmozGroupedListHost extends HTMLElement {
	data: (Item | GroupItem<Item>)[];
	renderItem: RenderItemFunction;
	renderGroup: RenderGroupFunction;
	displayEmptyGroups: boolean;
	compareItemsFn?: <T>(a: T, b: T) => boolean;
	style: CSSStyleDeclaration;
}

const styles: Record<string, Partial<CSSStyleDeclaration>> = {
	host: { position: 'relative', display: 'flex', flexDirection: 'column' },
};

const useCosmozGroupedList = (host: UseCosmozGroupedListHost) => {
	const {
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
			[data, displayEmptyGroups, signal],
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
		} = useSelectedItems({ initial: [], compareItemsFn, data, flatData });

	const renderRow = useCallback(
		(item: Item | GroupItem<Item>, index: number) => {
			return Array.isArray((item as GroupItem<Item>).items)
				? renderGroup(item as GroupItem<Item>, index, {
						selected: isGroupSelected(item as GroupItem<Item>),
						folded: isFolded(item as Item, state),
						toggleSelect: (selected?: boolean) =>
							toggleSelect(
								item,
								typeof selected === 'boolean' ? selected : undefined,
							),
						toggleFold: () => toggleFold(item as Item),
					})
				: renderItem(item as Item, index, {
						selected: isItemSelected(item),
						expanded: isExpanded(item as Item, state),
						toggleSelect: (selected?: boolean) =>
							toggleSelect(
								item,
								typeof selected === 'boolean' ? selected : undefined,
							),
						toggleCollapse: () => toggleCollapse(item as Item),
					});
		},
		[renderItem, renderGroup, selectedItems, toggleSelect, signal],
	);

	useLayoutEffect(() => {
		Object.assign(host.style, styles.host);
	}, []);

	useNotifyProperty('selectedItems', selectedItems);

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

	return { renderRow, flatData };
};

const renderCosmozGroupedList = ({
	renderRow,
	flatData,
}: {
	renderRow: (
		item: Item | GroupItem<Item>,
		index: number,
	) => unknown | undefined;
	flatData: (Item | GroupItem<Item>)[] | undefined;
}): DirectiveResult => {
	return virtualize({
		items: flatData,
		renderItem: (item: Item | GroupItem<Item>, index: number) =>
			html`<cosmoz-grouped-list-row
				.item=${item}
				.index=${index}
				.renderFn=${renderRow}
			></cosmoz-grouped-list-row>`,
	});
};

export { renderCosmozGroupedList, useCosmozGroupedList };
