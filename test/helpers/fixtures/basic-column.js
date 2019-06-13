import '../../../cosmoz-omnitable-column-mixin.js';
import { html } from '../../../../@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '../../../../@polymer/polymer/polymer-element.js';
class BasicColumn extends Cosmoz.OmnitableColumnMixin(PolymerElement) {
	static get is() {
		return 'basic-column';
	}

	static get template() {
		return html`
				<template class="cell" strip-whitespace>
					<span class="basic-column-cell">[[ getString(item, valuePath) ]]</span>
				</template>

				<template class="edit-cell" strip-whitespace>
					<span class="basic-column-cell">Edit: [[ getString(item, valuePath) ]]</span>
				</template>

				<template class="header" strip-whitespace>
					<span class="basic-column-header">Header</span>
				</template>
		`;
	}
}
customElements.define(BasicColumn.is, BasicColumn);
