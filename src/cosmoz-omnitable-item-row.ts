import { component, html } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import type { Column, ItemRenderData } from './lib/types';

const renderCell = (
	column: Column,
	data: ItemRenderData,
	onItemChange: (column: Column, item: object) => (value: unknown) => void,
) =>
	column.editable
		? column.renderEditCell!(column, data, onItemChange(column, data.item))
		: column.renderCell!(column, data);

interface ItemRowProps {
	columns: Column[];
	groupOnColumn?: Column;
	item: object;
	index?: number;
	selected: boolean;
	expanded?: boolean;
	onItemChange: (column: Column, item: object) => (value: unknown) => void;
}

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
		(column: Column) => column.name!,
		(column: Column) => {
			return html`<div
				class="cell itemRow-cell ${column.cellClass ?? ''}"
				part="cell itemRow-cell cell-${column.name} itemRow-cell-${column.name}"
				?hidden="${column === groupOnColumn}"
				?editable="${column.editable}"
				title="${column.cellTitleFn!(column, item)}"
				name="${column.name}"
			>
				${renderCell(column, { item, index, selected, expanded }, onItemChange)}
			</div>`;
		},
	);

customElements.define(
	'cosmoz-omnitable-item-row',
	component(ItemRow, { useShadowDOM: false }),
);
