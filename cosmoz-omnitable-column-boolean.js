import '@webcomponents/shadycss/entrypoints/apply-shim';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-item/paper-item';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { columnMixin } from './cosmoz-omnitable-column-mixin';

import '@neovici/paper-autocomplete';
import '@polymer/paper-spinner/paper-spinner-lite';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnBoolean extends columnMixin(PolymerElement) {
	static get template() {
		return html`
		<template class="cell" strip-whitespace>
			[[ getString(item, valuePath) ]]
		</template>

		<template class="edit-cell" strip-whitespace>
			<paper-autocomplete
				label="[[ title ]]"
				min-length="0"
				no-label-float
				on-select="_valueChanged"
				query-fn="[[ queryFn ]]"
				show-results-on-focus="[[ _showResultsOnFocus ]]"
				source="[[ _computeSuggestionList(trueLabel, falseLabel) ]]"
				text="[[ _computeText(item, valuePath, trueLabel, falseLabel) }}"
				title="[[ _tooltip ]]"
				value="[[ _computeSelected(item, valuePath) ]]">
				<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active="[[ loading ]]" hidden="[[ !loading ]]"></paper-spinner-lite>
				<template slot="autocomplete-custom-template">
					<paper-item id$="[[ _getSuggestionId(index) ]]" role="option" aria-selected="false" on-tap="_onSelect">
						<div inner-h-t-m-l="[[ item.html ]]"></div>
						<paper-ripple></paper-ripple>
					</paper-item>
				</template>
			</paper-autocomplete>
		</template>

		<template class="header" strip-whitespace>
			<paper-autocomplete
				label="[[ title ]]"
				min-length="0"
				query-fn="[[ queryFn ]]"
				show-results-on-focus="[[ _showResultsOnFocus ]]"
				source="[[ _computeSuggestionList(trueLabel, falseLabel) ]]"
				text="{{ _computeHeaderText(filter, trueLabel, falseLabel) }}"
				title="[[ _tooltip ]]"
				value="{{ filter }}">
				<paper-spinner-lite style="width: 20px; height: 20px;" suffix slot="suffix" active="[[ loading ]]" hidden="[[ !loading ]]"></paper-spinner-lite>
				<template slot="autocomplete-custom-template">
					<paper-item id$="[[ _getSuggestionId(index) ]]" role="option" aria-selected="false" on-tap="_onSelect">
						<div inner-h-t-m-l="[[ item.html ]]"></div>
						<paper-ripple></paper-ripple>
					</paper-item>
				</template>
			</paper-autocomplete>
		</template>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column-boolean';
	}

	static get properties() { // eslint-disable-line max-lines-per-function
		return {
			filter: {
				type: Boolean,
				notify: true,
				value() {
					return this._getDefaultFilter();
				}
			},

			trueLabel: {
				type: String,
				value: 'True'
			},

			falseLabel: {
				type: String,
				value: 'False'
			},

			_textFilter: {
				type: String,
				observer: '_textFilterChanged'
			},

			_tooltip: {
				type: String,
				computed: '_computeTooltip(title, filter)'
			},

			templatetemplateWidth: {
				type: String,
				value: '60px'
			},

			/**
			 * No need to grow, as the values in a boolean column should have known fixed width
			 * @returns {String} Default flex
			 */
			flex: {
				type: String,
				value: '0'
			},

			/**
			* The value of the `paper-autocomplete` input.
			*/
			query: {
				type: String,
				notify: true
			},

			_showResultsOnFocus: {
				type: Boolean,
				value: true,
				computed: '_computeShowResultsOnFocus(filter)'
			},

			/**
			* Function used to filter available items.
			* This function is actually used by `paper-autocomplete`,
			* it is also exposed here so it is possible to provide a custom queryFn.
			*/
			queryFn: {
				type: Function,
				value: () => {
					return function (datasource, query) {
						const notNull = i => i != null;
						return datasource.filter(notNull)
							.map(item => {
								const
									text = item['text'],
									value = item['value'];

								if (text == null) {
									return undefined;
								}

								// if there is text search for indexOf query
								if (query == null) {
									return {
										text,
										value,
										html: text
									};
								}

								if (text.toLowerCase().indexOf(query) < 0) {
									return undefined;
								}

								// Highlight matches
								return {
									text,
									value,
									html: text.replace(new RegExp('(' + query + ')', 'igu'), '<b>$1</b>')
								};

							}).filter(notNull);
					};
				}
			}
		};
	}

	static get observers() {
		return [
			'_filterChanged(filter)'
		];
	}

	// TODO(pasleq): same questions as for cosmoz-omnitable-column-date

	_textFilterChanged(textFilter) {
		if (this._filterChangedFromAbove) {
			this._filterChangedFromAbove = false;
			return;
		}
		this._filterChangedFromInput = true;
		if (textFilter === 'true') {
			this.set('filter', true);
		} else if (textFilter === 'false') {
			this.set('filter', false);
		} else {
			this.set('filter', null);
		}
	}

	_filterChanged(filter) {
		if (this._filterChangedFromInput) {
			this._filterChangedFromInput = false;
			return;
		}
		this._filterChangedFromAbove = true;
		this._textFilter = typeof filter === 'boolean' ? filter.toString() : null;
	}

	/**
	* Get column represented as a string.
	* @param {object} item Column data.
	* @param {string} valuePath Value path in column data.
	* @returns {void|string} Column in string format.
	*/
	getString(item, valuePath) {
		const value = this.get(valuePath || this.valuePath, item);
		return value ? this.trueLabel : this.falseLabel;
	}

	/**
	* Get a filter function for the column.
	* @returns {void|function} Filter function.
	*/
	getFilterFn() {
		if (this.filter == null) {
			return;
		}
		return this._applySingleFilter.bind(this, this.filter);
	}

	/**
	* Determine if a filter should be enabled or not.
	* @param {string} filter Filter text.
	* @param {object} item Column data.
	* @returns {boolean} Whether the filter should be enabled or not.
	*/
	_applySingleFilter(filter, item) {
		return this.get(this.valuePath, item) === filter;
	}

	_computeHeaderText(value, trueLabel, falseLabel) {
		if (value === true) {
			return trueLabel;
		} else if (value === false) {
			return falseLabel;
		}
	}
	_computeSelected(item, valuePath) {
		const value = this.get(valuePath || this.valuePath, item);
		if (value != null) {
			return value.toString();
		}
	}
	_computeText(item, valuePath, trueLabel, falseLabel) {
		const value = this.get(valuePath || this.valuePath, item);
		if (value === true) {
			return trueLabel;
		} else if (value === false) {
			return falseLabel;
		}
	}

	/** OVERRIDES */

	_valueChanged(e) {
		const value = e.target.selected === 'true',
			item = e.model.item,
			oldValue = this.get(this.valuePath, item),
			formatFn = value => {
				return value ? this.trueLabel : this.falseLabel;
			};
		if (value === oldValue) {
			return;
		}
		this.set(this.valuePath, value, item);
		this._fireItemChangeEvent(item, this.valuePath, oldValue, formatFn.bind(this));
	}

	_serializeFilter(filter = this.filter) {
		if (filter == null || filter === '') {
			return null;
		}
		return this._serializeValue(filter ? 'true' : 'false');
	}

	_deserializeFilter(obj) {
		const value = this._deserializeValue(obj, String);

		if (value === 'true') {
			return true;
		}

		if (value === 'false') {
			return false;
		}

		return null;
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		return this.get(valuePath, item) ? this.trueLabel : this.falseLabel;
	}

	/**
	* Determine if results should be shown on focus or not.
	* @param {string} filter Filter text.
	* @returns {boolean} Whether results should be shown on focus or not.
	*/
	_computeShowResultsOnFocus(filter) {
		return !filter;
	}

	/**
	* Get a list of suggestions for the column header.
	* @param {string} trueLabel True label.
	* @param {string} falseLabel False label.
	* @returns {array} Suggestions remapped for the column header.
	*/
	_computeSuggestionList(trueLabel, falseLabel) {
		return [{
			text: trueLabel,
			value: true
		}, {
			text: falseLabel,
			value: false
		}];
	}

	/**
	* Get a tooltip text for the column.
	* @param {string} title Column title.
	* @param {string} filter Filter text.
	* @returns {string} Tooltip text.
	*/
	_computeTooltip(title, filter) {
		if (filter === true) {
			return this.trueLabel;
		} else if (filter === false) {
			return this.falseLabel;
		}
		return title;
	}
}
customElements.define(OmnitableColumnBoolean.is, OmnitableColumnBoolean);
