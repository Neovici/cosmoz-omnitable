/* eslint-disable object-curly-newline */
import { component } from 'haunted';
import {
	html, nothing
} from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { useRenderOnColumnUpdates } from './lib/use-render-on-column-updates';
import './lib/cosmoz-omnitable-resize-nub';

const
	renderHeaderRow = ({ columns, groupOnColumn, resizable }) => {
		const maxPriority = columns?.reduce((p, column) => Math.max(p, column.priority), -Infinity);
		return repeat(columns, column => column.name, column => [
			html`<div
				class="cell ${ column.headerCellClass } header-cell"
				index="${ column.columnIndex }"
				?hidden=${ column === groupOnColumn }
				title=${ column.title }
			>${ column.renderHeader(column) }</div>`,
			resizable ? html`<cosmoz-omnitable-resize-nub .column=${ column } .maxPriority=${ maxPriority }></cosmoz-omnitable-resize-nub>` : nothing
		]);
	},

	HeaderRow = ({ columns, groupOnColumn, resizable }) => {
		useRenderOnColumnUpdates(columns);

		return columns == null
			? nothing
			: renderHeaderRow({ columns, groupOnColumn, resizable });
	};

customElements.define('cosmoz-omnitable-header-row', component(HeaderRow, { useShadowDOM: false }));
