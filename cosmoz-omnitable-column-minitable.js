/* eslint-disable no-return-assign */
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-input/paper-input';
import './ui-helpers/cosmoz-clear-button';

import {
	applySingleFilter,
	columnMixin,
	getString,
} from './cosmoz-omnitable-column-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
import { minitableStyle } from './cosmoz-omnitable-styles';

const today = new Date('2015-08-21');

const color = (date) => {
    if(date < today){
        return 'red';
    }
    if(date > today-1){
        return 'green';
    }
    return 'yellow';
}
const onChange = (setState) => (event) =>
		setState((state) => {
			// skip the event emitted during paper-input initialization
			if (state.inputValue === undefined && event.target.value === '') {
				return state;
			}

			clearTimeout(state.t);
			const t = setTimeout(
				() => setState((state) => ({ ...state, filter: state.inputValue })),
				1000
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
class OmnitableColumnMinitable extends columnMixin(PolymerElement) {
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
		console.log(item);
		return html` <style>
				${minitableStyle}
			</style>
			<div class="minitable-block">
				<div id="supplier">${item.name}</div>
				<br />
				<div class="amount-date">
					<div id="amount">
						${item.amount?.amount + ' ' + item.amount?.currency}
					</div>
					<div id="dueDate" style="color: ${color(item.date)}">${item.dateJSON}</div>
				</div>
			</div>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) => onItemChange(event.target.value);
		return html`<paper-input
			no-label-float
			type="text"
			@change=${onChange}
			.value=${getString(column, item)}
		></paper-input>`;
	}

	renderHeader(column, { filter, inputValue, headerFocused }, setState) {
		return html`<paper-input
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
		</paper-input>`;
	}

	legacyFilterToState(filter) {
		return { filter, inputValue: filter };
	}
}
customElements.define(
	'cosmoz-omnitable-column-minitable',
	OmnitableColumnMinitable
);
