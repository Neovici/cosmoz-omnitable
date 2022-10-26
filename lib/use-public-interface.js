/* eslint-disable max-lines-per-function */
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useEffect } from 'haunted';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

export const usePublicInterface = ({ host, visibleData, ...api }) => {
	useImperativeApi(api, Object.values(api));

	const removeItems = (items) => {
			const removedItems = [];

			for (let i = items.length - 1; i >= 0; i -= 1) {
				const removed = host.removeItem(items[i]);
				if (removed != null) {
					removedItems.push(removed);
				}
			}
			return removedItems;
		},
		/**
		 * Helper method to remove an item from `data`.
		 * @param	 {Object} item Item to remove
		 * @return {Object} item removed
		 */
		removeItem = (item) => {
			const index = host.data.indexOf(item);

			if (index < 0) {
				return null;
			}

			const removed = host.data.splice(index, 1);
			host.data = host.data.slice();
			if (Array.isArray(removed) && removed.length > 0) {
				return removed[0];
			}
		},
		replaceItem = (oldItem, newItem) => {
			const itemIndex = host.data.indexOf(oldItem);
			if (itemIndex > -1) {
				return host.replaceItemAtIndex(itemIndex, newItem);
			}
		},
		replaceItemAtIndex = (index, newItem) => {
			host.data.splice(index, 1, newItem);
			host.data = host.data.slice();
		},
		selectItem = (item) => {
			host.shadowRoot.querySelector('#groupedList').select(item);
		},
		selectAll = () => {
			host.shadowRoot.querySelector('#groupedList').selectAll();
		},
		deselectAll = () => {
			host.shadowRoot.querySelector('#groupedList').deselectAll();
		},
		deselectItem = (item) => {
			host.shadowRoot.querySelector('#groupedList').deselect(item);
		},
		isItemSelected = (item) => {
			return host.shadowRoot.querySelector('#groupedList').isItemSelected(item);
		},
		{ setFilterState } = api;

	useEffect(() => {
		const handler = (ev) =>
			setFilterState(ev.detail.name, (state) => ({
				...state,
				...ev.detail.state,
			}));
		host.addEventListener('legacy-filter-changed', handler);
		return () => host.removeEventListener('legacy-filter-changed', handler);
	}, []);

	useNotifyProperty('visibleData', visibleData);
	useNotifyProperty(
		'sortedFilteredGroupedItems',
		api.sortedFilteredGroupedItems
	);
	useNotifyProperty('selectedItems', api.selectedItems);
	useNotifyProperty('sortOn', api.sortOn)
	useNotifyProperty('descending', api.descending)

	useImperativeApi(
		{
			removeItems,
			removeItem,
			replaceItem,
			replaceItemAtIndex,
			selectItem,
			selectAll,
			deselectItem,
			deselectAll,
			isItemSelected,
		},
		[
			removeItems,
			removeItem,
			replaceItem,
			replaceItemAtIndex,
			selectItem,
			selectAll,
			deselectItem,
			deselectAll,
			isItemSelected,
		]
	);
};
