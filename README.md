# cosmoz-omnitable

## Hide empty columns

Opt in per table with `hide-empty-columns`, or configure application defaults before mounting tables:

```js
import { configureColumnLayout } from "@neovici/cosmoz-omnitable/lib/column-layout.js";

configureColumnLayout({ hideEmptyColumns: true });
```

The corresponding table property is `hideEmptyColumns`. Explicit `false` overrides the shared default. The default is initially false, preserving existing layouts and widths.

Empty-column hiding also requires `.dataComplete=${true}`: set this only after every page in the current result has loaded successfully, and reset it while fetching a new result. Tables with incomplete data, loading/error states, or no rows keep their columns. Empty means `null`, `undefined`, whitespace-only text, or an empty array; zero, false, and objects are content. Formatted labels and `getContentText` output also count as content even when the raw value is empty. Active filters and editable columns remain visible. Emptiness is checked against all loaded rows, before local filtering.

Custom-rendered columns, including external column elements and subclasses, stay visible unless they provide `isEmpty(column, item)`. Supply column callbacks before mounting, alongside `renderCell`. Automatically hidden columns appear as “Empty” in column settings and can be checked to reveal them. That explicit choice is saved as `showWhenEmpty`; automatic hiding itself is transient.

[![Build Status](https://github.com/Neovici/cosmoz-omnitable/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-omnitable/actions?workflow=Github+CI)
[![codecov](https://codecov.io/gh/Neovici/cosmoz-omnitable/branch/master/graph/badge.svg?token=j46iVMxjcs)](https://codecov.io/gh/Neovici/cosmoz-omnitable)
[![Changesets](https://img.shields.io/badge/Changesets-🦋%20changesets-268ADA.svg)](https://github.com/changesets/changesets)
