import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/paper-input/paper-input';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';

import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { translatable } from '@neovici/cosmoz-i18next';
import { dateColumnMixin } from './cosmoz-omnitable-column-date-mixin';
import { columnMixin } from './cosmoz-omnitable-column-mixin';

/**
 * @polymer
 * @customElement
 * @appliesMixin dateColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnDate extends dateColumnMixin(columnMixin(translatable(
	PolymerElement
))) {
	static get template() {
		return html`
		<template class="cell" strip-whitespace>
			[[ getString(item, valuePath, formatter) ]]
		</template>

		<template class="edit-cell" strip-whitespace>
			<paper-input no-label-float type="date" on-change="_dateValueChanged" value="[[ getInputString(item, valuePath) ]]">
			</paper-input>
		</template>

		<template class="header" strip-whitespace>
			<cosmoz-clear-button on-click="resetFilter" visible="[[ hasFilter(filter.*) ]]"></cosmoz-clear-button>
			<paper-dropdown-menu label="[[ title ]]" placeholder="[[ _filterText ]]"
				class$="external-values-[[ externalValues ]]"
				title="[[ _tooltip ]]" horizontal-align="[[ preferredDropdownHorizontalAlign ]]" opened="{{ headerFocused }}">
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">[[ title ]]</h3>
					<paper-input type="date" label="[[ _('From date', t) ]]"
						min="[[ _toInputString(_limit.fromMin) ]]" max="[[ _toInputString(_limit.fromMax) ]]" value="{{ _filterInput.min }}">
					</paper-input>
					<paper-input type="date" label="[[ _('Until date', t) ]]"
						min="[[ _toInputString(_limit.toMin) ]]" max="[[ _toInputString(_limit.toMax) ]]" value="{{ _filterInput.max }}">
					</paper-input>
				</div>
			</paper-dropdown-menu>
		</template>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column-date';
	}

	static get properties() {
		return {
			headerCellClass: {
				type: String,
				value: 'date-header-cell'
			},
			minWidth: {
				type: String,
				value: '82px'
			},
			editMinWidth: {
				type: String,
				value: '82px'
			}
		};
	}

	_fromInputString(value, property) {
		const date = this.toDate(value);
		if (date == null) {
			return;
		}
		if (property === 'min') {
			date.setHours(0, 0, 0, 0);
		}
		if (property === 'max') {
			date.setHours(23, 59, 59);
		}
		return date;
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		const date = this.toValue(this.get(valuePath, item));
		if (!date) {
			return '';
		}
		const localDate = this.toValue(this._toLocalISOString(date));
		localDate.setHours(0, 0, 0, 0);
		return localDate;
	}

	_filterInputChanged(change, autoupdate) {
		const path = change.path.split('.')[1],
			value = path && change.value;

		// don't trigger change when date input begins with 0; Year (starting from 0000) was limited before the needed value was typed.
		if (value && value.match(/^0+/u)) {
			this._limitInputDebouncer.cancel();
			return;
		}
		super._filterInputChanged(change, autoupdate);
	}
}
customElements.define(OmnitableColumnDate.is, OmnitableColumnDate);
