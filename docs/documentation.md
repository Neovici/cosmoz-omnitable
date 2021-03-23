
# cosmoz-omnitable

## Overview
`cosmoz-omnitable` displays a table of data items.

It contains one or more `cosmoz-omnitable-column` elements, which are
used to define the rendering and behaviors of the cells of the table.

`cosmoz-omnitable-column` uses templates to render the data and header
cells for a column.

`cosmoz-omnitable-column` is the base element for rendering
data item of any type, and there are several specific
columns elements used to render specific data types or with
specific features.

## The base column: `cosmoz-omnitable-column` element and `Cosmoz.OmnitableColumnBehavior` behavior.

### How it works

The `cosmoz-omnitable-column` element defines the html templates used to render
the data, while the element prototype is fully defined in the
`Cosmoz.OmnitableColumnBehavior` behavior.

The types specific column elements defines new rendering templates and use
`Cosmoz.OmnitableColumnBehavior` as base pototype that they might override to
provide type specific functionalities.

### Basic usage

```html
<cosmoz-omnitable-column
      name="name"
      title="Id"
      value-path="id">
</cosmoz-omnitable-column>
```

The `name` attribute is mandatory and must be distinct among all columns.
It identifies the column when using the `group-on` and `sort-on` attributes for the whole table.

The `value-path` attribute is a dot separated string like (`foo`
or `foo.bar.baz`) representing the path to value of an item displayed by
the column.

### Rendering data cells

The `cosmoz-omnitable-column` element uses the following template to render a column data cell

```html
<span class="default-column">${ column.renderDefaultValue(item, column.valuePath) }</span
```

In this template, all properties and public methods from `Cosmoz.OmnitableColumnBehavior` are available,
plus :
* `item`: the current item rendered
* `selected`: a boolean indicated if the current item is selected

`renderDefaultValue` is a function of `Cosmoz.OmnitableColumnBehavior`:
```js
renderDefaultValue: function (item, valuePath) {
   return this.get(valuePath, item);
},
```

> get() is a function of Polymer.Base
> https://www.polymer-project.org/1.0/docs/api/Polymer.Base#method-get)

#### Custom templates

TBD

### Sorting and grouping

```html
<cosmoz-omnitable-column
      name="name"
      title="[[ _('Invoice number', t) ]]"
      value-path="invoiceNumber"
      sort-on="invoiceNumber"
      group-on="invoiceNumber">
</cosmoz-omnitable-column>
```

The `sort-on` and `group-on` attributes accepts the values of the unique `name` attributes of each column.

When these attributes are present on a column, `cosmoz-omnitable` adds this column
to the dropdown lists used to change sorting and grouping of the data items.

These values represents item's value that will be used for sorting/grouping the data. They
might be different from `value-path`.

In order to compare column values when sorting and grouping, `cosmoz-omnitable` uses the
values returned by the following function from `Cosmoz.OmnitableColumnBehavior` :

```js
getComparableValue: function (item, sortOn_path_or_groupOn_path) {
   return this.get(sortOn_path_or_groupOn_path, item);
},
```

The values are then compared using standard javascript comparison operator.

In type specific columns implementations, this function is overriden to allow
correct comparison of types.

### Filtering

```html
<cosmoz-omnitable-column
      name="name"
	value-path="foo.bar"
	filter="{{filterValue}}"
```

The `filter` attribute is used to filter the data.

If a column has a defined value for the `filter` attribute, then `cosmoz-omnitable`
will apply a filter function to each item.

For `cosmoz-omnitable-column` column, the filter function depends on the `filter` value.
If it is:
* a string, the value at `value-path` is converted to lower-cased string and then compared
using `indexOf` with the filter string
* an array of strings: lower-cased value is compared to each filter string until one match
using `indexOf`

### Rendering the header cell

As for data cells, the column's header cell is rendered using a template.

For `cosmoz-omnitable-column`

```html
<template>
   <paper-input label="[[title]]" value="{{filter}}"></paper-input>
</template>
```

This template will render an input element. When the user enters text in this input, it will
set the `filter` property of the column, which will trigger a filtering of the
data (see [Filtering](#filtering)).

## Type specific columns

### Number columns : `cosmoz-omnitable-column-number`

#### Usage

```html
<cosmoz-omnitable-column-number
   name="name"
   title="Quantity"
   value-path="quantity"
   locale="{{locale}}"
```

This column can be used to render
[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) values.

The `locale` properties can be used to render the value with a language sensitive representation, using
[Number.toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

#### Filtering

The `filter` for a number column must be an one object with the following prototype:

```js
{
   minValue: Number,
   maxValue: Number
}
```

At least one of `minValue` or `maxValue` must be defined.

The filter function will keep values that are
 `>= minValue` (if present) and `<= maxValue` (if present)


### Amount columns: `cosmoz-omnitable-column-amount`

The `cosmoz-omnitable-column-amount` column derives from
`cosmoz-omnitable-column-number` and can be used to render item's values with
the following prototype:

```js
{
   amount: Number,
   currency: String
}
```

It will render the values using `Cosmoz.MoneyHelperBehavior.renderAmount`
(see https://github.com/Neovici/cosmoz-behaviors/blob/master/cosmoz-moneyhelper-behavior.html)

For sorting and grouping, the `getComparableValue` method is overriden to return only
the `amount` value. So if you have mixed currencies amount values, sorting and grouping
won't work correctly.

### Date columns: `cosmoz-omnitable-column-date`

#### Usage
```html
<cosmoz-omnitable-column-date
   name="name"
   title="Date"
   value-path="date"
   parse-format="[[moment.ISO_8601]]"
   user-format="L"
   locale="{{locale}}"

```

Date columns support date values either in javascript `Date` primitive type or in String.
When String is used, the attribute `parse-format` must be set to allow the conversion to
a javascript `Date`.

The `user-format` attribute is used to interact with the user, i.e. the format used
to render dates and to parse date entered by the user (see filtering).

### Boolean columns: `cosmoz-omnitable-column-boolean`

#### Usage

```html
<cosmoz-omnitable-column-boolean
   name="name"
   title="Status"
   value-path="approved"
   true-label="Approved"
   false-label="Not approved"
```

`cosmoz-omnitable-column-boolean` can be used to display `Boolean` values.

The `true-label` and `false-label` properties are used to define text displayed when the
value is `true` or `false` (instead of True/False strings).



