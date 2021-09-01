/* eslint-disable object-curly-newline */
import { html, component } from 'haunted';
import { repeat } from 'lit-html/directives/repeat';
import { useRenderOnColumnUpdates } from './lib/use-render-on-column-updates';
import './lib/cosmoz-omnitable-resize-nub';

const
	renderHeaderRow = ({ columns, groupOnColumn }) => {
		return repeat(columns, column => column.name, column => [
			html`<div
				class="cell ${ column.headerCellClass } header-cell"
				index="${ column.columnIndex }"
				?hidden=${ column === groupOnColumn }
				title=${ column.title }
			>${ column.renderHeader(column) }</div>`,
			html`<cosmoz-omnitable-resize-nub
				.column=${ column }
				index="${ column.columnIndex }"
			></cosmoz-omnitable-resize-nub>`
		]);
	},

	HeaderRow = ({ columns, groupOnColumn, content }) => {
		useRenderOnColumnUpdates(columns);
		return [columns && renderHeaderRow({ columns, groupOnColumn }), content];
	};

customElements.define('cosmoz-omnitable-header-row', component(HeaderRow, { useShadowDOM: false }));
