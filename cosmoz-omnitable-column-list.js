import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html, nothing } from 'lit-html';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import {
	getString,
	getTexts,
	listColumnMixin,
	onChange,
	onFocus,
	onText,
} from './cosmoz-omnitable-column-list-mixin';
import '@neovici/cosmoz-autocomplete';

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnList extends listColumnMixin(columnMixin(PolymerElement)) {
	renderCell({ valuePath, textProperty }, { item }) {
		return html`<cosmoz-omnitable-column-list-data
			.items=${getTexts(item, valuePath, textProperty)}
			@expand=${(event) =>
				event.target.dispatchEvent(
					new CustomEvent('update-item-size', { detail: { item }, bubbles: true, composed: true })
				)}
		></cosmoz-omnitable-column-list-data>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) =>
			onItemChange(event.target.value.split(/,\s*/gu));

		return html`<paper-input
			no-label-float
			type="text"
			@change=${onChange}
			.value=${getString(column, item)}
		></paper-input>`;
	}

	renderHeader(column, { filter, query }, setState, source) {
		const spinner = column.loading
			? html`<paper-spinner-lite
					style="width: 20px; height: 20px;"
					suffix
					slot="suffix"
					active
			  ></paper-spinner-lite>`
			: nothing;

		return html`<cosmoz-autocomplete-ui
			class="external-values-${column.externalValues}"
			.label=${column.title}
			.source=${source}
			.textProperty=${column.textProperty}
			.value=${filter}
			.text=${query}
			.onChange=${onChange(setState)}
			.onFocus=${onFocus(setState)}
			.onText=${onText(setState)}
			>${spinner}</cosmoz-autocomplete-ui
		>`;
	}
}

customElements.define('cosmoz-omnitable-column-list', OmnitableColumnList);
