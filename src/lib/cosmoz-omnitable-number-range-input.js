import '@neovici/cosmoz-input';
import { PolymerElement } from '@polymer/polymer';
import { t } from 'i18next';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { renderDropdown } from './cosmoz-omnitable-dropdown';
import './cosmoz-omnitable-dropdown-input';
import { rangeInputMixin } from './cosmoz-omnitable-range-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class NumberRangeInput extends rangeInputMixin(
	polymerHauntedRender(PolymerElement),
) {
	static get properties() {
		return {
			maximumFractionDigits: { type: Number, value: null },
			minimumFractionDigits: { type: Number, value: null }, // browser default 0 for numbers, currency-specific or 2 for currency
			formatter: {
				type: Object,
				computed:
					'_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)',
			},
			// trigger filter updates manually
			autoupdate: { type: String, value: false },
			_filterText: {
				type: String,
				computed: '_computeFilterText(filter.*, formatter)',
			},
			headerFocused: { type: Boolean, value: false },
		};
	}

	render() {
		const onOpenedChanged = (event) => {
			this.headerFocused = event.type === 'focus';
			this._onDropdownOpenedChanged(event);
		};

		return html`
			${when(
				this.disabled,
				() => html`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText ?? ''}
					></cosmoz-omnitable-dropdown-input>
				`,
				() => html`
					<cosmoz-clear-button
						@click=${() => this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${renderDropdown({
						title: this.title,
						tooltip: this._tooltip,
						filterText: this._filterText,
						horizontalAlign: 'right',
						externalValues: this.externalValues,
						onOpenedChanged,
						content: html`
							<h3>${this.title}</h3>
							<cosmoz-input
								class=${this._fromClasses}
								type="number"
								label=${t('From')}
								.value=${this._filterInput?.min}
								@value-changed=${(event) => {
									this.set('_filterInput.min', event.detail.value);
								}}
								@blur=${(event) => this._onBlur(event)}
								@keydown=${(event) => this._onKeyDown(event)}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
							></cosmoz-input>
							<cosmoz-input
								class=${this._toClasses}
								type="number"
								label=${t('To')}
								.value=${this._filterInput?.max}
								@value-changed=${(event) => {
									this.set('_filterInput.max', event.detail.value);
								}}
								@blur=${(event) => this._onBlur(event)}
								@keydown=${(event) => this._onKeyDown(event)}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
							></cosmoz-input>
						`,
					})}
				`,
			)}
		`;
	}

	_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits) {
		const options = {
			localeMatcher: 'best fit', // chrome expects this when using custom options
		};
		if (minimumFractionDigits !== null) {
			options.minimumFractionDigits = minimumFractionDigits;
		}
		if (maximumFractionDigits !== null) {
			options.maximumFractionDigits = maximumFractionDigits;
		}
		return new Intl.NumberFormat(locale || undefined, options);
	}

	/**
	 *	 Get the comparable value of an item.
	 *
	 * @param	 {Object} item			 Item to be processed
	 * @param	 {String} valuePath	 Property path
	 * @returns {Number|void}			 Valid value or void
	 */
	getComparableValue(item, valuePath) {
		if (item == null) {
			return;
		}
		let value = item;
		if (valuePath != null) {
			value = this.get(valuePath, item);
		}
		value = this.toValue(value);
		if (value == null) {
			return;
		}

		const decimals = this.maximumFractionDigits;
		if (decimals !== null) {
			return this.toValue(value.toFixed(decimals));
		}
		return value;
	}

	renderValue(value, formatter = this.formatter) {
		const number = this.toNumber(value);
		if (number == null) {
			return;
		}
		return formatter.format(number);
	}
}

customElements.define('cosmoz-omnitable-number-range-input', NumberRangeInput);
