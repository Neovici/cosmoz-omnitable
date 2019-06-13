import '../../../cosmoz-omnitable-repeater-mixin.js';
import { html } from '../../../../@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '../../../../@polymer/polymer/polymer-element.js';
window.Cosmoz = window.Cosmoz || {};

/**
 * @polymer
 * @customElement
 * @appliesMixin Cosmoz.OmnitableRepeaterMixin
 */
class BasicRow extends Cosmoz.OmnitableRepeaterMixin(PolymerElement) {
	static get is() {
		return 'basic-row';
	}

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

	/**
	 * @inheritdoc
	 */
	_getTemplateInstance(column) {
		return column.getTemplateInstance(
			column.editable
				? Cosmoz.OmnitableTemplatizeMixin.EDIT_TEMPLATE
				: Cosmoz.OmnitableTemplatizeMixin.CELL_TEMPLATE,
			{item: this.item}
		);
	}

	_itemUpdated(changeRecord) {
		this.forwardPathChange(changeRecord);
	}
}
customElements.define(BasicRow.is, BasicRow);

Cosmoz.BasicRow = BasicRow;
