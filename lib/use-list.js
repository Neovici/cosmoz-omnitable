/* eslint-disable max-lines-per-function */
import { html, useCallback, useEffect, useMemo, useRef } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { indexSymbol } from './utils';
import { onItemChange as _onItemChange } from './utils-data';

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

const _getGroupRowClasses = (folded) =>
	folded ? 'groupRow groupRow-folded' : 'groupRow';

const renderMinis = (item) => (columns) =>
	when(
		columns?.length > 0,
		() => html`
			<div class="itemRow-minis" part="item-minis">
				${columns.map(
					(column) =>
						html`<div
							class="itemRow-mini"
							part="item-mini item-mini-${column.name}"
						>
							${(column.renderMini ?? column.renderCell)(column, { item })}
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
	}) =>
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
			<div class="itemRow-wrapper">
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
			${renderMinis(item)(miniColumns)}
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
	({ onCheckboxChange, dataIsValid, groupOnColumn }) =>
	(item, index, { selected, folded, toggleFold }) =>
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
			<div class="groupRow-badge">${item.items.length}</div>
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
}) => {
	const { loading = false, displayEmptyGroups = false, compareItemsFn } = host,
		keyState = useRef({ shiftKey: false, ctrlKey: false }),
		onCheckboxChange = useCallback((event) => {
			const item = event.target.dataItem,
				selected = event.target.checked;
			if (keyState.current.shiftKey) {
				host.shadowRoot
					.querySelector('#groupedList')
					.toggleSelectTo(item, selected);
			} else if (keyState.current.ctrlKey) {
				event.target.checked = true;
				host.shadowRoot.querySelector('#groupedList').selectOnly(item);
			} else {
				host.shadowRoot
					.querySelector('#groupedList')
					.toggleSelect(item, selected);
			}

			event.preventDefault();
			event.stopPropagation();
		}, []);

	useEffect(() => {
		const handler = ({ shiftKey, ctrlKey }) => {
			keyState.current = { shiftKey, ctrlKey };
		};
		window.addEventListener('keydown', handler);
		window.addEventListener('keyup', handler);
		return () => {
			window.removeEventListener('keydown', handler);
			window.removeEventListener('keyup', handler);
		};
	}, []);

	const onItemClick = useCallback((e) => {
		const composedPath = e.composedPath(),
			path = composedPath.slice(0, composedPath.indexOf(e.currentTarget));

		if (path.find((e) => e.matches?.('a, .checkbox, .expand'))) {
			return;
		}

		host.dispatchEvent(
			new window.CustomEvent('omnitable-item-click', {
				bubbles: true,
				composed: true,
				detail: {
					item: e.currentTarget.dataItem,
					index: e.currentTarget.dataIndex,
				},
			}),
		);
	}, []);

	const { groupOnColumn } = sortAndGroupOptions,
		onItemChange = useCallback(
			(column, item) => (value) => _onItemChange(host, column, item, value),
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
