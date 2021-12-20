/* eslint-disable no-return-assign */
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-input/paper-input';
import './ui-helpers/cosmoz-clear-button';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { getFilterFn, renderCell, renderEditCell, renderHeader } from './lib/columns/default';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumn extends columnMixin(PolymerElement) {
	static get properties() {
		return {
			minWidth: { type: String, value: '55px' },
			editMinWidth: { type: String, value: '55px' },
			inputValue: { type: Object, notify: true }
		};
	}

	getFilterFn(column, filter) {
		return getFilterFn(column, filter);
	}

	renderCell(column, state) {
		return renderCell(column, state);
	}

	renderEditCell(column, state, onItemChange) {
		return renderEditCell(column, state, onItemChange);
	}

	renderHeader(column, state, setState) {
		return renderHeader(column, state, setState);
	}
}
customElements.define('cosmoz-omnitable-column', OmnitableColumn);
