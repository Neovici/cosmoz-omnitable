import { useCallback, useMemo } from 'haunted';
import { genericSorter } from './generic-sorter';
import { invoke } from './invoke';
import { columnSymbol } from './normalize-settings';
import { useHashState } from './use-hash-state';

const
	sortBy = (valueFn, descending) => (a, b) => genericSorter(valueFn(a), valueFn(b)) * (descending ? -1 : 1),
	kebab = input => input.replace(/([a-z0-9])([A-Z])/gu, '$1-$2').toLowerCase(),
	notifyChanges = (column, changes) => {
		if (!column || !changes) {
			return;
		}

		Object.entries(changes).forEach(([key, value]) => {
			column[columnSymbol][key] = value;
			column[columnSymbol].dispatchEvent(new CustomEvent(`${ kebab(key) }-changed`, { bubbles: true, value }));
		});
	};

// eslint-disable-next-line max-lines-per-function
export const useProcessedItems = ({ data, columns, groupOnColumn, groupOnDescending, sortOnColumn, descending, hashParam }) => {
	const
		write = useCallback(([filter, value]) => {
			const column = columns.find(({ name }) => name === filter);
			if (column == null) {
				return [filter, undefined];
			}
			return [filter, value.filter && column.serializeFilter(column, value.filter)];
		}, [columns]),

		read = useCallback(([filter, value]) => {
			const column = columns.find(({ name }) => name === filter);
			if (column == null) {
				return [filter, undefined];
			}
			// TODO: add try-catch
			const state = { filter: column.deserializeFilter(column, value) };
			notifyChanges(column, state);
			return [filter, state];
		}, [columns]),

		[filters, setFilters] = useHashState({}, hashParam, { multi: true, suffix: '-filter--', write, read }),
		// TODO: drop extra info from state
		setFilterState = useCallback((name, state) => setFilters(filters => {
			const newState = invoke(state, filters[name]);

			notifyChanges(columns.find(c => c.name === name), newState);

			return {
				...filters,
				[name]: {
					...filters[name],
					...newState
				}
			};
		}), [columns, setFilters]),

		filterValues = useMemo(() => Object.values(filters).map(f => f.filter), [filters]),
		filterFunctions = useMemo(() => {
			return Object.fromEntries(columns
				.map(col => [col.name, col.getFilterFn(col, filters[col.name]?.filter)])
				.filter(([, fn]) => fn !== undefined));
		}, [columns, ...filterValues]),

		filteredItems = useMemo(() => {
			if (!Array.isArray(data) || data.length === 0) {
				return [];
			}

			if (Object.entries(filterFunctions).length === 0) {
				return data.slice();
			}

			return data.filter(item => Object.values(filterFunctions).every(filterFn => filterFn(item)));
		}, [data, filterFunctions]),

		// todo: extract function
		processedItems = useMemo(() => {
			if (!groupOnColumn && sortOnColumn != null && sortOnColumn.sortOn != null) {
				return filteredItems.slice().sort(sortBy(a => sortOnColumn.getComparableValue({ ...sortOnColumn, valuePath: sortOnColumn.sortOn }, a), descending));
			}

			if (groupOnColumn != null && groupOnColumn.groupOn != null) {
				const groupedResults = filteredItems.reduce((acc, item) => {
					const gval = groupOnColumn.getComparableValue({ ...groupOnColumn, valuePath: groupOnColumn.groupOn }, item);

					if (gval === undefined) {
						return acc;
					}

					let group = acc.find(g => g.id === gval);

					if (!group) {
						group = {
							id: gval,
							name: gval,
							items: [item]
						};
						return [...acc, group];
					}

					group.items.push(item);
					return acc;
				}, []);

				groupedResults.sort(sortBy(
					a => groupOnColumn.getComparableValue({ ...groupOnColumn, valuePath: groupOnColumn.groupOn }, a.items[0]), groupOnDescending));

				if (!sortOnColumn) {
					return groupedResults;
				}

				return groupedResults
					.filter(group => Array.isArray(group.items))
					.map(group => {
						group.items.sort(sortBy(a => sortOnColumn.getComparableValue({ ...sortOnColumn, valuePath: sortOnColumn.sortOn }, a), descending));
						return group;
					});
			}

			return filteredItems;
		}, [filteredItems, groupOnColumn, groupOnDescending, sortOnColumn, descending]);

	return {
		processedItems,
		filters,
		filterFunctions,
		setFilterState,
		numProcessedItems: filteredItems.length,
		groupsCount: processedItems[0]?.items != null ? processedItems.length : 0
	};
};
