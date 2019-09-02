import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-input/paper-input';
import './ui-helpers/cosmoz-clear-button';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { timeOut } from '@polymer/polymer/lib/utils/async.js';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { enqueueDebouncer } from '@polymer/polymer/lib/utils/flush.js';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumn extends columnMixin(PolymerElement) {
	static get template() {
		return html`
		<template class="cell" strip-whitespace>
			<span class="default-column">[[ getString(item, valuePath) ]]</span>
		</template>

		<template class="edit-cell" strip-whitespace>
			<paper-input no-label-float type="text" on-change="_valueChanged" value="[[ getString(item, valuePath) ]]">
			</paper-input>
		</template>

		<template class="header" strip-whitespace>
			<paper-input label="[[ title ]]" value="{{ inputValue }}" focused="{{ headerFocused }}" on-keydown="_onKeyDown" on-blur="_onBlur">
				<cosmoz-clear-button suffix slot="suffix" visible="[[ hasFilter(filter.*) ]]" light on-click="resetFilter"></cosmoz-clear-button>
			</paper-input>
		</template>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column';
	}

	static get properties() {
		return {
			minWidth: {
				type: String,
				value: '55px'
			},

			editMinWidth: {
				type: String,
				value: '55px'
			},

			inputValue: {
				type: Object,
				notify: true,
				value() {
					return this._getDefaultFilter();
				},
				observer: '_inputValueValueChanged'
			},

			_timeForNoInput: {
				type: Number,
				value: 1000
			}
		};
	}

	_serializeFilter(filter = this.filter) {
		return filter || null;
	}

	_deserializeFilter(obj) {
		return obj || null;
	}

	resetFilter() {
		this.filter = null;
		this.inputValue = null;
	}

	_onBlur() {
		this.filter = this.inputValue;
	}

	_onKeyDown(event) {
		switch (event.keyCode) {
		case 13: // Enter
			event.preventDefault();
			this.filter = this.inputValue;
			break;
		}
	}

	_inputValueValueChanged() {
		if (this.inputValue === '') {
			this.filter = this.inputValue;
			return;
		}
		this._debouncer = Debouncer.debounce(this._debouncer,
			timeOut.after(this._timeForNoInput),
			() => {
				this.filter = this.inputValue;
			});
		enqueueDebouncer(this._debouncer);
	}
}
customElements.define(OmnitableColumn.is, OmnitableColumn);
