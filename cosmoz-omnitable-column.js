/* eslint-disable no-return-assign */
import '@neovici/cosmoz-input';
import './ui-helpers/cosmoz-clear-button';

import {
	applySingleFilter,
	columnMixin,
	getString,
} from './cosmoz-omnitable-column-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

const onChange = (setState) => (event) =>
		setState((state) => {
			// skip the event emitted during cosmoz-input initialization
			if (state.inputValue === undefined && event.target.value === '') {
				return state;
			}

			clearTimeout(state.t);
			const t = setTimeout(
				() => setState((state) => ({ ...state, filter: state.inputValue })),
				1000,
			);
			return { ...state, inputValue: event.target.value, t };
		}),
	onBlur = (setState) => () =>
		setState((state) => ({ ...state, filter: state.inputValue })),
	onKeyDown = (setState) => (event) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			setState((state) => ({ ...state, filter: state.inputValue }));
		}
	},
	onFocus = (setState) => (event) =>
		setState((state) => ({ ...state, headerFocused: event.detail.value })),
	resetFilter = (setState) => () =>
		setState((state) => ({ ...state, filter: null, inputValue: null })),
	hasFilter = (filter) => filter != null && filter !== '';

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
			inputValue: { type: Object, notify: true },
		};
	}

	getFilterFn(column, filter) {
		if (filter == null || filter === '') {
			return;
		}
		return applySingleFilter(column, filter);
	}

	renderCell(column, { item }) {
		return html`<span class="default-column">${getString(column, item)}</span>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) => onItemChange(event.target.value);
		return html`<cosmoz-input
			no-label-float
			type="text"
			@change=${onChange}
			.value=${getString(column, item)}
		></cosmoz-input>`;
	}

	renderHeader(column, { filter, inputValue, headerFocused }, setState) {
		return html`<cosmoz-input
			label=${column.title}
			.value=${inputValue ?? filter}
			@value-changed=${onChange(setState)}
			focused=${headerFocused}
			@focused-changed=${onFocus(setState)}
			@keydown=${onKeyDown(setState)}
			@blur=${onBlur(setState)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${hasFilter(filter)}
				light
				@click=${resetFilter(setState)}
			></cosmoz-clear-button>
		</cosmoz-input>`;
	}

	legacyFilterToState(filter) {
		return { filter, inputValue: filter };
	}
}
customElements.define('cosmoz-omnitable-column', OmnitableColumn);
