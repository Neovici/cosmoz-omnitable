/* eslint-disable max-lines-per-function */
import { html, useCallback, useEffect, useMemo, useRef } from 'haunted';
import { indexSymbol } from './utils';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { onItemChange as _onItemChange } from './utils-data';

const _getGroupRowClasses = (folded) =>
		folded ? 'groupRow groupRow-folded' : 'groupRow',
	_getFoldIcon = (expanded) => (expanded ? 'expand-less' : 'expand-more'),
	renderItem = ({
		columns,
		collapsedColumns,
		onItemClick,
		onCheckboxChange,
		dataIsValid,
		groupOnColumn,
		onItemChange,
	}) => {
		return (item, index, { selected, expanded, toggleCollapse }) => {
			return html` <div class="item-row-wrapper">
				<div
					?selected=${selected}
					part="itemRow itemRow-${item[indexSymbol]}"
					.dataIndex=${item[indexSymbol]}
					.dataItem=${item}
					class="itemRow"
					@click=${onItemClick}
				>
					<input
						class="checkbox"
						type="checkbox"
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
					<paper-icon-button
						class="expand"
						?hidden=${isEmpty(collapsedColumns.length)}
						.icon=${_getFoldIcon(expanded)}
						@click=${toggleCollapse}
					></paper-icon-button>
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
			</div>`;
		};
	},
	renderGroup = ({ onCheckboxChange, dataIsValid, groupOnColumn }) => {
		return (item, index, { selected, folded, toggleFold }) =>
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
				<paper-icon-button
					class="fold"
					.icon=${_getFoldIcon(folded)}
					@click=${toggleFold}
				></paper-icon-button>
			</div>`;
	};

export const useList = ({
	host,
	dataIsValid,
	processedItems,
	columns,
	collapsedColumns,
	sortAndGroupOptions,
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
			})
		);
	}, []);

	useEffect(() => {
		host.shadowRoot.querySelector('#groupedList').scrollTarget =
			host.shadowRoot.querySelector('#scroller');
	}, []);

	const { groupOnColumn } = sortAndGroupOptions,
		onItemChange = useCallback(
			(column, item) => (value) => _onItemChange(host, column, item, value),
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

		renderItem: useMemo(
			() =>
				renderItem({
					columns,
					collapsedColumns,
					onItemClick,
					onCheckboxChange,
					dataIsValid,
					groupOnColumn,
					onItemChange,
				}),
			[
				columns,
				collapsedColumns,
				onItemClick,
				onCheckboxChange,
				dataIsValid,
				groupOnColumn,
				onItemChange,
			]
		),
		renderGroup: useMemo(
			() =>
				renderGroup({
					onCheckboxChange,
					dataIsValid,
					groupOnColumn,
				}),
			[onCheckboxChange, dataIsValid, groupOnColumn]
		),
	};
};
