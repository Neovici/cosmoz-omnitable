import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useLayoutEffect, useMemo } from '@pionjs/pion';
import { html } from 'lit-html';
import './cosmoz-grouped-list-row';
import { useCollapsibleItems } from './use-collapsible-items';
import { useSelectedItems } from './use-selected-items';
import { byReference, isExpanded, isFolded, prepareData } from './utils';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';

const styles = {
		host: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
		},
	},
	// eslint-disable-next-line max-lines-per-function
	useCosmozGroupedList = (host) => {
		const {
				data,
				renderItem,
				renderGroup,
				displayEmptyGroups,
				compareItemsFn = byReference,
			} = host,
			{ toggleFold, toggleCollapse, state, signal } = useCollapsibleItems(),
			// TODO: state changes trigger recalculation, which is slow (200ms with 10k items)
			// it only makes sense to do it when a group is folded
			// suggested fix: separate signal for item collapse and group fold
			flatData = useMemo(
				() => prepareData(data, displayEmptyGroups, state),
				[data, displayEmptyGroups, signal]
			),
			{
				selectedItems,
				isItemSelected,
				isGroupSelected,
				isSelected,
				select,
				deselect,
				selectOnly,
				selectAll,
				deselectAll,
				toggleSelect,
				toggleSelectTo,
			} = useSelectedItems({
				initial: [],
				compareItemsFn,
				data,
				flatData,
			}),
			renderRow = useCallback(
				(item, index) =>
					// eslint-disable-next-line no-nested-ternary
					Array.isArray(item.items)
						? renderGroup(item, index, {
								selected: isGroupSelected(item, selectedItems),
								folded: isFolded(item, state),
								toggleSelect: (selected) =>
									toggleSelect(
										item,
										typeof selected === 'boolean' ? selected : undefined
									),
								toggleFold: () => toggleFold(item),
						  })
						: renderItem(item, index, {
								selected: selectedItems.includes(item),
								expanded: isExpanded(item, state),
								toggleSelect: (selected) =>
									toggleSelect(
										item,
										typeof selected === 'boolean' ? selected : undefined
									),
								toggleCollapse: () => toggleCollapse(item),
						  }),
				[renderItem, renderGroup, selectedItems, toggleSelect, signal]
			);

		useLayoutEffect(() => Object.assign(host.style, styles.host), []);

		useNotifyProperty('selectedItems', selectedItems);
		const api = {
			toggleFold,
			toggleCollapse,
			isItemSelected,
			isGroupSelected,
			isSelected,
			select,
			deselect,
			selectOnly,
			selectAll,
			deselectAll,
			toggleSelect,
			toggleSelectTo,
		};

		useImperativeApi(api, Object.values(api));

		return {
			renderRow,
			flatData,
		};
	},
	renderCosmozGroupedList = ({ renderRow, flatData }) =>
		virtualize({
			items: flatData,
			renderItem: (item, index) => html`<cosmoz-grouped-list-row
				.item=${item}
				.index=${index}
				.renderFn=${renderRow}
			></cosmoz-grouped-list-row>`,
		});

export { renderCosmozGroupedList, useCosmozGroupedList };
