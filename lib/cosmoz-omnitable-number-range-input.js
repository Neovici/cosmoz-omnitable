import { _ } from '@neovici/cosmoz-i18next';
import { PolymerElement } from '@polymer/polymer';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { rangeInputMixin } from './cosmoz-omnitable-range-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class NumberRangeInput extends rangeInputMixin(polymerHauntedRender(PolymerElement)) {
	static get properties() {
		return {
			maximumFractionDigits: { type: Number, value: null },
			minimumFractionDigits: { type: Number, value: null }, // browser default 0 for numbers, currency-specific or 2 for currency
			formatter: {
				type: Object,
				computed: '_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)'
			},
			// trigger filter updates manually
			autoupdate: {
				type: String,
				value: false
			},
			_filterText: {
				type: String,
				computed: '_computeFilterText(filter.*, formatter)'
			}
		};
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
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">${ this.title }</h3>
					<paper-input
						class=${ this._fromClasses }
						type="number"
						label=${ _('From') }
						.value=${ this._filterInput?.min }
						@value-changed=${ event => {
		this.set('_filterInput.min', event.detail.value);
	} }
						@input=${ event => this.onBadInputFloatLabel(event) }
						@blur=${ event => this._onBlur(event) }
						@keydown=${ event => this._onKeyDown(event) }
						min=${ this._toInputString(this._limit.fromMin) }
						max=${ this._toInputString(this._limit.fromMax) }
					></paper-input>
					<paper-input
						class=${ this._toClasses }
						type="number"
						label=${ _('To') }
						.value=${ this._filterInput?.max }
						@value-changed=${ event => {
		this.set('_filterInput.max', event.detail.value);
	} }
						@input=${ event => this.onBadInputFloatLabel(event) }
						@blur=${ event => this._onBlur(event) }
						@keydown=${ event => this._onKeyDown(event) }
						min=${ this._toInputString(this._limit.toMin) }
						max=${ this._toInputString(this._limit.toMax) }
					></paper-input>
				</div>
			</paper-dropdown-menu>
		`;
	}

	_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits) {
		const options = {
			localeMatcher: 'best fit' // chrome expects this when using custom options
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
	 * Check if label should float based on validity
	 *
	 * Number inputs can have allowed characters that aren't numbers (-,e) and won't
	 * trigger a value change and thus not float the label.
	 * However, the validity will report badInput so we can trigger a label float by
	 * setting it to something truthy but still not visible.
	 * Fixed in paper-input 3.x
	 *
	 * @param {Event} event KeyboardEvent
	 * @returns {void}
	 */
	onBadInputFloatLabel(event) {
		const paperInput = event.currentTarget;
		if (paperInput == null ||	 paperInput.tagName !== 'PAPER-INPUT') {
			return;
		}
		paperInput.placeholder = paperInput.$.nativeInput.validity.badInput ? ' ' : '';
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
