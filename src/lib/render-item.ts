import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { html } from '@pionjs/pion';

import { renderMinis } from './render-mini';
import type { Column, IndexedItem, Item } from './types';
import { indexSymbol } from './utils';

export interface RenderItemParams {
	selected: boolean;
	expanded: boolean;
	toggleCollapse: () => void;
}

export interface RenderItemDeps {
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

/**
 * Creates the default item-row renderer.
 *
 * Called by `use-list` with the omnitable-owned wiring (columns,
 * collapsed columns, checkbox/click handlers); the returned function
 * renders one item row for the grouped list.
 */
export const renderItem =
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
		_index: number,
		{ selected, expanded, toggleCollapse }: RenderItemParams
	) => {
		const index = item[indexSymbol];
		return html`
			<div
				?selected=${selected}
				part="${['itemRow', `itemRow-${index}`, rowPartFn?.(item, _index)]
					.filter(Boolean)
					.join(' ')}"
				.dataIndex=${index}
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
						.index=${_index}
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
						${chevronDownIcon({ width: '16', height: '16' })}
					</button>
				</div>
				${renderMinis({ item, index })(miniColumns)}
			</div>
			<cosmoz-omnitable-item-expand
				.columns=${collapsedColumns}
				.item=${item}
				.index=${_index}
				?selected=${selected}
				?expanded=${expanded}
				.groupOnColumn=${groupOnColumn}
				part="item-expand"
			>
			</cosmoz-omnitable-item-expand>
		`;
	};
