import '@webcomponents/shadycss/entrypoints/apply-shim';
import '@polymer/iron-flex-layout/iron-flex-layout';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import {
	EDIT_TEMPLATE, CELL_TEMPLATE
} from './cosmoz-omnitable-templatize-mixin';
import { repeaterMixin } from './cosmoz-omnitable-repeater-mixin';

/**
 * @polymer
 * @customElement
 * @appliesMixin repeaterMixin
 */
class OmnitableItemRow extends repeaterMixin(PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				@apply --layout-horizontal;
				@apply --layout-flex;
				@apply --layout-center;
				min-width: 0;
			}

			:host > ::slotted(*) {
				flex: 1 0 auto;
				padding: 0 3px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			:host > ::slotted([hidden]),
			:host [hidden] {
				display: none !important;
			}
		</style>
		<slot name="item-cell"></slot>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-item-row';
	}

	static get properties() {
		return {
			item: {
				type: Object
			},

			selected: {
				type: Boolean,
				observer: '_selectedChanged'
			},

			expanded: {
				type: Boolean,
				observer: '_expandedChanged'
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
		return 'item-cell';
	}

	constructor() {
		super();
		this.trackColumns();
	}

	/**
	 * @inheritdoc
	 */
	_getTemplateInstance(column) {
		return column.getTemplateInstance(
			column.editable
				? EDIT_TEMPLATE
				: CELL_TEMPLATE,
			{
				item: this.item,
				selected: this.selected,
				expanded: this.expanded
			}
		);
	}

	/**
	 * @inheritdoc
	 */
	_configureElement(element, column, instance) {
		super._configureElement(element, column, instance);
		debugger;
		element.style.flexBasis = column.editable ? column.editWidth : column.width;
		element.style.minWidth = column.editable ? column.editMinWidth : column.minWidth;
		element.style.flexGrow = column.flex;
		element.style.minHeight = '0.5px';
		element.setAttribute('title', this._getCellTitle(column, this.item));
		element.setAttribute('class', this._computeItemRowCellClasses(column));
	}

	_itemUpdated(changeRecord) {
		this.forwardPathChange(changeRecord);
		this.forEachElement((element, column) => {
			element.setAttribute('title', this._getCellTitle(column, this.item));
		});
	}

	_selectedChanged(selected) {
		this.forwardChange('selected', selected);
	}

	_expandedChanged(expanded) {
		this.forwardChange('expanded', expanded);
	}

	/**
	 * Get cell title displayed when hovering on the cell.
	 * @param {object} column Column data.
	 * @param {object} item Row item.
	 * @returns {string} Cell title.
	 */
	_getCellTitle(column, item) {
		return column && column.cellTitleFn(item, column.valuePath);
	}

	_computeItemRowCellClasses(column) {
		return 'itemRow-cell'
			+ (column.cellClass ? ' ' + column.cellClass + ' ' : '')
			+ ' cosmoz-omnitable-column-' + column.__index;
	}
}
customElements.define(OmnitableItemRow.is, OmnitableItemRow);
