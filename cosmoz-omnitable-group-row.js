/* eslint-disable object-curly-newline */
import { component } from 'haunted';
import {
	html, nothing
} from 'lit-html';

const
	renderGroupRow = (item, column) => html`<div
			title=${ column.cellTitleFn(item, column.valuePath) }
		>${ (column.renderGroup ?? column.renderCell)(column, { item }) }</div>`,

	GroupRow = ({ item, column }) => {
		return column == null
			? nothing
			: renderGroupRow(item, column);
	};

customElements.define('cosmoz-omnitable-group-row', component(GroupRow, { useShadowDOM: false }));
