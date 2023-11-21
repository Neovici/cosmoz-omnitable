import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@neovici/cosmoz-autocomplete';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

import { columnMixin, getString } from './cosmoz-omnitable-column-mixin.js';
import {
	listColumnMixin,
	onChange,
	onFocus,
	onText,
} from './cosmoz-omnitable-column-list-mixin';
import { prop, strProp } from '@neovici/cosmoz-utils/object';
import { array } from '@neovici/cosmoz-utils/array';

import { columnSymbol } from './lib/use-dom-columns';
import { get } from '@polymer/polymer/lib/utils/path';

export const getComparableValue = (
	{ valuePath, textProperty, valueProperty },
	item,
) => {
	const property = textProperty ? strProp(textProperty) : prop(valueProperty),
		values = array(valuePath && get(item, valuePath)).map(property);
	return values.length > 1 ? values.filter(Boolean).join(',') : values[0];
};

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnAutocomplete extends listColumnMixin(
	columnMixin(PolymerElement),
) {
	static get properties() {
		return {
			headerCellClass: { type: String, value: 'autocomplete-header-cell' },
			minWidth: { type: String, value: '55px' },
			editMinWidth: { type: String, value: '55px' },
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

	renderCell(column, { item }) {
		return html`<span class="default-column"
			>${column.getString(column, item)}</span
		>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) => onItemChange(event.target.value);
		return html`<cosmoz-input
			no-label-float
			type="text"
			@change=${onChange}
			.value=${getString(column, item)}
		></cosmoz-input>`;
	}

	renderHeader(column, { filter, query }, setState, source) {
		return html`<cosmoz-autocomplete-ui
			class="external-values-${column.externalValues}"
			?keep-opened=${column.keepOpened}
			?keep-query=${column.keepQuery}
			.textual=${column.textual}
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
				() =>
					html`<paper-spinner-lite
						style="width: 20px; height: 20px; flex:none;"
						suffix
						slot="suffix"
						active
					></paper-spinner-lite>`,
			)}</cosmoz-autocomplete-ui
		>`;
	}

	getComparableValue(column, item) {
		return getComparableValue(column, item);
	}
}
customElements.define(
	'cosmoz-omnitable-column-autocomplete',
	OmnitableColumnAutocomplete,
);
