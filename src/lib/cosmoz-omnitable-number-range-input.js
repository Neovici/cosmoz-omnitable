import { PolymerElement } from '@polymer/polymer';
import { html, nothing } from 'lit-html';
import { _ } from '@neovici/cosmoz-i18next';
import '@neovici/cosmoz-input';
import { rangeInputMixin } from './cosmoz-omnitable-range-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';
import '@neovici/cosmoz-dropdown';

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
			this.headerFocused = true;
			this._onDropdownOpenedChanged(event);
		};

		const classNames = (...classes) => {
			return classes.filter(Boolean).join(' ');
		};

		return html`
			<style>
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
					min-width: 120px;
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

				cosmoz-dropdown {
					display: block;
					position: relative;
					font-family: var(--paper-font-common-base_-_font-family, inherit);
					font-size: 16px;
					font-weight: normal;
					--divider-color: var(
						--paper-input-container-color,
						rgba(0, 0, 0, 0.42)
					);
					--focused-color: var(
						--paper-input-container-focus-color,
						var(--primary-color, #3f51b5)
					);
					width: 100%;
				}

				cosmoz-dropdown::before {
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					height: 1px;
					width: 100%;
					background: var(--divider-color);
					pointer-events: none;
					transition:
						background 0.2s,
						height 0.2s;
				}

				cosmoz-dropdown::after {
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					height: 1px;
					width: 100%;
					background: var(--focused-color);
					transform-origin: center;
					transform: scaleX(0);
					pointer-events: none;
					transition:
						background 0.2s,
						transform 0.2s,
						height 0.2s;
				}

				cosmoz-dropdown.focused::after {
					transform: scaleX(1);
					height: 2px;
				}

				cosmoz-dropdown::part(button) {
					background: transparent;
					border-radius: unset;
					position: relative;
					width: 100%;
					height: 100%;
				}

				cosmoz-dropdown .dropdown-button,
				cosmoz-dropdown .filter-value {
					font-size: 16px;
					text-align: left;
					padding-bottom: 6px;
					box-sizing: border-box;
					cursor: pointer;
					color: #737373 !important;
				}

				cosmoz-dropdown .filter-value cosmoz-dropdown .filter-value {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					color: var(--paper-input-container-color, rgba(0, 0, 0, 0.54));
				}

				cosmoz-dropdown.filtered .dropdown-button {
					top: 0;
					transform: translateY(0%);
					font-size: 12px !important;
					color: var(--paper-input-container-label-color, var(--focused-color));
				}
			</style>

			<cosmoz-clear-button
				@click=${() => this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			<cosmoz-dropdown
				@focus=${onOpenedChanged}
				class=${classNames(
					this.headerFocused ? 'focused' : '',
					this._filterText ? 'filtered' : '',
				)}
				title=${this._tooltip}
			>
				<div slot="button" class="dropdown-button label">
					${this.title || this._tooltip}
				</div>

				${this._filterText
					? html`<div slot="label" class="filter-value">
							${this._filterText}
						</div>`
					: nothing}

				<div class="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${_('From')}
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
						label=${_('To')}
						.value=${this._filterInput?.max}
						@value-changed=${(event) => {
							this.set('_filterInput.max', event.detail.value);
						}}
						@blur=${(event) => this._onBlur(event)}
						@keydown=${(event) => this._onKeyDown(event)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				</div>
			</cosmoz-dropdown>
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
