import { useCallback, useEffect, useMemo, useRef } from '@pionjs/pion';
import type {
	RenderGroupParams as GroupedListGroupParams,
	RenderItemParams as GroupedListRowParams,
} from '../grouped-list/use-cosmoz-grouped-list';
import type { GroupItem } from '../grouped-list/utils';
import { renderGroup } from './render-group';
import { renderItem } from './render-item';
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

interface BindItemParams {
	render: HostRenderItem;
	columns: Column[];
	collapsedColumns: Column[];
	onItemClick: (event: Event) => void;
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
}

interface BindGroupParams {
	render: HostRenderGroup;
	columns: Column[];
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
}

// wraps a host-provided row renderer, injecting the params omnitable owns
// (columns, collapsed columns, selection/click wiring)
const bindItemParams =
	({
		render,
		columns,
		collapsedColumns,
		onItemClick,
		onCheckboxChange,
		dataIsValid,
	}: BindItemParams) =>
	(item: IndexedItem, index: number, params: GroupedListRowParams) =>
		render(item, index, {
			...params,
			columns,
			collapsedColumns,
			onItemClick,
			onCheckboxChange,
			dataIsValid,
		});

// wraps a host-provided group renderer, injecting the params omnitable owns
const bindGroupParams =
	({ render, columns, onCheckboxChange, dataIsValid }: BindGroupParams) =>
	(group: IndexedGroup, index: number, params: GroupedListGroupParams) =>
		render(group, index, { ...params, columns, onCheckboxChange, dataIsValid });

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

	// default renderers — keep last among the hooks, in this order
	const baseItem = useMemo(
			() =>
				renderItem({
					columns,
					collapsedColumns,
					miniColumns,
					onItemClick,
					onCheckboxChange,
					dataIsValid,
					groupOnColumn,
					onItemChange,
					rowPartFn,
				}),
			[
				columns,
				collapsedColumns,
				onItemClick,
				onCheckboxChange,
				dataIsValid,
				groupOnColumn,
				onItemChange,
				rowPartFn,
			]
		),
		baseGroup = useMemo(
			() =>
				renderGroup({
					onCheckboxChange,
					dataIsValid,
					groupOnColumn,
				}),
			[onCheckboxChange, dataIsValid, groupOnColumn]
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

		renderItem: useMemo(
			() =>
				host.renderItem == null
					? baseItem
					: bindItemParams({
							render: host.renderItem,
							columns,
							collapsedColumns,
							onItemClick,
							onCheckboxChange,
							dataIsValid,
					  }),
			[
				baseItem,
				host.renderItem,
				columns,
				collapsedColumns,
				onItemClick,
				onCheckboxChange,
				dataIsValid,
			]
		),
		renderGroup: useMemo(
			() =>
				host.renderGroup == null
					? baseGroup
					: bindGroupParams({
							render: host.renderGroup,
							columns,
							onCheckboxChange,
							dataIsValid,
					  }),
			[baseGroup, host.renderGroup, columns, onCheckboxChange, dataIsValid]
		),
	};
};
