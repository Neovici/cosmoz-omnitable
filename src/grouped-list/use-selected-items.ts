import { useCallback, useEffect, useState } from '@pionjs/pion';
import { isGroup, GroupItem } from './utils';
import type { Item } from '../lib/types';
import { All } from '../lib/select-all-symbol';

export type CompareItemsFunction = <T>(a: T, b: T) => boolean;

export interface UseSelectedItemsParams {
	initial: Item[] | typeof All;
	compareItemsFn: CompareItemsFunction;
	data: (Item | GroupItem<Item>)[];
	flatData: (Item | GroupItem<Item>)[] | undefined;
}

export interface UseSelectedItemsResult {
	selectedItems: Item[] | typeof All;
	isItemSelected: (item: Item) => boolean;
	isGroupSelected: (group: GroupItem<Item>) => boolean;
	isSelected: (item: Item | GroupItem<Item>) => boolean;
	select: (item: Item | GroupItem<Item>) => void;
	deselect: (item: Item | GroupItem<Item>) => void;
	selectOnly: (item: Item | GroupItem<Item>) => void;
	selectAll: () => void;
	deselectAll: () => void;
	toggleSelect: (item: Item | GroupItem<Item>, selected?: boolean) => void;
	toggleSelectTo: (item: Item | GroupItem<Item>, selected?: boolean) => void;
}

export const useSelectedItems = ({
	initial,
	compareItemsFn,
	data,
	flatData,
}: UseSelectedItemsParams): UseSelectedItemsResult => {
	const [selectedItems, setSelectedItems] = useState<Item[] | typeof All>(
		initial,
	);
	const [lastSelection, setLastSelection] = useState<Item | GroupItem<Item>>();

	/**
	 * Check if item is selected.
	 */
	const isItemSelected = useCallback(
		(item: Item) =>
			(Array.isArray(selectedItems) && selectedItems.includes(item)) ||
			selectedItems === All,
		[selectedItems],
	);
	/**
	 * Check if group is selected.
	 */
	const isGroupSelected = useCallback(
		(group: GroupItem<Item>) => group?.items?.every(isItemSelected) ?? false,
		[isItemSelected],
	);
	/**
	 * Check if item.group is selected.
	 */
	const isSelected = useCallback(
		(item: Item | GroupItem<Item>) =>
			isItemSelected(item as Item) || isGroupSelected(item as GroupItem<Item>),
		[isItemSelected, isGroupSelected],
	);
	/**
	 * Add an item/group to the list of selected items.
	 */
	const select = useCallback((item: Item | GroupItem<Item>) => {
		const groupItem = item as GroupItem<Item>;
		const items = groupItem.items ?? [item as Item];
		setSelectedItems((selection) => {
			if (selection === All) return selection;
			return [
				...selection,
				...items.filter((i: Item) => !selection.includes(i)),
			];
		});
		setLastSelection(item);
	}, []);
	/**
	 * Removes an item/group from the list of selected items.
	 */
	const deselect = useCallback((item: Item | GroupItem<Item>) => {
		const groupItem = item as GroupItem<Item>;
		const items = groupItem.items ?? [item as Item];
		setSelectedItems((selection) => {
			if (selection === All) return selection;
			return selection.filter((i: Item) => !items.includes(i));
		});
		setLastSelection(item);
	}, []);

	const selectOnly = useCallback((item: Item | GroupItem<Item>) => {
		const groupItem = item as GroupItem<Item>;
		setSelectedItems(groupItem.items?.slice() || [item as Item]);
		setLastSelection(item);
	}, []);
	/**
	 * Select all items.
	 */
	const selectAll = useCallback(() => {
		setSelectedItems(
			data.flatMap((item) => {
				const groupItem = item as GroupItem<Item>;
				return groupItem.items || (item as Item);
			}),
		);
		setLastSelection(undefined);
	}, [data]);
	/**
	 * Deselect all selected items.
	 */
	const deselectAll = useCallback(() => {
		setSelectedItems([]);
		setLastSelection(undefined);
	}, []);
	/**
	 * Toggles the selection of an item/group.
	 */
	const toggleSelect = useCallback(
		(item: Item | GroupItem<Item>, selected = !isSelected(item)) =>
			selected ? select(item) : deselect(item),
		[isSelected],
	);
	const toggleSelectTo = useCallback(
		(item: Item | GroupItem<Item>, selected?: boolean) => {
			if (!flatData) return;

			const last = lastSelection
				? flatData.findIndex((i) => compareItemsFn(i, lastSelection))
				: -1;
			if (last < 0) {
				return toggleSelect(item, selected);
			}
			const [from, to] = [last, flatData.indexOf(item)].sort((a, b) => a - b);
			flatData.slice(from, to + 1).forEach((item, i, items) => {
				if (i > 0 && i < items.length - 1 && isGroup(item)) {
					return;
				}
				toggleSelect(item, selected);
			});
			setLastSelection(item);
		},
		[flatData, compareItemsFn, toggleSelect],
	);

	// keep selected items across data updates
	useEffect(
		() =>
			setSelectedItems((selectedItems) => {
				if (selectedItems === All || selectedItems.length === 0 || !flatData) {
					return selectedItems;
				}
				return flatData.filter((i) =>
					selectedItems.find((item: Item) => compareItemsFn(i, item)),
				) as Item[];
			}),
		[flatData],
	);

	return {
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
	};
};
