import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { repeaterMixin } from './cosmoz-omnitable-repeater-mixin';

/**
 * @polymer
 * @customElement
 * @appliesMixin repeaterMixin
 */
class OmnitableGroupRow extends repeaterMixin(PolymerElement) {
	static get template() {
		return html`
		<slot name="group-row"></slot>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-group-row';
	}

	static get properties() {
		return {
			column: {
				type: Object,
				observer: '_columnChanged'
			},

			item: {
				type: Object
			},

			selected: {
				type: Boolean,
				observer: '_selectedChanged'
			},

			folded: {
				type: Boolean,
				observer: '_foldedChanged'
			}
		};
	}

	static get observers() {
		return [
			'_itemUpdated(item.*)'
		];
	}

	get _elementType() {
		return 'div';
	}

	get _slotName() {
		return 'group-row';
	}

	constructor() {
		super();
		this.trackColumns();
	}

	_columnChanged(newColumn) {
		if (!newColumn) {
			return;
		}
		if (this.columns && this.columns.length > 0) {
			this.splice('columns', 0, 1, newColumn);
			return;
		}
		this.columns = [newColumn];
	}

	_getRenderFn(column) {
		return column.renderGroup ?? column.renderCell;
	}

	_itemUpdated(changeRecord) {
		this.forwardPathChange(changeRecord);
	}

	_selectedChanged(selected) {
		this.forwardChange('selected', selected);
	}

	_foldedChanged(folded) {
		this.forwardChange('folded', folded);
	}
}
customElements.define(OmnitableGroupRow.is, OmnitableGroupRow);
