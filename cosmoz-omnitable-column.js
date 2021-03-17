/* eslint-disable no-return-assign */
import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-input/paper-input';
import './ui-helpers/cosmoz-clear-button';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { timeOut } from '@polymer/polymer/lib/utils/async.js';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { enqueueDebouncer } from '@polymer/polymer/lib/utils/flush.js';
import { html } from 'lit-html';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumn extends columnMixin(PolymerElement) {
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

	renderCell(column, { item }) {
		return html`<span class="default-column">${ column.getString(item, column.valuePath) }</span>`;
	}

	renderEditCell(column, { item }) {
		const onChange = event => {
			event.model = { item };
			return column._valueChanged(event);
		};
		return html`<paper-input no-label-float type="text" @change=${ onChange } .value=${ column.getString(item, column.valuePath) }></paper-input>`;
	}

	renderHeader(column) {
		return html`<paper-input
			label=${ column.title }
			.value=${ column.inputValue }
			@value-changed=${ event => column.inputValue = event.target.value }
			focused=${ column.headerFocused }
			@focused-changed=${ event => column.headerFocused = event.detail.value }
			@keydown=${ column._onKeyDown }
			@blur=${ column._onBlur }
		>
			<cosmoz-clear-button suffix slot="suffix" ?visible=${ column.hasFilter() } light @click=${ () => column.resetFilter() }></cosmoz-clear-button>
		</paper-input>`;
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

	__filterChanged(change) {
		super.__filterChanged(change);
		if (change.value != null && change.value !== this.inputValue) {
			this.inputValue = change.value;
		}
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
