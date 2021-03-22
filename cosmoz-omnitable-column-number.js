import '@polymer/paper-input/paper-input';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

import {
	translatable, _
} from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { rangeColumnMixin } from './cosmoz-omnitable-column-range-mixin';
import { ifDefined } from 'lit-html/directives/if-defined';

/**
 * @polymer
 * @customElement
 * @appliesMixin rangeColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnNumber extends rangeColumnMixin(
	columnMixin(
		translatable(
			PolymerElement
		)
	)
) {
	static get is() {
		return 'cosmoz-omnitable-column-number';
	}

	static get properties() {
		return {
			cellClass: {
				type: String,
				value: 'number-cell align-right'
			},
			width: {
				type: String,
				value: '30px'
			},
			editWidth: {
				type: String,
				value: '30px'
			},
			headerCellClass: {
				type: String,
				value: 'number-header-cell'
			},
			maximumFractionDigits: {
				type: Number,
				value: null
			},
			minimumFractionDigits: {
				type: Number,
				value: null // browser default 0 for numbers, currency-specific or 2 for currency
			},
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

	renderCell(column, { item }) {
		return html`<div class="omnitable-cell-number">${ column.getString(item, column.valuePath, column.formatter) }</div>`;
	}

	renderEditCell(column, { item }) {
		const onChange = event => {
			event.model = { item };
			return column._valueChanged(event);
		};

		return html`<paper-input no-label-float type="number" @change=${ onChange } .value=${ column.getInputString(item, column.valuePath) }></paper-input>`;
	}

	// eslint-disable-next-line max-lines-per-function
	renderHeader(column) {
		const onOpenedChanged = event => {
			column.headerFocused = event.detail.value;
			column._onDropdownOpenedChanged(event);
		};

		return html`
			<style>
				paper-input > iron-icon {
					display: none;
					cursor: pointer;
				}

				paper-input.has-value > iron-icon {
					display: block;
				}

				paper-dropdown-menu {
					--iron-icon-width: 0;
				}
			</style>
			<cosmoz-clear-button @click=${ event => column.resetFilter(event) } ?visible=${ column.hasFilter() }></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${ column.title }
				placeholder=${ ifDefined(column._filterText) }
				class="external-values-${ column.externalValues }"
				title=${ column._tooltip }
				horizontal-align=${ column.preferredDropdownHorizontalAlign }
				?opened=${ column.headerFocused }
				@opened-changed=${ onOpenedChanged }
			>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">${ column.title }</h3>
					<paper-input
						class=${ column._fromClasses }
						type="number"
						label=${ _('From') }
						.value=${ column._filterInput.min }
						@value-changed=${ event => column.set('_filterInput.min', event.detail.value) }
						@input=${ event => column.onBadInputFloatLabel(event) }
						@blur=${ event => column._onBlur(event) }
						@keydown=${ event => column._onKeyDown(event) }
						min=${ column._toInputString(column._limit.fromMin) }
						max=${ column._toInputString(column._limit.fromMax) }
					>
						<iron-icon icon="clear" slot="suffix" @tap=${ event => column._clearFrom(event) }></iron-icon>
					</paper-input>
					<paper-input
						class=${ column._toClasses }
						type="number"
						label=${ _('To') }
						.value=${ column._filterInput.max }
						@value-changed=${ event => column.set('_filterInput.max', event.detail.value) }
						@input=${ event => column.onBadInputFloatLabel(event) }
						@blur=${ event => column._onBlur(event) }
						@keydown=${ event => column._onKeyDown(event) }
						min=${ column._toInputString(column._limit.toMin) }
						max=${ column._toInputString(column._limit.toMax) }
					>
						<iron-icon icon="clear" slot="suffix" @tap=${ event => column._clearTo(event) }></iron-icon>
					</paper-input>
				</div>
			</paper-dropdown-menu>
		`;
	}
}
customElements.define(OmnitableColumnNumber.is, OmnitableColumnNumber);
