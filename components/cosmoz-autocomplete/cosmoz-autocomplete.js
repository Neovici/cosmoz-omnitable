/*global Cosmoz, Polymer, window, Node */
/**
 * Element to create an input with autocompletetion, multi selection,
 * case-intensive capabilities and more!
 *
 * @namespace element/cosmoz-autocomplete
 */
(function () {

	"use strict";

	window.Cosmoz = window.Cosmoz || {};

	Polymer({
		is: 'cosmoz-autocomplete',
		behaviors: [
			Cosmoz.MultiSelectableBehavior,
			Cosmoz.TranslatableBehavior
		],

		properties: {
			/**
			 * if true does not care about capital letter distinctions.
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @default true
			 * @instance
			 */
			caseInsensitive: {
				type: Boolean,
				value: true
			},
			/**
			 * If false and multiSelection is true, the selected values will be shown.
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @default true
			 * @instance
			 */
			hideSelections: {
				type: Boolean,
				value: false
			},
			/**
			 * Maximum number of shown results in a search.
			 * @type {Int}
			 * @memberof element/cosmoz-autocomplete
			 * @default 30
			 * @instance
			 */
			maxNumberResult: {
				type: Number,
				value: 30
			},
			/**
			 * Minimum length of search string for search to activate.
			 * @type {Int}
			 * @memberof element/cosmoz-autocomplete
			 * @default 0
			 * @instance
			 */
			minimumInputLength: {
				type: Boolean,
				value: 0
			},
			/**
			 * if true allows for multiple words seperated by space to be used in search.
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @default true
			 * @instance
			 */
			multiWordSearch: {
				type: Boolean,
				value: true
			},
			/**
			 * Placehold value for input box.
			 * @type {string}
			 * @memberof element/cosmoz-autocomplete
			 * @default 'Search'
			 * @instance
			 */
			placeholder: {
				type: String,
				value: 'Search'
			},
			/**
			 * Not implemented yet.
			 * @type {string}
			 * @memberof element/cosmoz-autocomplete
			 * @default true
			 * @instance
			 */
			searchType: {
				type: String
			},

			/**
			 * if true along with other conditions, set action is executed.
			 * @type {Boolean}
			 * @memberof element/cosmoz-autocomplete
			 * @default false
			 * @instance
			 */
			resultAction: {
				type: Boolean,
				value: false
			},

			/**
			 * Display actions provided in elements light DOM when the count
			 * of items in the selector is below this value.
			 * @type {Number}
			 * @memberof element/cosmoz-autocomplete
			 * @default 10
			 * @instance
			 */
			showActionsLimit: {
				type: Number,
				value: 10
			},

			/**
			 * Input value, the current search string.
			 * @type {string}
			 * @memberof element/cosmoz-autocomplete
			 * @default ''
			 * @instance
			 */
			inputValue: {
				type: String,
				value: '',
				observer: 'inputValueChanged'
			},

			shownlistdata: {
				type: Array
			},

			_focus: {
				type: Boolean,
				value: false
			},

			_hideSuggestions: {
				type: Boolean
			},

			_hideSelectedItem: {
				type: Boolean,
				value: true,
				computed: '_computeHideSelectedItem(selectedItem)'
			},
			multiSelection: {
				type: Boolean
			}

		},

		observers: [
			'_selectedItemsChanged(selectedItems.*)',
			'_computeHideSuggestions(_focus, resultAction, shownlistdata)'
		],

		_computeShowMultiSelection: function (multiSelection, hideSelections) {
			return multiSelection && !hideSelections;
		},

		_computeHideAutocomplete: function (multiSelection, selectedItem) {
			return !multiSelection && selectedItem;
		},

		_selectedItemsChanged: function (path) {
			this.fire('cosmoz-selected-items-changed', this.selectedItems);
		},

		_computeHideSelectedItem: function (selectedItem) {
			return !selectedItem;
		},

		_computeInvalidInput: function (text) {
			if (text && text.length > 0) {
				return true;
			}
			return false;
		},

		_computeHideSuggestions: function (focus, resultAction, shownlistdata) {
			var previousValue = this._hideSuggestions;
			if (!focus) {
				this._hideSuggestions = true;
			} else {
				if (resultAction) {
					if (shownlistdata && shownlistdata.length < this.showActionsLimit) {
						this._hideSuggestions = false;
					} else {
						this._hideSuggestions = true;
					}
				} else if (shownlistdata && shownlistdata.length > 0) {
					this._hideSuggestions = false;
				} else {
					this._hideSuggestions = true;
				}
			}
			if (!this._hideSuggestions && this._hideSuggestions !== previousValue) {
				this.$$('#searchResults').selected = 0;
			}
		},

		_increaseNum: function (num, inc) {
			return num + inc;
		},

		_resolveProp: function (item, prop) {
			if (item) {
				return item[prop];
			}
			return '';
		},

		attached: function () {
			this.shownlistdata = [];
		},

		clearOneSelection: function (event) {
			var item = event.model.item;
			if (this.isSelected(item)) {
				this.toggleSelected(item);
			}
		},

		keyup: function (event, detail, element) {
			// runs after inputValueChanged
			if (this.shownlistdata.length < 1) {
				return;
			}

			var
				el = this.$$('#searchResults'),
				selectorSelectedItem = el.selectedItem,
				selectedItem;

			switch (event.keyCode) {
			case 13: // Enter
				if (selectorSelectedItem && selectorSelectedItem.index) {
					selectedItem = this.shownlistdata[selectorSelectedItem.index - 1].data;
					this.selectSuggestion(selectedItem);
					this.shownlistdata = this.trySearch(this.inputValue);
				} else {
					this.onResultActionClick();
					el.selected = undefined;
				}
				break;
			case 27: // Escape
				this.hideSuggestions();
				break;
			case 38: // Up
				el.selectPrevious(false);
				break;
			case 40: // Down
				el.selectNext(false);
				break;
			default:
				// console.log('no handler for ' + event.keyCode);
				break;
			}
		},

		clearSelection: function (event) {
			this.emptySelection();
			this._searchErrorMsg = '';
		},

		hideSuggestions: function () {
			this._hideSuggestions = true;
		},

		selectSuggestion: function (item) {
			this.selectItem(item);
			this.hideSuggestions();
		},

		search: function (terms) {
			var
				results = [],
				that = this;

			if (typeof terms === "string") {
				terms = [terms];
			}

			if (this.items === undefined) {
				return [];
			}

			this.items.forEach(function (item, itemIndex) {
				var addItem = true;
				terms.some(function (term, termIndex) {
					if (term === "") {
						if (terms.length === 1) {
							return true; // empty search, match everything
						}
						return; // space in multi word search, continue
					}
					var searchProperty = item[that.valueProperty];
					if (that.caseInsensitive) {
						term = term.toLowerCase();
						searchProperty = searchProperty.toLowerCase();
					}
					if (searchProperty.indexOf(term) === -1) {
						addItem = false;
						return true; // exit loop.array
					}
				});
				if (results.length > that.maxNumberResult) {
					return results;
				}
				if (addItem) {
					results.push(item);
				}
			});
			return results;
		},

		highlightResults: function (terms, results) {
			if (typeof terms === "string") {
				terms = [terms];
			}
			var
				regexpResult = '<b>$1</b>',
				displayResults = [],
				that = this;
			results.forEach(function (result, resultIndex) {
				var displayResult = {
					displayLabel: result[that.valueProperty],
					data: result
				};
				displayResults.push(displayResult);
				terms.forEach(function (term, termIndex) {
					if (term.length > 0) {
						displayResult.displayLabel = displayResult.displayLabel.replace(new RegExp('(' + term + ')', 'ig'), regexpResult);
					}
				});
			});

			return displayResults;
		},

		trySearch: function (term) {
			if (this.minimumInputLength > term.length) {
				this._searchErrorMsg = this._('Enter at least {0} characters to search.', this.minimumInputLength);
				return [];
			}

			var
				terms = this.multiWordSearch ? term.split(' ') : [ term ],
				results = this.search(terms),
				noResults = results.length === 0 && this._focus;

			if (this.selectedItems && this.selectedItems.length > 0) {
				this.selectedItems.forEach(function (item, index) {
					var hasItemIndex = results.indexOf(item);
					if (hasItemIndex > -1) {
						results.splice(hasItemIndex, 1);
					}
				});
			}

			this._searchErrorMsg = noResults ? this._('No results found') : '';
			return this.highlightResults(terms, results);
		},

		inputValueChanged: function (newValue, oldValue) {
			// runs before keyup
			if (!this._focus || newValue.length < this.minimumInputLength) {
				this.hideSuggestions();
			} else {
				this.shownlistdata = this.trySearch(newValue);
			}
		},

		onSearchResultSelect: function (event, detail) {
			var
				element = event.target,
				item = detail.item,
				itemIndex = item.index,
				selectedItem;
			if (itemIndex) {
				// TODO(pasleq): why do we increase the index by 1 ?
				selectedItem = this.shownlistdata[itemIndex - 1].data;
				if (!this.isSelected(selectedItem)) {
					this.selectSuggestion(selectedItem);
					element.selected = undefined;
				}
			} else {
				this.onResultActionClick(item);
			}
		},

		onFocus: function (event) {
			this._focus = true;
			this.shownlistdata = this.trySearch(this.inputValue);
		},

		onBlur: function (event) {

			var that = this,
				term = this.$$('#searchInput').value,
				results;

			this._searchErrorMsg = '';

			if ((!this.selectedItems || this.selectedItems.length === 0) && term.length > 0) {
				results = this.trySearch(term);
				results.some(function (item, index) {
					if (term === item[that.valueProperty]) {
						that.selectItem(item);
						return true;
					}
				});
			}

			// FIXME(pasleq): this sometimes occurs before the core-activate event,
			// so the onSearchResulSelect function does nothing.
			window.setTimeout(function () {
				that._focus = false;
				that.hideSuggestions();
			}, 200); // allow the actual selection to take place before hiding;
		},

		onResultActionClick: function (item) {
			var
				inputValue = this.$$('#searchInput').value,
				eventDetail = {
					inputValue: inputValue
				},
				eventOptions = {
					bubbles: true,
					cancelable: true,
					node: item
				};

			this.fire('action', eventDetail, eventOptions);
		}
	});
}());