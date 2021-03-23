import { html } from '@polymer/polymer/lib/utils/html-tag';
import { PolymerElement } from '@polymer/polymer/polymer-element';

import { repeaterMixin } from '../../../cosmoz-omnitable-repeater-mixin';

class BasicRow extends repeaterMixin(PolymerElement) {
	static get properties() {
		return {
			item: {
				type: Object
			}
		};
	}

	static get observers() {
		return [
			'_itemUpdated(item.*)'
		];
	}

	static get template() {
		return html`<slot name="item-cell"></slot>`;
	}

	get _elementType() {
		return this.__elementType || 'div';
	}

	set _elementType(value) {
		this.__elementType = value;
	}

	get _slotName() {
		return this.__slotName || 'item-cell';
	}

	set _slotName(value) {
		this.__slotName = value;
	}

	_getRenderFn(column) {
		return column.editable
			? column.renderEditCell
			: column.renderCell;
	}

	_itemUpdated(changeRecord) {
		this.forwardPathChange(changeRecord);
	}
}
customElements.define('basic-row', BasicRow);
