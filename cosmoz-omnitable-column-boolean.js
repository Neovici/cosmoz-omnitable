import { PolymerElement } from '@polymer/polymer/polymer-element';

import { columnMixin } from './cosmoz-omnitable-column-mixin';

import '@polymer/paper-spinner/paper-spinner-lite';
import '@neovici/cosmoz-autocomplete';
import {
	html, nothing
} from 'lit-html';
import { get } from '@polymer/polymer/lib/utils/path';
import { memooize } from '@neovici/cosmoz-utils/memoize';

const
	computeValue = (value, source) =>
		source.find(({ value: valueProp }) => value === valueProp),

	computeTooltip = (title, value, source) => {
		const val = computeValue(value, source);
		return val ? val.text : title;
	},

	computeItemTooltip = (title, item, valuePath, source) => computeTooltip(
		title,
		get(item, valuePath),
		source
	),

	computeItemValue = ({ valuePath }, item, source) => computeValue(
		get(item, valuePath),
		source
	),

	onChange = setState => selection => {
		setState(state => ({ ...state, filter: selection?.[0]?.value ?? null }));
	},

	onFocus = setState => focused => {
		setState(state => ({ ...state, headerFocused: focused }));
	},

	onText = setState => text => {
		setState(state => ({ ...state, query: text }));
	},

	onEditableChange = onItemChange => selection => onItemChange(selection?.[0]?.value),

	getString = ({ valuePath, trueLabel, falseLabel }, item) => {
		const value = get(item, valuePath);
		return value ? trueLabel : falseLabel;
	},

	applySingleFilter = ({ valuePath }, filter) => item => get(item, valuePath) === filter,

	computeSource = memooize((trueLabel, falseLabel) => [
		{ text: trueLabel, value: true },
		{ text: falseLabel, value: false }
	]),

	toXlsxValue = ({ valuePath, trueLabel, falseLabel }, item) => {
		if (!valuePath) {
			return '';
		}
		return get(item, valuePath) ? trueLabel : falseLabel;
	},

	deserializeFilter = (column, filter) => {
		try {
			return JSON.parse(filter);
		} catch (e) {
			return null;
		}
	};

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnBoolean extends columnMixin(PolymerElement) {
	static get properties() {
		return {
			trueLabel: { type: String, value: 'True' },
			falseLabel: { type: String, value: 'False' },
			flex: { type: String, value: '0' },
			cellClass: { type: String, value: 'boolean-cell' }
		};
	}

	getString(column, item) {
		return getString(column, item);
	}

	renderCell(column, { item }) {
		return getString(column, item);
	}

	cellTitleFn(column, item) {
		return getString(column, item);
	}

	renderEditCell(column, { item }, onItemChange) {
		const
			{ trueLabel, falseLabel } = column,
			spinner = column.loading
				? html`<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active></paper-spinner-lite>`
				: nothing;

		return html`<cosmoz-autocomplete-ui
				no-label-float
				.title=${ computeItemTooltip(column.title, item, column.valuePath, computeSource(trueLabel, falseLabel)) }
				.source=${ computeSource(trueLabel, falseLabel) }
				.textProperty=${ 'text' }
				.value=${ computeItemValue(column, item, computeSource(trueLabel, falseLabel)) }
				.onChange=${ onEditableChange(onItemChange) }
				.limit=${ 1 }
			>${ spinner }</cosmoz-autocomplete-ui>`;
	}

	renderHeader(column, { filter, query }, setState, source) {
		const spinner = column.loading
			? html`<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active></paper-spinner-lite>`
			: nothing;

		return html`<cosmoz-autocomplete-ui
			.label=${ column.title }
			.title=${ computeItemTooltip(column.title, filter, column.valuePath, source) }
			.source=${ source }
			.textProperty=${ 'text' }
			.value=${ computeValue(filter, source) }
			.text=${ query }
			.onChange=${ onChange(setState) }
			.onFocus=${ onFocus(setState) }
			.onText=${ onText(setState) }
			.limit=${ 1 }
		>${ spinner }</cosmoz-autocomplete-ui>`;
	}

	computeSource({ trueLabel, falseLabel }) {
		return computeSource(trueLabel, falseLabel);
	}

	getFilterFn(column, filter) {
		if (filter == null) {
			return;
		}
		return applySingleFilter(column, filter);
	}

	toXlsxValue(column, item) {
		return toXlsxValue(column, item);
	}

	deserializeFilter(column, filter) {
		return deserializeFilter(column, filter);
	}
}
customElements.define('cosmoz-omnitable-column-boolean', OmnitableColumnBoolean);

export { getString, computeItemValue, computeSource, toXlsxValue, onChange, deserializeFilter };
