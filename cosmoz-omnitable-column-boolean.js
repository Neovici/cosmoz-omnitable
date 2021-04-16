import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';

import { PolymerElement } from '@polymer/polymer/polymer-element';

import { columnMixin } from './cosmoz-omnitable-column-mixin';

import '@polymer/paper-spinner/paper-spinner-lite';
import '@neovici/cosmoz-autocomplete';
import {
	html, nothing
} from 'lit-html';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnBoolean extends columnMixin(PolymerElement) {
	static get is() {
		return 'cosmoz-omnitable-column-boolean';
	}

	static get properties() {
		// eslint-disable-line max-lines-per-function
		return {
			filter: {
				type: Boolean,
				notify: true,
				value: undefined
			},

			trueLabel: {
				type: String,
				value: 'True'
			},

			falseLabel: {
				type: String,
				value: 'False'
			},

			_source: {
				type: Array,
				computed: '_computeSource(trueLabel, falseLabel)'
			},

			templatetemplateWidth: {
				type: String,
				value: '60px'
			},

			/**
			 * No need to grow, as the values in a boolean column should have known fixed width
			 * @returns {String} Default flex
			 */
			flex: {
				type: String,
				value: '0'
			},
			/**
			* The value of the `cosmoz-autocomplete` input.
			*/
			query: {
				type: String,
				notify: true
			},

			cellClass: {
				type: String,
				value: 'boolean-cell'
			},

			_textProperty: {
				value: 'text'
			},

			_limit: { value: 1 }
		};
	}

	constructor() {
		super();
		this._onFocus = this._onFocus.bind(this);
		this._onChange = this._onChange.bind(this);
		this._onText = this._onText.bind(this);
	}

	renderCell(column, { item }) {
		return column.getString(item, column.valuePath);
	}

	renderEditCell(column, { item }) {
		const spinner = column.loading
			? html`<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active></paper-spinner-lite>`
			: nothing;

		return html`<cosmoz-autocomplete
				no-label-float
				.title=${ column._computeItemTooltip(column.title, item, column.valuePath) }
				.source=${ column._source }
				.textProperty=${ column._textProperty }
				.value=${ column._computeItemValue(item, column.valuePath, column._source) }
				.onChange=${ column._computeItemChange(item, column.valuePath) }
				.limit=${ column._limit }
			>${ spinner }</cosmoz-autocomplete-ui>`;
	}

	renderHeader(column) {
		const spinner = column.loading
			? html`<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active></paper-spinner-lite>`
			: nothing;

		return html`<cosmoz-autocomplete-ui
			.label=${ column.title }
			.title=${ column._computeItemTooltip(column.title, column.filter) }
			.source=${ column._source }
			.textProperty=${ column._textProperty }
			.value=${ column._computeValue(column.filter, column._source) }
			.text=${ column.query }
			.onChange=${ column._onChange }
			.onFocus=${ column._onFocus }
			.onText=${ column._onText }
			.limit=${ column._limit }
		>${ spinner }</cosmoz-autocomplete-ui>`;
	}

	/**
	 * Get column represented as a string.
	 * @param {object} item Column data.
	 * @param {string} valuePath Value path in column data.
	 * @returns {void|string} Column in string format.
	 */
	getString(item, valuePath) {
		const value = this.get(valuePath || this.valuePath, item);
		return value ? this.trueLabel : this.falseLabel;
	}

	/**
	 * Get a filter function for the column.
	 * @returns {void|function} Filter function.
	 */
	getFilterFn() {
		if (this.filter == null) {
			return;
		}
		return this._applySingleFilter.bind(this, this.filter);
	}

	/**
	 * Determine if a filter should be enabled or not.
	 * @param {string} filter Filter text.
	 * @param {object} item Column data.
	 * @returns {boolean} Whether the filter should be enabled or not.
	 */
	_applySingleFilter(filter, item) {
		return this.get(this.valuePath, item) === filter;
	}

	_serializeFilter(filter = this.filter) {
		if (filter == null || filter === '') {
			return null;
		}
		return this._serializeValue(filter ? 'true' : 'false');
	}

	_deserializeFilter(obj) {
		const value = this._deserializeValue(obj, String);

		if (value === 'true') {
			return true;
		}

		if (value === 'false') {
			return false;
		}

		return null;
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		return this.get(valuePath, item) ? this.trueLabel : this.falseLabel;
	}

	/**
	 * Get a list of suggestions for the column header.
	 * @param {string} trueLabel True label.
	 * @param {string} falseLabel False label.
	 * @returns {array} Suggestions remapped for the column header.
	 */
	_computeSource(trueLabel, falseLabel) {
		return [
			{
				text: trueLabel,
				value: true
			},
			{
				text: falseLabel,
				value: false
			}
		];
	}

	_computeValue(value, source = this._source) {
		return source.find(({ value: valueProp }) => value === valueProp);
	}

	_computeItemValue(item, valuePath = this.valuePath, source) {
		return this._computeValue(
			this.get(valuePath, item),
			source
		);
	}

	_computeTooltip(title, value, source = this._source) {
		const val = this._computeValue(value, source);
		return val ? val.text : title;
	}

	_computeItemTooltip(title, item, valuePath, source) {
		return this._computeTooltip(
			title,
			this.get(valuePath || this.valuePath, item),
			source
		);
	}

	_computeItemChange(item, valuePath = this.valuePath) {
		return selection => {
			const value = selection?.[0]?.value,
				oldValue = this.get(valuePath, item),
				formatFn = value => {
					return value ? this.trueLabel : this.falseLabel;
				};
			if (value === oldValue) {
				return;
			}
			this.set(valuePath, value, item);
			this._fireItemChangeEvent(
				item,
				this.valuePath,
				oldValue,
				formatFn.bind(this)
			);
		};
	}

	_onChange(selection) {
		this.filter = selection?.[0]?.value ?? null;
	}

	_onFocus(focused) {
		this.headerFocused = focused;
	}

	_onText(text) {
		this.query = text;
	}

}
customElements.define(OmnitableColumnBoolean.is, OmnitableColumnBoolean);
