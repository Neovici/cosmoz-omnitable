import { invoke } from '@neovici/cosmoz-utils/function';
import { useCallback, useEffect, useMemo } from '@pionjs/pion';
import type { GroupItem } from '../grouped-list/utils';
import { genericSorter } from './generic-sorter';
import type { Item } from './types';
import { columnSymbol, type NormalizedColumn } from './use-dom-columns';
import { useHashState } from './use-hash-state';
import { indexSymbol } from './utils';

const sortBy =
		<T>(valueFn: (item: T) => unknown, descending: boolean | undefined) =>
		(a: T, b: T) =>
			genericSorter(valueFn(a), valueFn(b)) * (descending ? -1 : 1),
	kebab = (input: string) =>
		input.replace(/([a-z0-9])([A-Z])/gu, '$1-$2').toLowerCase(),
	notifyChanges = (
		column: NormalizedColumn | undefined,
		changes: Record<string, unknown> | undefined,
	) => {
		if (!column || !changes) {
			return;
		}

		Object.entries(changes).forEach(([key, value]) => {
			const domColumn = column[columnSymbol];
			domColumn.__ownChange = true;
			Object.assign(domColumn, { [key]: value });
			domColumn.__ownChange = false;
			domColumn.dispatchEvent(
				new CustomEvent(`${kebab(key)}-changed`, {
					bubbles: true,
					detail: { value },
				}),
			);
		});
	},
	assignIndex = (item: Item, index: number) =>
		Object.assign(item, { [indexSymbol]: index }),
	unparsed = Symbol('unparsed');

interface FilterState {
	filter?: unknown;
	[unparsed]?: string;
}

interface GroupedResult {
	id: unknown;
	name: unknown;
	items: Item[];
}

interface UseProcessedItemsParams {
	data?: Item[];
	columns: NormalizedColumn[];
	hashParam?: string | null;
	sortAndGroupOptions: {
		groupOnColumn?: NormalizedColumn;
		groupOnDescending?: boolean;
		sortOnColumn?: NormalizedColumn;
		descending?: boolean;
		[key: string]: unknown;
	};
	noLocalSort?: boolean;
	noLocalFilter?: boolean;
	[key: string]: unknown;
}

