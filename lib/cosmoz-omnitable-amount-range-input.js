import { _ } from '@neovici/cosmoz-i18next';
import { PolymerElement } from '@polymer/polymer';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { rangeInputMixin } from './cosmoz-omnitable-range-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class AmountRangeInput extends rangeInputMixin(polymerHauntedRender(PolymerElement)) {
	static get properties() {
		return {
			/**
			 * Base Currency used in filters
			 */
			currency: { type: String },

			/**
			 * If this is set true then currency property will be the currency with highest occurrence in values
			 */
			autodetect: { type: Boolean, value: false },

			/**
			 * Exchange rates of currencies. Example: {"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
			 * Default exchange rate is 1 and it is used for every currency that is present on column values but missing from exchange rates object.
			 */
			rates: { type: Object },
			// trigger filter updates manually
			autoupdate: { type: String, value: false },
			_filterText: { type: String, computed: '_computeFilterText(filter.*, _formatters)' }
		};
	}

	static get observers() {
		return [
			'_valuesChanged(autodetect, currency, values)'
		];
	}

	// eslint-disable-next-line max-lines-per-function
	render() {
		const onOpenedChanged = event => {
			this.headerFocused = event.detail.value;
			this._onDropdownOpenedChanged(event);
		};

		return html`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}
			</style>
			<cosmoz-clear-button @click=${ () => this.resetFilter() } ?visible=${ this.hasFilter() }></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${ this.title }
				placeholder=${ ifDefined(this._filterText) }
				class="external-values-${ this.externalValues }"
				title=${ this._tooltip }
				horizontal-align="right"
				?opened=${ this.headerFocused }
				@opened-changed=${ onOpenedChanged }
			>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 150px;">
					<h3 style="margin: 0;">${ this.title }</h3>
					<paper-input
						class=${ this._fromClasses }
						type="number"
						label=${ _('Min amount') }
						title=${ _('Minimum amount') }
						.value=${ this._filterInput?.min }
						@value-changed=${ event => {
		this.set('_filterInput.min', event.detail.value);
	} }
						@blur=${ event => this._onBlur(event) }
						@keydown=${ event => this._onKeyDown(event) }
						min=${ this._toInputStringAmount(this._limit.fromMin) }
						max=${ this._toInputStringAmount(this._limit.fromMax) }
					><div slot="suffix" suffix>${ this.filter?.min?.currency }</div></paper-input>
					<paper-input
						class=${ this._toClasses }
						type="number"
						label=${ _('Max amount') }
						title=${ _('Maximum amount') }
						.value=${ this._filterInput?.max }
						@value-changed=${ event => {
		this.set('_filterInput.max', event.detail.value);
	} }
						@blur=${ event => this._onBlur(event) }
						@keydown=${ event => this._onKeyDown(event) }
						min=${ this._toInputStringAmount(this._limit.toMin) }
						max=${ this._toInputStringAmount(this._limit.toMax) }
					><div slot="suffix" suffix>${ this.filter?.max?.currency }</div></paper-input>
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
}


customElements.define('cosmoz-omnitable-amount-range-input', AmountRangeInput);
