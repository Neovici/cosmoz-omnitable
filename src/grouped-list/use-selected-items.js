import { useCallback, useEffect, useState } from '@pionjs/pion';
import { isGroup } from './utils';

export const useSelectedItems = ({
	initial,
	compareItemsFn,
	data,
	flatData,
}) => {
	const [selectedItems, setSelectedItems] = useState(initial),
		[lastSelection, setLastSelection] = useState(),
		/**
		 * Check if item is selected.
		 * @param {object} item Item.
		 * @returns {boolean} Whether item is selected.
		 */
		isItemSelected = useCallback(
			(item) => selectedItems.includes(item),
			[selectedItems],
		),
		/**
		 * Check if group is selected.
		 * @param {object} group Group.
		 * @returns {boolean} Whether group is selected.
		 */
		isGroupSelected = useCallback(
			(group) => group?.items?.every(isItemSelected),
			[isItemSelected],
		),
		/**
		 * Check if item.group is selected.
		 * @param {object} item Item.
		 * @returns {boolean} Whether item is selected.
		 */
		isSelected = useCallback(
			(item) => isItemSelected(item) || isGroupSelected(item),
			[isItemSelected, isGroupSelected],
		),
		/**
		 * Add an item/group to the list of selected items.
		 * @param {object} item Item to select.
		 * @returns {void}
		 */
		select = useCallback((item) => {
			const items = item.items ?? [item];
			setSelectedItems((selection) => [
				...selection,
				...items.filter((i) => !selection.includes(i)),
			]);
			setLastSelection(item);
		}, []),
		/**
		 * Removes an item/group from the list of selected items.
		 * @param {object} item Item to select.
		 * @returns {void}
		 */
		deselect = useCallback((item) => {
			const items = item.items ?? [item];
			setSelectedItems((selection) =>
				selection.filter((i) => !items.includes(i)),
			);
			setLastSelection(item);
		}, []),
		selectOnly = useCallback((item) => {
			setSelectedItems(item.items?.slice() || [item]);
			setLastSelection(item);
		}, []),
		/**
		 * Select all items.
		 * @returns {void}
		 */
		selectAll = useCallback(() => {
			setSelectedItems(data.flatMap((item) => item.items || item));
			setLastSelection(undefined);
		}, [data]),
		/**
		 * Deselect all selected items.
		 * @returns {void}
		 */
		deselectAll = useCallback(() => {
			setSelectedItems([]);
			setLastSelection(undefined);
		}, []),
		/**
		 * Toggles the selection of an item/group.
		 * @param {object} item Item to select.
		 * @param {boolean=} selected Select or deselect, fallback to toggling.
		 * @returns {void}
		 */
		toggleSelect = useCallback(
			(item, selected = !isSelected(item)) =>
				selected ? select(item) : deselect(item),
			[isSelected],
		),
		toggleSelectTo = useCallback(
			(item, selected) => {
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
			setSelectedItems((selectedItems) =>
				selectedItems.length > 0
					? flatData.filter((i) =>
							selectedItems.find((item) => compareItemsFn(i, item)),
						)
					: selectedItems,
			),
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
