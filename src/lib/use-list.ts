import {
	html,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	type Renderable,
} from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { indexSymbol } from './utils';
import { onItemChange as _onItemChange } from './utils-data';
import type { Column, Item as BaseItem } from './types';
import type {
	RenderItemFunction,
	RenderGroupFunction,
} from '../grouped-list/use-cosmoz-grouped-list';
import type { CompareItemsFunction } from '../grouped-list/use-selected-items';

export interface Item extends BaseItem {
	[indexSymbol]: number;
}

interface KeyState {
	shiftKey: boolean;
	ctrlKey: boolean;
}

interface UseListHost extends HTMLElement {
	loading?: boolean;
	displayEmptyGroups?: boolean;
	compareItemsFn?: CompareItemsFunction;
	shadowRoot: ShadowRoot;
	dispatchEvent(event: Event): boolean;
}

interface SortAndGroupOptions {
	groupOnColumn?: Column;
}

interface UseListParams {
	host: UseListHost;
	error?: Error | null;
	dataIsValid: boolean;
	processedItems: Item[];
	columns: Column[];
	collapsedColumns: Column[];
	miniColumns: Column[];
	sortAndGroupOptions: SortAndGroupOptions;
	rowPartFn?: (item: Item, index: number) => string | undefined;
}

interface GroupedListElement extends HTMLElement {
	toggleSelectTo(item: Item, selected: boolean): void;
	selectOnly(item: Item): void;
	toggleSelect(item: Item, selected: boolean): void;
}

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
	({ item, index }: { item: Item; index: number }) =>
	(columns: Column[]) =>
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
								${(column.renderMini ?? column.renderCell)?.(column, {
									item,
									index,
								})}
							</div>`,
					)}
				</div>
			`,
		);

interface RenderItemConfig {
	columns: Column[];
	collapsedColumns: Column[];
	miniColumns: Column[];
	onItemClick: (e: Event) => void;
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
	groupOnColumn?: Column;
	onItemChange: (column: Column, item: Item) => (value: unknown) => void;
	rowPartFn?: (item: Item, index: number) => string | undefined;
}

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
	}: RenderItemConfig): RenderItemFunction =>
	(item, index, { selected, expanded, toggleCollapse }) => html`
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

interface RenderGroupConfig {
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
	groupOnColumn?: Column;
}

const renderGroup =
	({
		onCheckboxChange,
		dataIsValid,
		groupOnColumn,
	}: RenderGroupConfig): RenderGroupFunction =>
	(item, index, { selected, folded, toggleFold }): Renderable =>
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
			<div class="groupRow-badge">${item.items?.length ?? 0}</div>
			<button class="expand" ?aria-expanded="${folded}" @click=${toggleFold}>
				${arrow}
			</button>
		</div>`;

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
		keyState = useRef<KeyState>({ shiftKey: false, ctrlKey: false }),
		onCheckboxChange = useCallback((event: Event) => {
			const target = event.target as HTMLInputElement & { dataItem: Item };
			const item = target.dataItem;
			const selected = target.checked;
			const groupedList = host.shadowRoot.querySelector(
				'#groupedList',
			) as GroupedListElement;

			if (keyState.current.shiftKey) {
				groupedList.toggleSelectTo(item, selected);
			} else if (keyState.current.ctrlKey) {
				target.checked = true;
				groupedList.selectOnly(item);
			} else {
				groupedList.toggleSelect(item, selected);
			}

			event.preventDefault();
			event.stopPropagation();
		}, []);

	useEffect(() => {
		const handler = ({ shiftKey, ctrlKey }: KeyboardEvent) => {
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
		const target = e.currentTarget as HTMLElement & {
			dataItem: Item;
			dataIndex: number;
		};
		const composedPath = e.composedPath();
		const path = composedPath.slice(0, composedPath.indexOf(target));

		if (
			path.find((e) => (e as HTMLElement).matches?.('a, .checkbox, .expand'))
		) {
			return;
		}

		host.dispatchEvent(
			new window.CustomEvent('omnitable-item-click', {
				bubbles: true,
				composed: true,
				detail: {
					item: target.dataItem,
					index: target.dataIndex,
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
