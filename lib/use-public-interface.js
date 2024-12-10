/* eslint-disable max-lines-per-function */
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useEffect, useMemo } from '@pionjs/pion';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

const mkNapi = (host) => {
	const /**
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
		replaceItemAtIndex = (index, newItem) => {
			host.data.splice(index, 1, newItem);
			host.data = host.data.slice();
		};

	return {
		removeItem,
		removeItems(items) {
			const removedItems = [];

			for (let i = items.length - 1; i >= 0; i -= 1) {
				const removed = host.removeItem(items[i]);
				if (removed != null) {
					removedItems.push(removed);
				}
			}
			return removedItems;
		},

		replaceItemAtIndex,
		replaceItem(oldItem, newItem) {
			const itemIndex = host.data.indexOf(oldItem);
			if (itemIndex > -1) {
				return replaceItemAtIndex(itemIndex, newItem);
			}
		},

		selectItem(item) {
			host.shadowRoot.querySelector('#groupedList').select(item);
		},
		selectAll() {
			host.shadowRoot.querySelector('#groupedList').selectAll();
		},
		deselectAll() {
			host.shadowRoot.querySelector('#groupedList').deselectAll();
		},
		deselectItem(item) {
			host.shadowRoot.querySelector('#groupedList').deselect(item);
		},
		isItemSelected(item) {
			return host.shadowRoot.querySelector('#groupedList').isItemSelected(item);
		},
	};
};

export const usePublicInterface = ({ host, visibleData, filters, ...api }) => {
	const { setFilterState } = api,
		napi = useMemo(() => mkNapi(host), []);

	useImperativeApi(api, Object.values(api));
	useImperativeApi(napi, Object.values(napi));

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
		api.sortedFilteredGroupedItems,
	);
	useNotifyProperty('selectedItems', api.selectedItems);
	useNotifyProperty('sortOn', api.sortOn);
	useNotifyProperty('descending', api.descending);
	useNotifyProperty('isMini', api.isMini);

	const filterValues = useMemo(
		() =>
			Object.fromEntries(
				Object.entries(filters)
					.filter(([, { filter }]) => filter !== undefined)
					.map(([key, { filter }]) => [key, filter]),
			),
		[filters],
	);

	useNotifyProperty('filters', filterValues, Object.values(filterValues));
};
