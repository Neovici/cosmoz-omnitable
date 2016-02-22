/*global _, Cosmoz, document, Polymer, window */
"use strict";

window.Cosmoz = window.Cosmoz || {};

/**
  @polymerBehavior
 */
Cosmoz.SelectableBehavior = {
	properties: {
		selectedItem: {
			type: Object,
			readOnly: true,
			notify: true
		},
		items: {
			type: Array
		},
		valueProperty: {
			type: String,
			value: 'label'
		}
	},

	selectItem: function (item) {
		this._setSelectedItem(item);
	},

	emptySelection: function (item) {
		this._setSelectedItem(null);
	},

	selectByIndex: function (itemIndex) {
		var item = this.items[itemIndex];
		this.selectItem(item);
	},

	selectByValue: function (value) {
		var item = this._valueToItem(value);
		this.selectItem(item);
	},

	_valueToItem: function (value) {
		return (value === null)
			? null
			: this.items[this._valueToIndex(value)];
	},
	_valueToIndex: function (value) {
		var
			ctx = this,
			index;

		this.items.some(function (item, i) {
			if (ctx._valueForItem(item) === value) {
				index = i;
				return true;
			}
		});
		return index;
	},

	_valueForItem: function (item) {
		return item[this.valueProperty];
	}
};