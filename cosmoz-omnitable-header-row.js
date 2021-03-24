/* eslint-disable object-curly-newline */
import { component } from 'haunted';
import {
	html, nothing
} from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { useRenderOnColumnUpdates } from './lib/use-render-on-column-updates';

const
	style = html`<style>
		cosmoz-omnitable-header-row {
			display: flex;
			align-items: flex-end;
		}
		cosmoz-omnitable-header-row > div {
			flex: 1 0.000000001px;
			padding: 0 3px;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		cosmoz-omnitable-header-row > div[hidden] {
			display: none !important;
		}
	</style>`,

	renderHeaderRow = (columns, groupOnColumn) => [
		style,
		repeat(columns, column => column.name, column => html`<div
			class="${ column.headerCellClass } header-cell"
			?hidden=${ column === groupOnColumn }
			title=${ column.title }
		>${ column.renderHeader(column) }</div>`)
	],

	HeaderRow = ({ columns, groupOnColumn }) => {
		useRenderOnColumnUpdates(columns);

		return columns == null
			? nothing
			: renderHeaderRow(columns, groupOnColumn);
	};

customElements.define('cosmoz-omnitable-header-row', component(HeaderRow, { useShadowDOM: false }));
