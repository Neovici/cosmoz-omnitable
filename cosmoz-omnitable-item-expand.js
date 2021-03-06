/* eslint-disable object-curly-newline */
import { component, useEffect } from 'haunted';
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

		useEffect(() => {
			if (host.columns?.length > 0) {
				return;
			}

			host.setAttribute('hidden', '');
			return () => host.removeAttribute('hidden');
		}, [host.columns?.length]);

		useEffect(() => {
			if (host.expanded === true) {
				host.dispatchEvent(new CustomEvent('expanded'));
			}
		}, [host.expanded]);

		return Array.isArray(host.columns) && host.columns.length > 0 && host.expanded
			? renderExpandList(host)
			: nothing;
	};

customElements.define('cosmoz-omnitable-item-expand', component(ExpandList, { useShadowDOM: false, observedAttributes: ['expanded']}));
