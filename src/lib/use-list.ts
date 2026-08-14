import { isEmpty } from '@neovici/cosmoz-utils/template';
import { html, useCallback, useEffect, useMemo, useRef } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';
import type { GroupItem } from '../grouped-list/utils';
import type { Column, Item } from './types';
import { indexSymbol } from './utils';
import { onItemChange as _onItemChange } from './utils-data';

export interface IndexedItem extends Item {
	[indexSymbol]: number;
}

export interface IndexedGroup extends GroupItem<IndexedItem> {
	[indexSymbol]: number;
}

export interface RenderItemParams {
	selected: boolean;
	expanded: boolean;
	toggleCollapse: () => void;
}

export interface RenderGroupParams {
	selected: boolean;
	folded: boolean;
	toggleFold: () => void;
}

interface RenderItemDeps {
	columns: Column[];
	collapsedColumns: Column[];
	miniColumns: Column[];
	onItemClick: (event: Event) => void;
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
	groupOnColumn?: Column;
	onItemChange: (column: Column, item: Item) => (value: unknown) => void;
	rowPartFn?: (item: Item, index: number) => string | undefined;
}

interface RenderGroupDeps {
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
	groupOnColumn?: Column;
}

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

const arrow = html`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`;

const _getGroupRowClasses = (folded: boolean): string =>
	folded ? 'groupRow groupRow-folded' : 'groupRow';

const renderMinis =
	({ item, index }: { item: IndexedItem; index?: number }) =>
	(columns: Column[] | undefined) =>
		when(
			(columns?.length ?? 0) > 0,
			() => html`
				<div class="itemRow-minis" part="item-minis">
					${columns!.map(
						(column) =>
							html`<div
								class="itemRow-mini"
								part="item-mini item-mini-${column.name}"
							>
								${(column.renderMini ?? column.renderCell)!(column, {
									item,
									index,
								})}
							</div>`,
					)}
				</div>
			`,
		);

const renderItem =
	({
		columns,
		collapsedColumns,
		miniColumns,
		onItemClick,
		onCheckboxChange,
		dataIsValid,
		groupOnColumn,
		onItemChange,
		rowPartFn,
	}: RenderItemDeps) =>
	(
		item: IndexedItem,
		index: number,
		{ selected, expanded, toggleCollapse }: RenderItemParams,
	) => html`
		<div
			?selected=${selected}
			part="${[
				'itemRow',
				`itemRow-${item[indexSymbol]}`,
				rowPartFn?.(item, index),
			]
				.filter(Boolean)
				.join(' ')}"
			.dataIndex=${item[indexSymbol]}
			.dataItem=${item}
			class="itemRow"
			@click=${onItemClick}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${selected}
					.dataItem=${item}
					@input=${onCheckboxChange}
					?disabled=${!dataIsValid}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${columns}
					.index=${index}
					.selected=${selected}
					.expanded=${expanded}
					.item=${item}
					.groupOnColumn=${groupOnColumn}
					.onItemChange=${onItemChange}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${isEmpty(collapsedColumns.length)}"
					?aria-expanded="${expanded}"
					@click="${toggleCollapse}"
				>
					${arrow}
				</button>
			</div>
			${renderMinis({ item, index })(miniColumns)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${collapsedColumns}
			.item=${item}
			.index=${index}
			?selected=${selected}
			?expanded=${expanded}
			.groupOnColumn=${groupOnColumn}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`;

const renderGroup =
	({ onCheckboxChange, dataIsValid, groupOnColumn }: RenderGroupDeps) =>
	(
		item: IndexedGroup,
		index: number,
		{ selected, folded, toggleFold }: RenderGroupParams,
	) =>
		html` <div
			class="${_getGroupRowClasses(folded)}"
			part="groupRow groupRow-${item[indexSymbol]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${selected}
				.dataItem=${item}
				@input=${onCheckboxChange}
				?disabled=${!dataIsValid}
			/>
			<h3 class="groupRow-label">
				<div><span>${groupOnColumn?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${groupOnColumn}
					.item=${item.items?.[0]}
					.selected=${selected}
					.folded=${folded}
					.group=${item}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${item.items!.length}</div>
			<button class="expand" ?aria-expanded="${folded}" @click=${toggleFold}>
				${arrow}
			</button>
		</div>`;

interface UseListHost extends HTMLElement {
	loading?: boolean;
	displayEmptyGroups?: boolean;
	compareItemsFn?: <T>(a: T, b: T) => boolean;
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
			path = e.composedPath().slice(0, e.composedPath().indexOf(current));

		if (
			path.some(
				(el) => el instanceof Element && el.matches('a, .checkbox, .expand'),
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
			}),
		);
	}, []);

	const { groupOnColumn } = sortAndGroupOptions,
		onItemChange = useCallback(
			(column: Column, item: Item) => (value: unknown) =>
				_onItemChange(host, column, item, value),
			[],
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
			],
		),
		renderGroup: useMemo(
			() =>
				renderGroup({
					onCheckboxChange,
					dataIsValid,
					groupOnColumn,
				}),
			[onCheckboxChange, dataIsValid, groupOnColumn],
		),
	};
};
