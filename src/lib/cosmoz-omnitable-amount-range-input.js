import { t } from 'i18next';
import { PolymerElement } from '@polymer/polymer';
import { html } from 'lit-html';
import '@neovici/cosmoz-input';
import { rangeInputMixin } from './cosmoz-omnitable-range-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';
import { renderDropdown } from './cosmoz-omnitable-dropdown';

class AmountRangeInput extends rangeInputMixin(
	polymerHauntedRender(PolymerElement),
) {
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
			_filterText: {
				type: String,
				computed: '_computeFilterText(filter.*, _formatters)',
			},
			headerFocused: { type: Boolean, value: false },
		};
	}

	static get observers() {
		return ['_valuesChanged(autodetect, currency, values)'];
	}

	render() {
		const onOpenedChanged = (event) => {
			this.headerFocused = event.type === 'focus';
			this._onDropdownOpenedChanged(event);
		};

		return html`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 150px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${() => this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${renderDropdown({
				title: this.title,
				tooltip: this._tooltip,
				filterText: this._filterText,
				headerFocused: this.headerFocused,
				horizontalAlign: 'right',
				externalValues: this.externalValues,
				onOpenedChanged,
				content: html`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${t('Minimum amount')}
						label=${t('Min amount')}
						.value=${this._filterInput?.min}
						@value-changed=${(event) => {
							this.set('_filterInput.min', event.detail.value);
						}}
						@blur=${(event) => this._onBlur(event)}
						@keydown=${(event) => this._onKeyDown(event)}
						min=${this._toInputStringAmount(this._limit.fromMin)}
						max=${this._toInputStringAmount(this._limit.fromMax)}
					>
						<div slot="suffix" suffix>${this.filter?.min?.currency}</div>
					</cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						title=${t('Maximum amount')}
						label=${t('Max amount')}
						.value=${this._filterInput?.max}
						@value-changed=${(event) => {
							this.set('_filterInput.max', event.detail.value);
						}}
						@blur=${(event) => this._onBlur(event)}
						@keydown=${(event) => this._onKeyDown(event)}
						min=${this._toInputStringAmount(this._limit.toMin)}
						max=${this._toInputStringAmount(this._limit.toMax)}
					>
						<div slot="suffix" suffix>${this.filter?.max?.currency}</div>
					</cosmoz-input>
				`,
			})}
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
	toAmount(value, limit, limitFunc) {
		if (value == null || value === '') {
			return;
		}

		if (
			typeof value !== 'object' ||
			value.currency == null ||
			value.currency === ''
		) {
			return null;
		}

		const number = this.toNumber(value.amount);
		if (number == null || Number.isNaN(number)) {
			return null;
		}
		const amount = { currency: value.currency, amount: number };

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
			formatters = (this._formatters = this._formatters || {});
		if (formatters[key]) {
			return formatters[key];
		}

		formatters[key] = new Intl.NumberFormat(locale || undefined, {
			style: 'currency',
			currency,
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
		return this.getFormatter(amount.currency, this.locale).format(value.amount);
	}

	_amountValueChanged(event) {
		const input = event.target,
			value = input.value,
			item = event.model.item,
			originalValue = this.get(this.valuePath, item),
			amountValue = Number(value),
			newValue = { amount: amountValue, currency: originalValue.currency };

		this.set(this.valuePath, newValue, item);
		this._fireItemChangeEvent(
			item,
			this.valuePath,
			originalValue,
			this.renderValue.bind(this),
		);
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
		const toCurrency =
			(this.toNumber(amount.amount) * (rates[amount.currency] || 1)) /
			(rates[this.currency] || 1);
		return toCurrency.toFixed(2);
	}

	_fromInputString(value, property) {
		const number = this.toNumber(value);
		if (number == null) {
			return;
		}
		return this.toValue({
			amount: number,
			currency:
				(property && this.get(['filter', property, 'currency'])) ||
				this.currency,
		});
	}
}

customElements.define('cosmoz-omnitable-amount-range-input', AmountRangeInput);
