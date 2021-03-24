import { html } from 'lit-html';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { columnMixin } from '../../../cosmoz-omnitable-column-mixin';

class BasicColumn extends columnMixin(PolymerElement) {
	renderCell(column, { item }) {
		return html`<span class="basic-column-cell">${ column.getString(item, column.valuePath) }</span>`;
	}
	renderEditCell(column, { item }) {
		return html`<span class="basic-column-cell">Edit: ${ column.getString(item, column.valuePath) }</span>`;
	}
	renderHeader() {
		return html`<span class="basic-column-header">Header</span>`;
	}
}
customElements.define('basic-column', BasicColumn);
