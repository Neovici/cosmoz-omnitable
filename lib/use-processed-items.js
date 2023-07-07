import { useCallback, useEffect, useMemo } from 'haunted';
import { invoke } from '@neovici/cosmoz-utils/function';
import { genericSorter } from './generic-sorter';
import { columnSymbol } from './use-dom-columns';
import { useHashState } from './use-hash-state';
import { indexSymbol } from './utils';

const sortBy = (valueFn, descending) => (a, b) =>
		genericSorter(valueFn(a), valueFn(b)) * (descending ? -1 : 1),
	kebab = (input) =>
		input.replace(/([a-z0-9])([A-Z])/gu, '$1-$2').toLowerCase(),
	notifyChanges = (column, changes) => {
		if (!column || !changes) {
			return;
		}

		Object.entries(changes).forEach(([key, value]) => {
			column[columnSymbol].__ownChange = true;
			column[columnSymbol][key] = value;
			column[columnSymbol].__ownChange = false;
			column[columnSymbol].dispatchEvent(
				new CustomEvent(`${kebab(key)}-changed`, {
					bubbles: true,
					detail: { value },
				})
			);
		});
	},
	assignIndex = (item, index) => Object.assign(item, { [indexSymbol]: index }),
	unparsed = Symbol('unparsed');

// eslint-disable-next-line max-lines-per-function
export const useProcessedItems = ({
	data,
	columns,
	hashParam,
	sortAndGroupOptions,
	noLocalSort,
	noLocalFilter,
}) => {
	const { groupOnColumn, groupOnDescending, sortOnColumn, descending } =
			sortAndGroupOptions,
		write = useCallback(
			([filter, value]) => {
				const column = columns.find(({ name }) => name === filter);
				if (column == null) {
					return [filter, undefined];
				}
				return [
					filter,
					value.filter && column.serializeFilter(column, value.filter),
				];
			},
			[columns]
		),
		read = useCallback(
			([filter, value]) => {
				const column = columns.find(({ name }) => name === filter);
				if (column == null) {
					return [filter, { [unparsed]: value }];
				}

				const state = { filter: column.deserializeFilter(column, value) };
				notifyChanges(column, state);
				return [filter, state];
			},
			[columns]
		),
		[filters, setFilters] = useHashState({}, hashParam, {
			multi: true,
			suffix: '-filter--',
			write,
			read,
		}),
		// TODO: drop extra info from state
		setFilterState = useCallback(
			(name, state) =>
				setFilters((filters) => {
					const newState = invoke(state, filters[name]);

					notifyChanges(
						columns.find((c) => c.name === name),
						newState
					);

					return {
						...filters,
						[name]: {
							...filters[name],
							...newState,
						},
					};
				}),
			[columns, setFilters]
		),
		filterValues = useMemo(
			() => Object.values(filters).map((f) => f.filter),
			[filters]
		),
		filterFunctions = useMemo(() => {
			return Object.fromEntries(
				columns
					.map((col) => [
						col.name,
						!col.noLocalFilter &&
							col.getFilterFn(col, filters[col.name]?.filter),
					])
					.filter(([, fn]) => !!fn)
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
				Object.values(filterFunctions).every((filterFn) => filterFn(item))
			);
		}, [data, filterFunctions, noLocalFilter]),
		// todo: extract function
		// eslint-disable-next-line max-lines-per-function
		processedItems = useMemo(() => {
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
								sortOnColumn.getComparableValue(
									{ ...sortOnColumn, valuePath: sortOnColumn.sortOn },
									a
								),
							descending
						)
					);
			}

			if (groupOnColumn != null && groupOnColumn.groupOn != null) {
				const groupedResults = filteredItems.reduce((acc, item) => {
					const gval = groupOnColumn.getComparableValue(
						{ ...groupOnColumn, valuePath: groupOnColumn.groupOn },
						item
					);

					if (gval === undefined) {
						return acc;
					}

					let group = acc.find((g) => g.id === gval);

					if (!group) {
						group = {
							id: gval,
							name: gval,
							items: [item],
						};
						return [...acc, group];
					}

					group.items.push(item);
					return acc;
				}, []);

				groupedResults.sort(
					sortBy(
						(a) =>
							groupOnColumn.getComparableValue(
								{ ...groupOnColumn, valuePath: groupOnColumn.groupOn },
								a.items[0]
							),
						groupOnDescending
					)
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
									sortOnColumn.getComparableValue(
										{ ...sortOnColumn, valuePath: sortOnColumn.sortOn },
										a
									),
								descending
							)
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
			const result = [];
			processedItems.forEach((item) => {
				if (Array.isArray(item.items)) {
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
				(value) => value[unparsed] != null
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
				})
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
