import { Item } from '../lib/types';

export interface ItemState {
	expanded?: boolean;
	folded?: boolean;
}

export interface GroupItem<T = unknown> {
	items?: T[];
	[key: string]: unknown;
}

export type ItemsState = WeakMap<Item, ItemState>;

const symbols = {
	group: Symbol('group'),
};

const getItemState = (item: Item, itemsState: ItemsState): ItemState => {
	if (!itemsState.has(item)) {
		itemsState.set(item, {});
	}

	return itemsState.get(item)!;
};

const isExpanded = (item: Item, itemsState: ItemsState): boolean =>
	Boolean(getItemState(item, itemsState).expanded);

const isFolded = (group: Item, itemsState: ItemsState): boolean =>
	Boolean(getItemState(group, itemsState).folded);

const isGroup = (item: unknown): item is GroupItem =>
	item ? (item as GroupItem).items instanceof Array : false;

const _assertDataIsHomogeneous = (data: unknown[]): void => {
	if (!Array.isArray(data) || data.length === 0) {
		return;
	}

	const firstItemIsAGroup = Array.isArray((data[0] as GroupItem)?.items),
		isHomogeneous = data.every(
			(group) =>
				Array.isArray((group as GroupItem).items) === firstItemIsAGroup,
		);

	if (!isHomogeneous) {
		throw new Error('Data must be homogeneous.');
	}
};

const prepareData = <T extends Item>(
	data: T[] | GroupItem<T>[],
	displayEmptyGroups: boolean,
	itemsState: ItemsState,
): (T | GroupItem<T>)[] | undefined => {
	if (!Array.isArray(data)) {
		return;
	}

	// data should be either all items or all grouped items, never mixed
	_assertDataIsHomogeneous(data);

	const flatData = data.reduce(
		(acc, item) => {
			const groupItem = item as GroupItem<T>;

			// simple items
			if (!groupItem.items) {
				return acc.concat(item);
			}

			// groups with items
			if (groupItem.items.length) {
				if (getItemState(item, itemsState).folded) {
					return acc.concat(item);
				}
				return acc.concat(
					item,
					groupItem.items.map((i) =>
						Object.assign(i as Item, { [symbols.group]: item }),
					),
				);
			}

			// groups without items
			if (displayEmptyGroups) {
				return acc.concat(item);
			}

			return acc;
		},
		[] as (T | GroupItem<T>)[],
	);

	return flatData;
};

const callFn = <T, A extends unknown[]>(
	fn: ((...args: A) => T) | T,
	...args: A
): T => {
	if (typeof fn === 'function') {
		return (fn as (...args: A) => T)(...args);
	}

	return fn as T;
};

const byReference = <T>(a: T, b: T): boolean => a === b;

export {
	symbols,
	prepareData,
	getItemState,
	isExpanded,
	isFolded,
	isGroup,
	callFn,
	byReference,
};
