import { component, html } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';

const
	renderCell = (column, data, onItemChange) => column.editable
		? column.renderEditCell(column, data, onItemChange(column, data.item))
		: column.renderCell(column, data),
	ItemRow = ({ columns, groupOnColumn, item, index, selected, expanded, onItemChange }) => {
		return repeat(columns, column => column.name, column => {
			return html`<div
				class="cell itemRow-cell ${ column.cellClass ?? '' }"
				?hidden=${ column === groupOnColumn }
				?editable=${ column.editable }
				title=${ column.cellTitleFn(column, item) }
				name=${ column.name }
			>${ renderCell(column, { item, index, selected, expanded }, onItemChange) }</div>`;
		});
	};

customElements.define('cosmoz-omnitable-item-row', component(ItemRow, { useShadowDOM: false }));
