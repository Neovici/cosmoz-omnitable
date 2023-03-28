import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html, nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

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
import { notifyResize } from './lib/utils';
import { columnSymbol } from './lib/use-dom-columns';

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnList extends listColumnMixin(columnMixin(PolymerElement)) {
	static get properties() {
		return { keepOpened: { type: Boolean } };
	}
	renderCell({ valuePath, textProperty }, { item, index }) {
		return html`<cosmoz-omnitable-column-list-data
			.items=${getTexts(item, valuePath, textProperty)}
			@expand=${(event) => notifyResize(event.target, index)}
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

	getConfig(column) {
		return {
			keepOpened: column.keepOpened,
		};
	}

	renderHeader(column, { filter, query }, setState, source) {
		return html`<cosmoz-autocomplete-ui
			class="external-values-${column.externalValues}"
			.column=${column}
			?keep-opened=${column.keepOpened}
			.label=${column.title}
			.source=${source}
			.textProperty=${column.textProperty}
			.valueProperty=${column.valueProperty}
			.itemRenderer=${column[columnSymbol]?.itemRenderer}
			.value=${filter}
			.text=${query}
			.onChange=${onChange(setState)}
			.onFocus=${onFocus(setState)}
			.onText=${onText(setState)}
			>${when(
				column.loading,
				() => html`<paper-spinner-lite
					style="width: 20px; height: 20px; flex:none;"
					suffix
					slot="suffix"
					active
				></paper-spinner-lite>`
			)}</cosmoz-autocomplete-ui
		>`;
	}
}

customElements.define('cosmoz-omnitable-column-list', OmnitableColumnList);
