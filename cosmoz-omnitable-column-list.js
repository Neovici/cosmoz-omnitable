import '@webcomponents/shadycss/entrypoints/apply-shim';

import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import {
	html, nothing
} from 'lit-html';

import { translatable } from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { listColumnMixin } from './cosmoz-omnitable-column-list-mixin';
import '@neovici/cosmoz-autocomplete';

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnList extends listColumnMixin(
	columnMixin(translatable(PolymerElement))
) {
	static get is() {
		return 'cosmoz-omnitable-column-list';
	}

	renderCell(column, { item }) {
		return html`<cosmoz-omnitable-column-list-data
			.items=${ column.getTexts(item, column.valuePath, column.textProperty) }
		></cosmoz-omnitable-column-list-data>`;
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
}

customElements.define(OmnitableColumnList.is, OmnitableColumnList);
