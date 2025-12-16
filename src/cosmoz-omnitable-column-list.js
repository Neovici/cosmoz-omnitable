import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
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
import { columnSymbol } from './lib/use-dom-columns';

import { renderLabel } from './lib/cosmoz-omnitable-dropdown-input';

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnList extends listColumnMixin(columnMixin(PolymerElement)) {
	static get properties() {
		return {
			keepOpened: { type: Boolean, value: true },
			keepQuery: { type: Boolean },
			textual: { type: Function },
		};
	}

	getConfig(column) {
		return {
			...super.getConfig?.(column),
			keepOpened: column.keepOpened,
			keepQuery: column.keepQuery,
			textual: column.textual,
		};
	}

	renderCell({ valuePath, textProperty }, { item }) {
		return html`<cosmoz-omnitable-column-list-data
			.items=${getTexts(item, valuePath, textProperty)}
		></cosmoz-omnitable-column-list-data>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) =>
			onItemChange(event.target.value.split(/,\s*/gu));

		return html`<cosmoz-input
			no-label-float
			type="text"
			.value=${getString(column, item)}
			@change=${onChange}
		></cosmoz-input>`;
	}

	renderHeader(column, { filter, query }, setState, source, sortAndGroup) {
		return html`<cosmoz-autocomplete-ui
			class="external-values-${column.externalValues}"
			?keep-opened=${column.keepOpened}
			?keep-query=${column.keepQuery}
			.textual=${column.textual}
			.column=${column}
			.label=${renderLabel(column.title, column, sortAndGroup)}
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
				() => html`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`,
			)}</cosmoz-autocomplete-ui
		>`;
	}
}

customElements.define('cosmoz-omnitable-column-list', OmnitableColumnList);
