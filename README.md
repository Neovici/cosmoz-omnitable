# cosmoz-omnitable

## Content-aware columns

Opt in per table with `auto-size`, or configure application defaults before mounting tables:

```js
import { configureColumnLayout } from '@neovici/cosmoz-omnitable/lib/column-layout.js';

configureColumnLayout({ autoSize: true, hideEmptyColumns: true });
```

The corresponding table properties are `autoSize` and `hideEmptyColumns`. Explicit `false` properties override shared defaults. Both defaults are initially false, preserving existing layouts.

Automatic sizing uses the header text as a minimum and samples formatted values from the first 100 loaded rows for a preferred width (up to 320px of text). Configured `minWidth` and fixed/manual widths remain respected. Flexible columns shrink toward their minimum before lower-priority columns collapse. On a viewport narrower than a single header, the remaining column fits the available canvas so row controls stay reachable. Measurements update when data, column definitions, or loaded fonts change; they are never saved as user widths.

Custom renderers retain their configured preferred width as a fallback. Set a column's `getContentText(column, item)` callback to describe additional displayed text. Non-text controls should have an appropriate `min-width` or fixed width.

Empty-column hiding also requires `.dataComplete=${true}`: set this only after every page in the current result has loaded successfully, and reset it while fetching a new result. Tables with incomplete data, loading/error states, or no rows keep their columns. Empty means `null`, `undefined`, whitespace-only text, or an empty array; zero, false, and objects are content. Active filters and editable columns remain visible. Emptiness is checked against all loaded rows, before local filtering.

Custom-rendered columns stay visible unless they provide `isEmpty(column, item)`. Supply column callbacks before mounting, alongside `renderCell`. Automatically hidden columns appear as “Empty” in column settings and can be checked to reveal them. That explicit choice is saved as `showWhenEmpty`; automatic hiding itself is transient.

[![Build Status](https://github.com/Neovici/cosmoz-omnitable/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-omnitable/actions?workflow=Github+CI)
[![codecov](https://codecov.io/gh/Neovici/cosmoz-omnitable/branch/master/graph/badge.svg?token=j46iVMxjcs)](https://codecov.io/gh/Neovici/cosmoz-omnitable)
[![Changesets](https://img.shields.io/badge/Changesets-🦋%20changesets-268ADA.svg)](https://github.com/changesets/changesets)