export const useProcessedItems = ({
	data,
	columns,
	hashParam,
	sortAndGroupOptions,
	noLocalSort,
	noLocalFilter,
}: UseProcessedItemsParams) => {
	const { groupOnColumn, groupOnDescending, sortOnColumn, descending } =
			sortAndGroupOptions,
		write = useCallback(
			([filter, value]: [string, FilterState]): [string, unknown] => {
				const column = columns.find(({ name }) => name === filter);
				if (column == null) {
					return [filter, undefined];
				}
				return [
					filter,
					value.filter && column.serializeFilter!(column, value.filter),
				];
			},
			[columns],
		),
		read = useCallback(
			([filter, value]: [string, string]): [string, FilterState] => {
				const column = columns.find(({ name }) => name === filter);
				if (column == null) {
					return [filter, { [unparsed]: value }];
				}

				const state = { filter: column.deserializeFilter!(column, value) };
				notifyChanges(column, state);
				return [filter, state];
			},
			[columns],
		),
		[filters, setFilters] = useHashState<Record<string, FilterState>>(
			{},
			hashParam,
			{
				multi: true,
				suffix: '-filter--',
				write,
				read,
			},
		),
		// TODO: drop extra info from state
		setFilterState = useCallback(
			(
				name: string,
				state:
					| Record<string, unknown>
					| ((prev?: FilterState) => Record<string, unknown>),
			) =>
				setFilters((filters) => {
					const newState = invoke(state, filters[name]);

					notifyChanges(
						columns.find((c) => c.name === name),
						newState,
					);

					return { ...filters, [name]: { ...filters[name], ...newState } };
				}),
			[columns, setFilters],
		),
		filterValues = useMemo(
			() => Object.values(filters).map((f) => f.filter),
			[filters],
		),
		filterFunctions = useMemo(() => {
			return Object.fromEntries(
				columns
					.map((col) => [
						col.name,
						!col.noLocalFilter &&
							col.getFilterFn!(col, filters[col.name]?.filter),
					])
					.filter(
						(entry): entry is [string, (item: Item) => boolean] => !!entry[1],
					),
			);
		}, [columns, ...filterValues]),
		filteredItems = useMemo(() => {
			if (!Array.isArray(data) || data.length === 0) {
				return [];
			}

			if (Object.entries(filterFunctions).length === 0 || noLocalFilter) {
				return data.slice();
			}

			return data.filter((item) =>
				Object.values(filterFunctions).every((filterFn) => filterFn(item)),
			);
		}, [data, filterFunctions, noLocalFilter]),
		// todo: extract function

		processedItems = useMemo<(Item | GroupItem<Item>)[]>(() => {
			if (
				!noLocalSort &&
				!groupOnColumn &&
				sortOnColumn != null &&
				sortOnColumn.sortOn != null
			) {
				return filteredItems
					.slice()
					.sort(
						sortBy(
							(a) =>
								sortOnColumn.getComparableValue!(
									{ ...sortOnColumn, valuePath: sortOnColumn.sortOn },
									a,
								),
							descending,
						),
					);
			}

			if (groupOnColumn != null && groupOnColumn.groupOn != null) {
				const groupedResults = filteredItems.reduce<GroupedResult[]>(
					(acc, item) => {
						const gval = groupOnColumn.getComparableValue!(
							{ ...groupOnColumn, valuePath: groupOnColumn.groupOn },
							item,
						);

						if (gval === undefined) {
							return acc;
						}

						let group = acc.find((g) => g.id === gval);

						if (!group) {
							group = { id: gval, name: gval, items: [item] };
							return [...acc, group];
						}

						group.items.push(item);
						return acc;
					},
					[],
				);

				groupedResults.sort(
					sortBy(
						(a) =>
							groupOnColumn.getComparableValue!(
								{ ...groupOnColumn, valuePath: groupOnColumn.groupOn },
								a.items[0],
							),
						groupOnDescending,
					),
				);

				if (!sortOnColumn || noLocalSort) {
					return groupedResults;
				}

				return groupedResults
					.filter((group) => Array.isArray(group.items))
					.map((group) => {
						group.items.sort(
							sortBy(
								(a) =>
									sortOnColumn.getComparableValue!(
										{ ...sortOnColumn, valuePath: sortOnColumn.sortOn },
										a,
									),
								descending,
							),
						);
						return group;
					});
			}

			return filteredItems;
		}, [
			filteredItems,
			groupOnColumn,
			groupOnDescending,
			sortOnColumn,
			descending,
			noLocalSort,
		]),
		visibleData = useMemo(() => {
			let index = 0,
				groupIndex = 0;
			const result: Item[] = [];
			processedItems.forEach((item) => {
				if ('items' in item && Array.isArray(item.items)) {
					assignIndex(item, groupIndex++);
					item.items.forEach((groupItem) => {
						assignIndex(groupItem, index++);
						result.push(groupItem);
					});
					return;
				}

				assignIndex(item, index++);
				return result.push(item);
			}, []);
			return result;
		}, [processedItems]);

	// parse un-parsed filter values
	// filters can be left un-parsed if a column was not defined when the URL is read
	useEffect(() => {
		setFilters((filters) => {
			const hasUnparsedFilters = Object.values(filters).some(
				(value) => value[unparsed] != null,
			);

			if (!hasUnparsedFilters) {
				return filters;
			}

			return Object.fromEntries(
				Object.entries(filters).map(([name, value]) => {
					const unparsedValue = value[unparsed];
					if (unparsedValue == null) {
						return [name, value];
					}

					return read([name, unparsedValue]);
				}),
			);
		});
	}, [read]);

	return {
		processedItems,
		visibleData,
		filters,
		filterFunctions,
		setFilterState,
	};
};
