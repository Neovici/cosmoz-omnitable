import { component, html } from 'haunted';
import { repeat } from 'lit-html/directives/repeat';
import { useRenderOnColumnUpdates } from './lib/use-render-on-column-updates';

const
	renderCell = (column, data) => column.editable
		? column.renderEditCell(column, data)
		: column.renderCell(column, data),
	ItemRow = ({ columns, groupOnColumn, item, selected, expanded }) => {
		useRenderOnColumnUpdates(columns);

		return repeat(columns, column => column.name, column => {
			return html`<div
				class="cell itemRow-cell ${ column.cellClass ?? '' }"
				?hidden=${ column === groupOnColumn }
				?editable=${ column.editable }
				title=${ column.cellTitleFn(item, column.valuePath) }
				name=${ column.name }
			>${ renderCell(column, { item, selected, expanded }) }</div>`;
		});
	};

customElements.define('cosmoz-omnitable-item-row', component(ItemRow, { useShadowDOM: false }));
