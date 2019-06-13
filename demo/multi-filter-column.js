// TODO: fix or drop
import { columnMixin } from '../cosmoz-omnitable-column-mixin';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { PolymerElement } from '@polymer/polymer/polymer-element';

class MultiFilterColumn extends columnMixin(PolymerElement) {
	static get template() {
		return html`
		<cosmoz-omnitable-templatizer id="data-templatizer">
			<template><span class="default-column">[[renderDefaultValue(item, valuePath)]]</span></template>
		</cosmoz-omnitable-templatizer>

		<cosmoz-omnitable-templatizer id="edit-data-templatizer">
			<template>
				<paper-input no-label-float="" type="text" on-change="_valueChanged" value="[[renderDefaultValue(item, valuePath)]]"></paper-input>
			</template>
		</cosmoz-omnitable-templatizer>

		<cosmoz-omnitable-templatizer id="header-templatizer">
			<template>
				<paper-input label="[[title]]" value="{{filters}}"></paper-input>
			</template>
		</cosmoz-omnitable-templatizer>
`;
	}

	static get is() {
		return 'multi-filter-column';
	}
	static get properties() {
		return {
			filters: {
				type: String,
				observer: function (newFilters) { // eslint-disable-line object-shorthand
					if (newFilters && newFilters !== '') {
						const filterArray = newFilters.split(',');
						this.filter = filterArray.filter(elem => {
							return elem !== '';
						});
					}
				}
			}
		};
	}
}
customElements.define(MultiFilterColumn.is, MultiFilterColumn);
