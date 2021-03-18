import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@neovici/cosmoz-autocomplete';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import {
	html, nothing
} from 'lit-html';

import { columnMixin } from './cosmoz-omnitable-column-mixin.js';
import { listColumnMixin } from './cosmoz-omnitable-column-list-mixin';
import {
	prop, strProp, array
} from '@neovici/cosmoz-autocomplete/lib/utils';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnAutocomplete extends listColumnMixin(columnMixin(PolymerElement)) {
	static get is() {
		return 'cosmoz-omnitable-column-autocomplete';
	}

	static get properties() {
		return {
			headerCellClass: {
				type: String,
				value: 'autocomplete-header-cell'
			},

			minWidth: {
				type: String,
				value: '55px'
			},

			editMinWidth: {
				type: String,
				value: '55px'
			}
		};
	}

	renderCell(column, { item }) {
		return html`<span class="default-column">${ column.getString(item, column.valuePath) }</span>`;
	}

	renderEditCell(column, { item }) {
		const onChange = event => {
			event.model = { item };
			return column._valueChanged(event);
		};
		return html`<paper-input
			no-label-float
			type="text"
			@change=${ onChange }
			.value=${ column.getString(item, column.valuePath) }
		></paper-input>`;
	}

	renderHeader(column) {
		const spinner = column.loading
			? html`<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active></paper-spinner-lite>`
			: nothing;

		return html`<cosmoz-autocomplete-ui
			class="external-values-${ column.externalValues }"
			.label=${ column.title }
			.source=${ column._source }
			.textProperty=${ column.textProperty }
			.value=${ column._computeValue(column.filter, column._source) }
			.text=${ column.query }
			.onChange=${ column._onChange }
			.onFocus=${ column._onFocus }
			.onText=${ column._onText }
		>${ spinner }</cosmoz-autocomplete-ui>`;
	}

	getComparableValue(item, valuePath = this.valuePath) {
		const property = this.textProperty ? strProp(this.textProperty) : prop(this.valueProperty),
			values = array(valuePath && this.get(valuePath, item)).map(property);
		return values.length > 1 ? values.filter(Boolean).join(',') : values[0];
	}
}
customElements.define(OmnitableColumnAutocomplete.is, OmnitableColumnAutocomplete);
