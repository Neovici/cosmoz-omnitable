import { html } from 'lit-html';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { columnMixin, getString } from '../../../cosmoz-omnitable-column-mixin';

class BasicColumn extends columnMixin(PolymerElement) {
	renderCell(column, { item }) {
		return html`<span class="basic-column-cell">${ getString(column, item) }</span>`;
	}
	renderEditCell(column, { item }) {
		return html`<span class="basic-column-cell">Edit: ${ getString(column, item) }</span>`;
	}
	renderHeader() {
		return html`<span class="basic-column-header">Header</span>`;
	}
}
customElements.define('basic-column', BasicColumn);
