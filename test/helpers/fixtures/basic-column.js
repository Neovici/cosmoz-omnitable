import { html } from '@polymer/polymer/lib/utils/html-tag';
import { PolymerElement } from '@polymer/polymer/polymer-element';

import { columnMixin } from '../../../cosmoz-omnitable-column-mixin';

class BasicColumn extends columnMixin(PolymerElement) {
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
customElements.define('basic-column', BasicColumn);
