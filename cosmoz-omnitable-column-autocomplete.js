import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@neovici/cosmoz-autocomplete';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import {
	html, nothing
} from 'lit-html';

import { columnMixin, getString } from './cosmoz-omnitable-column-mixin.js';
import { computeSource, listColumnMixin, onChange, onFocus, onText, toAutocompleteSource } from './cosmoz-omnitable-column-list-mixin';
import {
	prop, strProp, array
} from '@neovici/cosmoz-autocomplete/lib/utils';
import { columnSymbol } from './lib/use-dom-columns';
import { get } from '@polymer/polymer/lib/utils/path';

export const
	getComparableValue = ({ valuePath, textProperty, valueProperty }, item) => {
		const property = textProperty ? strProp(textProperty) : prop(valueProperty),
			values = array(valuePath && get(item, valuePath)).map(property);
		return values.length > 1 ? values.filter(Boolean).join(',') : values[0];
	};

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnAutocomplete extends listColumnMixin(columnMixin(PolymerElement)) {
	static get properties() {
		return {
			headerCellClass: { type: String, value: 'autocomplete-header-cell' },
			minWidth: { type: String, value: '55px' },
			editMinWidth: { type: String, value: '55px' }
		};
	}

	renderCell(column, { item }) {
		return html`<span class="default-column">${ column.getString(column, item) }</span>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = event => onItemChange(event.target.value);
		return html`<paper-input no-label-float type="text" @change=${ onChange } .value=${ getString(column, item) }></paper-input>`;
	}

	renderHeader(column, { filter, query }, setState, source) {
		const
			spinner = column.loading
				? html`<paper-spinner-lite style="width: 20px; height: 20px; flex: none;" suffix slot="suffix" active></paper-spinner-lite>`
				: nothing;

		return html`<cosmoz-autocomplete-ui
			class="external-values-${ column.externalValues }"
			.label=${ column.title }
			.source=${ toAutocompleteSource(source, column.valueProperty, column.textProperty) }
			.textProperty=${ column.textProperty }
			.valueProperty=${ column.valueProperty }
			.itemRenderer=${column[columnSymbol]?.itemRenderer}
			.value=${ filter }
			.text=${ query }
			.onChange=${ onChange(setState) }
			.onFocus=${ onFocus(setState) }
			.onText=${ onText(setState) }
		>${ spinner }</cosmoz-autocomplete-ui>`;
	}

	getComparableValue(column, item) {
		return getComparableValue(column, item);
	}

	computeSource(column, data) {
		return column.externalValues || typeof column.values === 'function'
			? column.values
			: computeSource(column, data);
	}

}
customElements.define('cosmoz-omnitable-column-autocomplete', OmnitableColumnAutocomplete);
