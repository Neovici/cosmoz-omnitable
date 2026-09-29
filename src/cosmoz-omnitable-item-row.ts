import { component, html } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import { until } from 'lit-html/directives/until.js';
import type { Column, Item, ItemRenderData } from './lib/types';

const isThenable = (value: unknown): value is Promise<string | undefined> =>
	value != null && typeof (value as { then?: unknown }).then === 'function';

type ItemRowProps = {
	columns: Column[];
	groupOnColumn?: Column;
	item: Item;
	index: number;
	selected: boolean;
	expanded: boolean;
	onItemChange: (column: Column, item: Item) => (value: unknown) => void;
};

const renderCell = (
	column: Column,
	data: ItemRenderData,
	onItemChange: (column: Column, item: Item) => (value: unknown) => void
) =>
	column.editable
		? column.renderEditCell!(column, data, onItemChange(column, data.item))
		: column.renderCell!(column, data);

const cellTitle = (column: Column, item: Item) => {
	const title = column.cellTitleFn!(column, item);
	// async data sources may resolve the title later
	return isThenable(title) ? until(Promise.resolve(title), '') : title ?? '';
};

const ItemRow = ({
	columns,
	groupOnColumn,
	item,
	index,
	selected,
	expanded,
	onItemChange,
}: ItemRowProps) =>
	repeat(
		columns,
		(column) => column.name,
		(column) => {
			return html`<div
				class="cell itemRow-cell ${column.cellClass ?? ''}"
				align="${column.align ?? 'left'}"
				part="cell itemRow-cell cell-${column.name} itemRow-cell-${column.name}"
				?hidden="${column === groupOnColumn}"
				?editable="${column.editable}"
				title="${cellTitle(column, item)}"
				name="${column.name}"
			>
				${renderCell(column, { item, index, selected, expanded }, onItemChange)}
			</div>`;
		}
	);

customElements.define(
	'cosmoz-omnitable-item-row',
	component(ItemRow, { useShadowDOM: false })
);
