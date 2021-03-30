/* eslint-disable object-curly-newline */
import { component } from 'haunted';
import {
	html, nothing
} from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';
import { guard } from 'lit-html/directives/guard';
import { useRenderOnColumnUpdates } from './lib/use-render-on-column-updates';

const
	cellClasses = column =>
		'itemRow-cell'
			+ (column.cellClass ? ' ' + column.cellClass + ' ' : '')
			+ ' cosmoz-omnitable-column-' + column.__index,

	cellStyle = column => guard(
		[column.editable, column.editWidth, column.width, column.editMinWidth, column.minWidth, column.flex],
		() => styleMap({
			flexBasis: column.editable ? column.editWidth : column.width,
			minWidth: column.editable ? column.editMinWidth : column.minWidth,
			flexGrow: column.flex,
			minHeight: '0.5px'
		})),

	renderItemRow = (item, columns, groupOnColumn) =>
		columns.map(column => html`<div
			class=${ cellClasses(column) }
			style=${ cellStyle(column) }
			?editable=${ column.editable }
			?hidden=${ column === groupOnColumn }
			title=${ column.cellTitleFn(item, column.valuePath) }
		>${ column.editable ? column.renderEditCell(column, { item }) : column.renderCell(column, { item }) }</div>`),

	ItemRow = ({ item, columns, groupOnColumn }) => {
		useRenderOnColumnUpdates(columns);

		return columns == null
			? nothing
			: renderItemRow(item, columns, groupOnColumn);
	};

customElements.define('cosmoz-omnitable-item-row', component(ItemRow, { useShadowDOM: false }));
