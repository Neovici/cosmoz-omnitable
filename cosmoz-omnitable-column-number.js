import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { translatable } from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { rangeColumnMixin } from './cosmoz-omnitable-column-range-mixin';

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
	static get template() {
		return html`
		<template class="cell">
			<div class="omnitable-cell-number">[[ getString(item, valuePath, formatter) ]]</div>
		</template>

		<template class="edit-cell">
			<paper-input no-label-float type="number" on-change="_valueChanged" value="[[ getInputString(item, valuePath) ]]"></paper-input>
		</template>

		<template class="header">
			<cosmoz-clear-button on-click="resetFilter" visible="[[ hasFilter(filter.*) ]]"></cosmoz-clear-button>
			<paper-dropdown-menu label="[[ title ]]" placeholder="[[ _filterText ]]"
				title="[[ _tooltip ]]" horizontal-align="[[ preferredDropdownHorizontalAlign ]]" opened="{{ headerFocused }}">
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">[[ title ]]</h3>
					<paper-input type="number" label="[[ _('From', t) ]]" value="{{ _filterInput.min }}"
						on-input="onBadInputFloatLabel" min="[[ _toInputString(_limit.fromMin) ]]" max="[[ _toInputString(_limit.fromMax) ]]">
					</paper-input>
					<paper-input type="number" label="[[ _('To', t) ]]" value="{{ _filterInput.max }}"
						on-input="onBadInputFloatLabel" min="[[ _toInputString(_limit.toMin) ]]" max="[[ _toInputString(_limit.toMax) ]]">
					</paper-input>
				</div>
			</paper-dropdown-menu>
		</template>
`;
	}

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
}
customElements.define(OmnitableColumnNumber.is, OmnitableColumnNumber);
