import { useCallback, useEffect, useMemo, useRef } from '@pionjs/pion';
import type {
	RenderGroupParams as GroupedListGroupParams,
	RenderItemParams as GroupedListRowParams,
} from '../grouped-list/use-cosmoz-grouped-list';
import type { GroupItem } from '../grouped-list/utils';
import { renderGroup as defaultRenderGroup } from './render-group';
import { renderItem as defaultRenderItem } from './render-item';
import type {
	Column,
	HostRenderGroup,
	HostRenderItem,
	IndexedGroup,
	IndexedItem,
	Item,
} from './types';
import { onItemChange as _onItemChange } from './utils-data';

export type { IndexedGroup, IndexedItem } from './types';

interface GroupedListEl extends HTMLElement {
	toggleSelectTo(item: Item, selected: boolean): void;
	selectOnly(item: Item): void;
	toggleSelect(item: Item, selected: boolean): void;
}

interface CheckboxElement extends HTMLInputElement {
	dataItem: Item;
}

interface RowElement extends HTMLElement {
	dataItem: Item;
	dataIndex: number;
}

const isCheckbox = (el: EventTarget | null): el is CheckboxElement =>
	el instanceof HTMLInputElement;

const isRow = (el: EventTarget | null): el is RowElement =>
	el instanceof HTMLElement;

interface ConnectItemParams {
	renderItem: HostRenderItem;
	columns: Column[];
	collapsedColumns: Column[];
	miniColumns: Column[];
	onItemClick: (event: Event) => void;
	onCheckboxChange: (event: Event) => void;
	onItemChange: (column: Column, item: Item) => (value: unknown) => void;
	rowPartFn?: (item: Item, index: number) => string | undefined;
	groupOnColumn?: Column;
	dataIsValid: boolean;
}

interface ConnectGroupParams {
	renderGroup: HostRenderGroup;
	columns: Column[];
	onCheckboxChange: (event: Event) => void;
	groupOnColumn?: Column;
	dataIsValid: boolean;
}

// connects a row renderer to the params omnitable owns: the renderer is
// whatever was picked already (host prop or internal default), the params
// pass thru it into the renderer's input
const connectItem =
	({ renderItem, ...thru }: ConnectItemParams) =>
	(item: IndexedItem, index: number, params: GroupedListRowParams) =>
		renderItem(item, index, { ...params, ...thru });

// connects a group renderer to the params omnitable owns
const connectGroup =
	({ renderGroup, ...thru }: ConnectGroupParams) =>
	(group: IndexedGroup, index: number, params: GroupedListGroupParams) =>
		renderGroup(group, index, { ...params, ...thru });

interface UseListHost extends HTMLElement {
	loading?: boolean;
	displayEmptyGroups?: boolean;
	compareItemsFn?: <T>(a: T, b: T) => boolean;
	renderItem?: HostRenderItem;
	renderGroup?: HostRenderGroup;
}

interface UseListParams {
	host: UseListHost;
	error?: { message: string } | null;
	dataIsValid: boolean;
	processedItems: (Item | GroupItem<Item>)[];
	columns: Column[];
	collapsedColumns: Column[];
	miniColumns: Column[];
	sortAndGroupOptions: { groupOnColumn?: Column; [key: string]: unknown };
	rowPartFn?: (item: Item, index: number) => string | undefined;
	[key: string]: unknown;
}

export const useList = ({
	host,
	error,
	dataIsValid,
	processedItems,
	columns,
	collapsedColumns,
	miniColumns,
	sortAndGroupOptions,
	rowPartFn,
	...rest
}: UseListParams) => {
	const { loading = false, displayEmptyGroups = false, compareItemsFn } = host,
		// the effective renderers — the host prop when set, the internal
		// default otherwise (`??`, not destructuring defaults: `null`
		// must exit an override)
		renderItem = host.renderItem ?? defaultRenderItem,
		renderGroup = host.renderGroup ?? defaultRenderGroup,
		keyState = useRef({ shiftKey: false, ctrlKey: false }),
		onCheckboxChange = useCallback((event: Event) => {
			if (!isCheckbox(event.target)) {
				return;
			}
			const target = event.target,
				item = target.dataItem,
				selected = target.checked,
				groupedList =
					host.shadowRoot!.querySelector<GroupedListEl>('#groupedList')!;
			if (keyState.current!.shiftKey) {
				groupedList.toggleSelectTo(item, selected);
			} else if (keyState.current!.ctrlKey) {
				target.checked = true;
				groupedList.selectOnly(item);
			} else {
				groupedList.toggleSelect(item, selected);
			}

			event.preventDefault();
			event.stopPropagation();
		}, []);

	useEffect(() => {
		const handler = ({
			shiftKey,
			ctrlKey,
		}: {
			shiftKey: boolean;
			ctrlKey: boolean;
		}) => {
			keyState.current = { shiftKey, ctrlKey };
		};
		window.addEventListener('keydown', handler);
		window.addEventListener('keyup', handler);
		return () => {
			window.removeEventListener('keydown', handler);
			window.removeEventListener('keyup', handler);
		};
	}, []);

	const onItemClick = useCallback((e: Event) => {
		if (!isRow(e.currentTarget)) {
			return;
		}
		const current = e.currentTarget,
			composedPath = e.composedPath(),
			path = composedPath.slice(0, composedPath.indexOf(current));

		if (
			path.some(
				(el) => el instanceof Element && el.matches('a, .checkbox, .expand')
			)
		) {
			return;
		}

		host.dispatchEvent(
			new window.CustomEvent('omnitable-item-click', {
				bubbles: true,
				composed: true,
				detail: {
					item: current.dataItem,
					index: current.dataIndex,
				},
			})
		);
	}, []);

	const { groupOnColumn } = sortAndGroupOptions,
		onItemChange = useCallback(
			(column: Column, item: Item) => (value: unknown) =>
				_onItemChange(host, column, item, value),
			[]
		);

	return {
		...rest,
		processedItems,
		dataIsValid,
		filterIsTooStrict: dataIsValid && processedItems.length < 1,
		loading,
		compareItemsFn,
		displayEmptyGroups,
		error,

		// keep last among the hooks, in this order
		renderItem: useMemo(
			() =>
				connectItem({
					renderItem,
					columns,
					collapsedColumns,
					miniColumns,
					onItemClick,
					onCheckboxChange,
					onItemChange,
					rowPartFn,
					groupOnColumn,
					dataIsValid,
				}),
			[
				renderItem,
				columns,
				collapsedColumns,
				miniColumns,
				onItemClick,
				onCheckboxChange,
				onItemChange,
				rowPartFn,
				groupOnColumn,
				dataIsValid,
			]
		),
		renderGroup: useMemo(
			() =>
				connectGroup({
					renderGroup,
					columns,
					onCheckboxChange,
					groupOnColumn,
					dataIsValid,
				}),
			[renderGroup, columns, onCheckboxChange, groupOnColumn, dataIsValid]
		),
	};
};
