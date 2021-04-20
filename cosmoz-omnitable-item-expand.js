/* eslint-disable object-curly-newline */
import { component } from 'haunted';
import {
	html, nothing
} from 'lit-html';
import { useRenderOnColumnUpdates } from './lib/use-render-on-column-updates';
import './cosmoz-omnitable-item-expand-line';

const
	renderExpandList = ({ columns, item, selected, expanded, groupOnColumn }) =>
		columns.map(column => html`<cosmoz-omnitable-item-expand-line
			.column=${ column }
			?hidden=${ column === groupOnColumn }
			exportparts="item-expand-label,item-expand-value"
		>${ column.renderCell(column, { item, selected, expanded }) }</cosmoz-omnitable-item-expand-line>`),

	ExpandList = host => {
		useRenderOnColumnUpdates(host.columns);

		return host.columns == null || !host.expanded
			? nothing
			: renderExpandList(host);
	};

customElements.define('cosmoz-omnitable-item-expand', component(ExpandList, { useShadowDOM: false, observedAttributes: ['expanded']}));
