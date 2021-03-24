/* eslint-disable no-return-assign */
import '@polymer/paper-input/paper-input';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { rangeColumnMixin } from './cosmoz-omnitable-column-range-mixin';
import {
	translatable, _
} from '@neovici/cosmoz-i18next';


/**
 * @polymer
 * @customElement
 * @appliesMixin rangeColumnMixin
 * @appliesMixin columnMixin
 * @appliesMixin translatable
 */
class OmnitableColumnAmount extends rangeColumnMixin(columnMixin(translatable(
	PolymerElement
))) {
	static get is() {
		return 'cosmoz-omnitable-column-amount';
	}
	static get observers() {
		return [
			'_valuesChanged(autodetect, currency, values)'
		];
	}
	static get properties() {
		return {
			/**
			 * Base Currency used in filters
			 */
			currency: {
				type: String
			},

			/**
			 * If this is set true then currency property will be the currency with highest occurrence in values
			 */
			autodetect: {
				type: Boolean,
				value: false
			},

			/**
			 * Exchange rates of currencies. Example: {"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
			 * Default exchange rate is 1 and it is used for every currency that is present on column values but missing from exchange rates object.
			 */
			rates: {
				type: Object
			},
			width: {
				type: String,
				value: '70px'
			},
			editWidth: {
				type: String,
				value: '70px'
			},

			cellClass: {
				type: String,
				value: 'amount-cell align-right'
			},
			headerCellClass: {
				type: String,
				value: 'amount-header-cell'
			},
			// trigger filter updates manually
			autoupdate: {
				type: String,
				value: false
			},
			_filterText: {
				type: String,
				computed: '_computeFilterText(filter.*, _formatters)'
			}
		};
	}

	renderCell(column, { item }) {
		return html`<span>${ column.getString(item, column.valuePath, column.locale) }</span>`;
	}

	renderEditCell(column, { item }) {
		const onChange = event => {
			event.model = { item };
			return column._amountValueChanged(event);
		};
		return html`<paper-input no-label-float type="number" @change=${ onChange } .value=${ column.getInputString(item, column.valuePath) }>
			<div suffix>${ column.getCurrency(item, column.valuePath) }</div>
		</paper-input>`;
	}

	// eslint-disable-next-line max-lines-per-function
	renderHeader(column) {
		const onOpenedChanged = event => {
			column.headerFocused = event.detail.value;
			column._onDropdownOpenedChanged(event);
		};

		return html`
			<cosmoz-clear-button @click=${ () => column.resetFilter() } ?visible=${ column.hasFilter() }></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${ column.title }
				placeholder=${ ifDefined(column._filterText) }
				class="external-values-${ column.externalValues }"
				title=${ column._tooltip }
				horizontal-align=${ column.preferredDropdownHorizontalAlign }
				?opened=${ column.headerFocused }
				@opened-changed=${ onOpenedChanged }
			>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 150px;">
					<h3 style="margin: 0;">${ column.title }</h3>
					<paper-input
						class=${ column._fromClasses }
						type="number"
						label=${ _('Min amount') }
						title=${ _('Minimum amount') }
						.value=${ column._filterInput.min }
						@value-changed=${ event => column.set('_filterInput.min', event.detail.value) }
						@blur=${ event => column._onBlur(event) }
						@keydown=${ event => column._onKeyDown(event) }
						min=${ column._toInputStringAmount(column._limit.fromMin) }
						max=${ column._toInputStringAmount(column._limit.fromMax) }
					><div slot="suffix" suffix>${ column.filter.min?.currency }</div></paper-input>
					<paper-input
						class=${ column._toClasses }
						type="number"
						label=${ _('Max amount') }
						title=${ _('Maximum amount') }
						.value=${ column._filterInput.max }
						@value-changed=${ event => column.set('_filterInput.max', event.detail.value) }
						@blur=${ event => column._onBlur(event) }
						@keydown=${ event => column._onKeyDown(event) }
						min=${ column._toInputStringAmount(column._limit.toMin) }
						max=${ column._toInputStringAmount(column._limit.toMax) }
					><div slot="suffix" suffix>${ column.filter.max?.currency }</div></paper-input>
				</div>
			</paper-dropdown-menu>
		`;
	}

	/**
	 * Auto-detect currency property: Most frequently occurring currency
	 * @param {boolean} autodetect Whether the currency property will be the currency with highest occurrence in values or not.
	 * @param {string} currency Base currency used in filters.
	 * @param {Array} values Array of amounts
	 * @returns {void}
	 */
	_valuesChanged(autodetect, currency, values) {
		if (!Array.isArray(values) || values.length < 1) {
			return;
		}
		if (!autodetect && currency) {
			return;
		}
		// array with currencies as keys and occurence as value
		const currencies = values.reduce((p, n) => {
			if (n.currency) {
				const c = n.currency;
				p[c] = (p[c] || 0) + 1;
			}
			return p;
		}, {});

		let key = Object.keys(currencies)[0];
		Object.keys(currencies).reduce((p, n) => {
			const max = Math.max(p, currencies[n]);
			if (max === currencies[n]) {
				key = n;
			}
			return max;
		}, 0);
		this.set('currency', key);
	}

	/**
	 * Converts a value to an amount object optionaly limiting it.
	 *
	 * @param {Object} value The value to convert to number
	 * @param {Object} limit The value used to limit the number
	 * @param {Function} limitFunc The function used to limit the number (Math.min|Math.max)
	 * @returns {Object|void} Value converted to Number or void
	 */
	toAmount(value, limit, limitFunc) { // eslint-disable-line max-statements
		if (value == null || value === '') {
			return;
		}

		if (typeof value !== 'object' || value.currency == null || value.currency === '') {
			return null;
		}

		const number = this.toNumber(value.amount);
		if (number == null || Number.isNaN(number)) {
			return null;
		}
		const amount = {
			currency: value.currency,
			amount: number
		};

		if (limitFunc == null || limit == null) {
			return amount;
		}
		const lAmount = this.toAmount(limit);
		if (lAmount == null) {
			return amount;
		}

		// calculate value and limit amounts with rates
		const rates = this.rates || {},
			valAmount = amount.amount * (rates[amount.currency] || 1),
			limAmount = lAmount.amount * (rates[lAmount.currency] || 1),
			lNumber = this.toNumber(valAmount, limAmount, limitFunc);
		return lNumber === valAmount ? amount : lAmount;
	}

	toValue() {
		return this.toAmount.apply(this, arguments);
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		return this.getString(item, valuePath);
	}

	/**
	 * Get the comparable value of an item.
	 *
	 * @param {Object} item Item to be processed
	 * @param {String} valuePath Property path
	 * @returns {Number|void} Valid value or void
	 */
	getComparableValue(item, valuePath) {
		const value = super.getComparableValue(item, valuePath);

		if (value == null) {
			return;
		}
		const amount = this.toNumber(value.amount),
			rates = this.rates;

		if (rates == null) {
			return amount;
		}

		return amount * (rates[value.currency] || 1);
	}
	getString(item, valuePath = this.valuePath) {
		const value = this.toValue(this.get(valuePath, item));
		if (value === undefined) {
			return '';
		}
		if (value === null) {
			return 'Invalid value';
		}
		return this.renderValue(value);
	}

	getCurrency(item, valuePath) {
		const value = this.get(valuePath, item);
		return value && value.currency;
	}

	getFormatter(currency, locale) {
		const id = locale ? locale : '',
			key = currency + id || '',
			formatters = this._formatters = this._formatters || {};
		if (formatters[key]) {
			return formatters[key];
		}

		formatters[key] = new Intl.NumberFormat(locale || undefined, {
			style: 'currency',
			currency
		});

		return formatters[key];
	}
	/**
	 * Converts an amount to symbol and value to be rendered.
	 *
	 * @param {Object} value Amount to be formated
	 * @param {Object} _formatters = this._formatters All possible formatters.
	 * @returns {String} Formated value or empty string.
	 */
	renderValue(value) {
		const amount = this.toAmount(value);
		if (amount == null) {
			return '';
		}
		return this.getFormatter(amount.currency, this.locale)
			.format(value.amount);
	}

	_amountValueChanged(event) {
		const input = event.target,
			value = input.value,
			item = event.model.item,
			originalValue = this.get(this.valuePath, item),
			amountValue = Number(value),
			newValue = {
				amount: amountValue,
				currency: originalValue.currency
			};

		this.set(this.valuePath, newValue, item);
		this._fireItemChangeEvent(item, this.valuePath, originalValue, this.renderValue.bind(this));
	}

	_toInputString(value) {
		const amount = this.toValue(value);
		if (amount == null) {
			return null; //Need null to clear input
		}
		return this.toNumber(amount.amount);
	}

	_toInputStringAmount(value) {
		const rates = this.rates;
		if (rates == null) {
			return this._toInputString(value);
		}
		const amount = this.toValue(value);
		if (amount == null) {
			return null;
		}
		const toCurrency = this.toNumber(amount.amount) * (rates[amount.currency] || 1) / (rates[this.currency] || 1);
		return toCurrency.toFixed(2);
	}

	_fromInputString(value, property) {
		const number = this.toNumber(value);
		if (number == null) {
			return;
		}
		return this.toValue({
			amount: number,
			currency: property && this.get(['filter', property, 'currency']) || this.currency
		});
	}

	_toHashString(value) {
		if (!value) {
			return '';
		}
		return value.amount + value.currency;
	}

	_fromHashString(value) {
		if (value == null || value === '') {
			return;
		}
		const params = value.match(/^(-?[\d]+)([\D]+?)$/iu);
		if (!Array.isArray(params) || params.length < 0) {
			return null;
		}
		return {
			amount: params[1],
			currency: params[2]
		};
	}
}

customElements.define(OmnitableColumnAmount.is, OmnitableColumnAmount);
