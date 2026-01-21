import { invoke } from '@neovici/cosmoz-utils/function';
import { useCallback, useEffect, useMemo } from '@pionjs/pion';
import { genericSorter } from './generic-sorter';
import type { Item } from './types';
import { columnSymbol, NormalizedColumn } from './use-dom-columns';
import { useHashState } from './use-hash-state';
import { indexSymbol } from './utils';

const unparsed = Symbol('unparsed');

interface GroupItem {
	id: unknown;
	name: unknown;
	items: Item[];
	[indexSymbol]?: number;
}

interface FilterState {
	filter?: unknown;
	[unparsed]?: string | null;
	[key: string]: unknown;
}

interface SortAndGroupOptions {
	groupOnColumn?: NormalizedColumn;
	groupOnDescending?: boolean;
	sortOnColumn?: NormalizedColumn;
	descending?: boolean;
}

interface UseProcessedItems {
	data: Item[];
	columns: NormalizedColumn[];
	hashParam?: string;
	sortAndGroupOptions: SortAndGroupOptions;
	noLocalSort?: boolean;
	noLocalFilter?: boolean;
}

const sortBy =
	(valueFn: (item: Item | GroupItem) => unknown, descending?: boolean) =>
	(a: Item | GroupItem, b: Item | GroupItem) =>
		genericSorter(valueFn(a), valueFn(b)) * (descending ? -1 : 1);

const kebab = (input: string) =>
	input.replace(/([a-z0-9])([A-Z])/gu, '$1-$2').toLowerCase();

const notifyChanges = (
	column: NormalizedColumn | undefined,
	changes: Record<string, unknown> | undefined,
): void => {
	if (!column || !changes || !column[columnSymbol]) {
		return;
	}

	Object.entries(changes).forEach(([key, value]) => {
		const colSymbol = column[columnSymbol];
		if (!colSymbol) return;

		colSymbol.__ownChange = true;
		colSymbol[key] = value;
		colSymbol.__ownChange = false;
		colSymbol.dispatchEvent(
			new CustomEvent(`${kebab(key)}-changed`, {
				bubbles: true,
				detail: { value },
			}),
		);
	});
};

const assignIndex = (item: Item | GroupItem, index: number): Item | GroupItem =>
	Object.assign(item, { [indexSymbol]: index });

export const useProcessedItems = ({
	data,
	columns,
	hashParam,
	sortAndGroupOptions,
	noLocalSort,
	noLocalFilter,
}: UseProcessedItems) => {
	const { groupOnColumn, groupOnDescending, sortOnColumn, descending } =
			sortAndGroupOptions,
		write = useCallback(
			([filter, value]: [string, FilterState]) => {
				const column = columns.find(({ name }) => name === filter);
				if (column == null) {
					return [filter, undefined];
				}
				const serialized =
					value.filter && column.serializeFilter?.(column, value.filter);
				return [filter, serialized as string | undefined];
			},
			[columns],
		),
		read = useCallback(
			([filter, value]: [string, string | null]) => {
				const column = columns.find(({ name }) => name === filter);
				if (column == null) {
					return [filter, { [unparsed]: value }];
				}

				const state: FilterState = {
					filter: column.deserializeFilter?.(column, value),
				};
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
				write: write as unknown as (value: unknown) => string,
				read: read as unknown as (value: string) => Record<string, FilterState>,
			},
		),
		// TODO: drop extra info from state
		setFilterState = useCallback(
			(
				name: string,
				state: FilterState | ((prev: FilterState) => FilterState),
			) =>
				setFilters((filters) => {
					const newState = invoke(state, filters[name]) as FilterState;

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
							col.getFilterFn?.(col, filters[col.name!]?.filter),
					])
					.filter(([, fn]) => !!fn),
			) as Record<string, (item: Item) => boolean>;
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

		processedItems = useMemo(() => {
			if (
				!noLocalSort &&
				!groupOnColumn &&
				sortOnColumn != null &&
				sortOnColumn.sortPath != null
			) {
				return filteredItems
					.slice()
					.sort(
						sortBy(
							(a) =>
								sortOnColumn.getComparableValue?.(
									{ ...sortOnColumn, valuePath: sortOnColumn.sortPath },
									a as Item,
								),
							descending,
						),
					);
			}

			if (groupOnColumn != null && groupOnColumn.groupOn != null) {
				const groupedResults = filteredItems.reduce<GroupItem[]>(
					(acc, item) => {
						const gval = groupOnColumn.getComparableValue?.(
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
							groupOnColumn.getComparableValue?.(
								{ ...groupOnColumn, valuePath: groupOnColumn.groupOn },
								(a as GroupItem).items[0],
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
									sortOnColumn.getComparableValue?.(
										{ ...sortOnColumn, valuePath: sortOnColumn.sortPath },
										a as Item,
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
				result.push(item as Item);
			});
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
					if (value[unparsed] == null) {
						return [name, value];
					}

					return read([name, value[unparsed]]);
				}),
			);
		});
	}, [read, setFilters]);

	return {
		processedItems,
		visibleData,
		filters,
		filterFunctions,
		setFilterState,
	};
};
