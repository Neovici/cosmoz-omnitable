import type { GroupItem } from '../grouped-list/utils';
import { genericSorter } from './generic-sorter';
import type { Item } from './types';
import type { NormalizedColumn } from './use-dom-columns';

export type GroupedResult = {
	id: unknown;
	name: unknown;
	items: Item[];
};

export const isThenable = (value: unknown): value is Promise<unknown> =>
	value != null &&
	(typeof value === 'object' || typeof value === 'function') &&
	'then' in value &&
	typeof value.then === 'function';

// resolves comparable values that may be promises (async data sources
// such as cosmoz-tree); rejected values are treated as missing
export const resolveComparable = <T>(
	items: T[],
	valueFn: (item: T) => unknown
): Promise<[T, unknown][]> =>
	Promise.all(
		items.map(async (item) => {
			let value: unknown;
			try {
				value = await valueFn(item);
			} catch {
				value = undefined;
			}
			const entry: [T, unknown] = [item, value];
			return entry;
		})
	);

// resolve promise-valued comparables and re-sort/group once they are
// available
export const processItemsAsync = async ({
	filteredItems,
	groupOnColumn,
	groupOnDescending,
	sortOnColumn,
	descending,
	noLocalSort,
}: {
	filteredItems: Item[];
	groupOnColumn?: NormalizedColumn;
	groupOnDescending?: boolean;
	sortOnColumn?: NormalizedColumn;
	descending?: boolean;
	noLocalSort?: boolean;
}): Promise<(Item | GroupItem<Item>)[]> => {
	if (
		!noLocalSort &&
		!groupOnColumn &&
		sortOnColumn != null &&
		sortOnColumn.sortOn != null
	) {
		return (
			await resolveComparable(filteredItems, (item) =>
				sortOnColumn.getComparableValue!(
					{ ...sortOnColumn, valuePath: sortOnColumn.sortOn },
					item
				)
			)
		)
			.sort((a, b) => genericSorter(a[1], b[1]) * (descending ? -1 : 1))
			.map(([item]) => item);
	}

	if (groupOnColumn?.groupOn == null) {
		return [];
	}

	const resolved = await resolveComparable(filteredItems, (item) =>
			groupOnColumn.getComparableValue!(
				{ ...groupOnColumn, valuePath: groupOnColumn.groupOn },
				item
			)
		),
		groups: GroupedResult[] = [];

	// comparables are already resolved; grouping uses them as ids
	resolved.forEach(([item, gval]) => {
		if (gval === undefined) {
			return;
		}
		const existing = groups.find((group) => group.id === gval);
		if (existing != null) {
			existing.items.push(item);
			return;
		}
		groups.push({ id: gval, name: gval, items: [item] });
	});
	groups.sort(
		(a, b) => genericSorter(a.id, b.id) * (groupOnDescending ? -1 : 1)
	);
	if (sortOnColumn != null && sortOnColumn.sortOn != null && !noLocalSort) {
		await Promise.all(
			groups.map(async (group) => {
				group.items = (
					await resolveComparable(group.items, (item) =>
						sortOnColumn.getComparableValue!(
							{ ...sortOnColumn, valuePath: sortOnColumn.sortOn },
							item
						)
					)
				)
					.sort((a, b) => genericSorter(a[1], b[1]) * (descending ? -1 : 1))
					.map(([item]) => item);
			})
		);
	}
	return groups;
};
