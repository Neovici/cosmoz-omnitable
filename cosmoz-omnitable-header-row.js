import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { repeaterMixin } from './cosmoz-omnitable-repeater-mixin';

/**
 * @polymer
 * @customElement
 * @appliesMixin repeaterMixin
 */
class OmnitableHeaderRow extends repeaterMixin(PolymerElement) {
	static get template() {
		return html`
		<style>
			:host {
				display: flex;
				align-items: flex-end;
			}
			:host > ::slotted(*) {
				flex: 1 0.000000001px;
				padding: 0 3px;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			:host > ::slotted([hidden]),
			:host [hidden] {
				display: none !important;
			}
		</style>
		<slot name="header-cell"></slot>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-header-row';
	}

	get _elementType() {
		return 'div';
	}

	get _slotName() {
		return 'header-cell';
	}

	constructor() {
		super();
		this.trackColumns();
	}

	_getRenderFn(column) {
		return column.renderHeader;
	}

	/**
	 * @inheritdoc
	 */
	_configureElement(element, column, instance) {
		super._configureElement(element, column, instance);
		element.classList.toggle(column.headerCellClass, true);
		element.classList.toggle('header-cell', true);
		element.setAttribute('title', column.title);
	}
}
customElements.define(OmnitableHeaderRow.is, OmnitableHeaderRow);
