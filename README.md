cosmoz-omnitable
=================

[![Build Status](https://github.com/Neovici/cosmoz-omnitable/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-omnitable/actions?workflow=Github+CI)
[![Maintainability](https://api.codeclimate.com/v1/badges/6b16292868f47977eee2/maintainability)](https://codeclimate.com/github/Neovici/cosmoz-omnitable/maintainability)
[![codecov](https://codecov.io/gh/Neovici/cosmoz-omnitable/branch/master/graph/badge.svg?token=j46iVMxjcs)](https://codecov.io/gh/Neovici/cosmoz-omnitable)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


migration TODO:

* check if dropping the visibility code has any adverse effect (might be related to hash-params)
x add legacy ots compatibility layer: dispatch filter-changed and other similar events from the columns
* verify each custom render function in FE
x convert DOM columns to config
x empty columns of all state
x hash params
x xlsx + csv export
* test for source

FE editable columns in:
views/administration/accounting-model/dimension-values.html.js
views/administration/periods/list.js

FE column-item-changed in:
views/administration/periods/list.js

BUGS:
* when navigating the queue, filters are not reset when view-core is reused
* autocomplete columns without valueProperty might not work
* treenode cells have show-max-nodes="undefined"
* treenode source has empty texts
