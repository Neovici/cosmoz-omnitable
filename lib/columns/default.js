import { html } from 'lit-html';
import { get } from '@polymer/polymer/lib/utils/path';

const
	getString = ({ valuePath }, item) => get(item, valuePath),
	toXlsxValue = getString,
	getComparableValue = getString,
	cellTitleFn = getString,
	applySingleFilter = ({ valuePath }, filter) => item => {
		const value = get(item, valuePath);
		if (value == null) {
			return false;
		}
		return value.toString().toLowerCase().includes(filter.toLowerCase());
	},
	getFilterFn = (column, filter) =>
		filter == null || filter === ''
			? undefined
			: applySingleFilter(column, filter),

	serializeFilter = (column, filter) => filter === '' || filter == null ? null : filter,
	deserializeFilter = (column, filter) => filter,

	renderCell = (column, { item }) => html`<span class="default-column">${ getString(column, item) }</span>`,

	renderEditCell = (column, { item }, onItemChange) => {
		const onChange = event => onItemChange(event.target.value);
		return html`<paper-input no-label-float type="text" @change=${ onChange } .value=${ getString(column, item) }></paper-input>`;
	},

	onChange = setState => event => setState(state => {
		clearInterval(state.t);
		const t = setTimeout(() => setState(state => ({ ...state, filter: state.inputValue })), 1000);
		return { ...state, inputValue: event.target.value, t };
	}),

	onBlur = setState => () =>
		setState(state => ({ ...state, filter: state.inputValue })),

	onKeyDown = setState => event => {
		if (event.keyCode === 13) {
			event.preventDefault();
			setState(state => ({ ...state, filter: state.inputValue }));
		}
	},

	onFocus = setState => event =>
		setState(state => ({ ...state, headerFocused: event.detail.value })),

	resetFilter = setState => () =>
		setState(state => ({ ...state, filter: undefined, inputValue: undefined })),

	hasFilter = filter => filter != null && filter !== '',

	renderHeader = (column, { filter, inputValue, headerFocused }, setState) =>
		html`<paper-input
			label=${ column.title }
			.value=${ inputValue ?? filter }
			@value-changed=${ onChange(setState) }
			focused=${ headerFocused }
			@focused-changed=${ onFocus(setState) }
			@keydown=${ onKeyDown(setState) }
			@blur=${ onBlur(setState) }
		>
			<cosmoz-clear-button suffix slot="suffix" ?visible=${ hasFilter(filter) } light @click=${ resetFilter(setState) }></cosmoz-clear-button>
		</paper-input>`,

	defaultColumn = {
		minWidth: 55,
		width: 75,
		flex: 1,
		priority: 0,

		getFilterFn,
		getString,
		toXlsxValue,
		cellTitleFn,
		serializeFilter,
		deserializeFilter,
		getComparableValue,

		renderCell,
		renderEditCell,
		renderHeader
	};

export { defaultColumn };
