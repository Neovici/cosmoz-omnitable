import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useEffect, useMemo, useProperty } from '@pionjs/pion';

import type { Item } from './types';
import { type TSelection } from './utils';

interface GroupedListEl extends HTMLElement {
	select(item: Item): void;
	selectAll(): void;
	deselectAll(): void;
	deselect(item: Item): void;
	isItemSelected(item: Item): boolean;
}

interface UsePublicInterfaceHost extends HTMLElement {
	data: Item[];
}

const mkNapi = (host: UsePublicInterfaceHost) => {
	const /**
		 * Helper method to remove an item from `data`.
		 * @param	 {Object} item Item to remove
		 * @return {Object} item removed
		 */
		removeItem = (item: Item): Item | null | undefined => {
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
		replaceItemAtIndex = (index: number, newItem: Item): void => {
			host.data.splice(index, 1, newItem);
			host.data = host.data.slice();
		};

	return {
		removeItem,
		removeItems(items: Item[]): Item[] {
			const removedItems: Item[] = [];

			for (let i = items.length - 1; i >= 0; i -= 1) {
				const removed = removeItem(items[i]);
				if (removed != null) {
					removedItems.push(removed);
				}
			}
			return removedItems;
		},

		replaceItemAtIndex,
		replaceItem(oldItem: Item, newItem: Item): void {
			const itemIndex = host.data.indexOf(oldItem);
			if (itemIndex > -1) {
				replaceItemAtIndex(itemIndex, newItem);
			}
		},

		selectItem(item: Item) {
			host
				.shadowRoot!.querySelector<GroupedListEl>('#groupedList')!
				.select(item);
		},
		selectAll() {
			host
				.shadowRoot!.querySelector<GroupedListEl>('#groupedList')!
				.selectAll();
		},
		deselectAll() {
			host
				.shadowRoot!.querySelector<GroupedListEl>('#groupedList')!
				.deselectAll();
		},
		deselectItem(item: Item) {
			host
				.shadowRoot!.querySelector<GroupedListEl>('#groupedList')!
				.deselect(item);
		},
		isItemSelected(item: Item) {
			return host
				.shadowRoot!.querySelector<GroupedListEl>('#groupedList')!
				.isItemSelected(item);
		},
	};
};

type SetFilterState = (
	name: string,
	state: unknown | ((prev: unknown) => unknown),
) => void;

interface UsePublicInterfaceParams {
	host: UsePublicInterfaceHost;
	visibleData: Item[];
	filters: Record<string, { filter?: unknown }>;
	setFilterState: SetFilterState;
	sortedFilteredGroupedItems?: unknown;
	sortOn?: string;
	descending?: boolean;
	isMini?: boolean;
	[key: string]: unknown;
}

export const usePublicInterface = ({
	host,
	visibleData,
	filters,
	...api
}: UsePublicInterfaceParams) => {
	const { setFilterState } = api,
		napi = useMemo(() => mkNapi(host), []);

	const [selectedItems, setSelectedItems] = useProperty<TSelection<Item>>(
		'selectedItems',
		[],
	);

	useImperativeApi(api, Object.values(api));
	useImperativeApi(napi, Object.values(napi));

	useEffect(() => {
		const handler = (ev: Event) => {
			if (!(ev instanceof CustomEvent)) {
				return;
			}
			const detail = ev.detail;
			setFilterState(detail.name, (state: unknown) => ({
				...(typeof state === 'object' && state !== null ? state : {}),
				...detail.state,
			}));
		};
		host.addEventListener('legacy-filter-changed', handler);
		return () => host.removeEventListener('legacy-filter-changed', handler);
	}, []);

	useNotifyProperty('visibleData', visibleData);
	useNotifyProperty(
		'sortedFilteredGroupedItems',
		api.sortedFilteredGroupedItems,
	);
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

	return { selectedItems, setSelectedItems };
};
