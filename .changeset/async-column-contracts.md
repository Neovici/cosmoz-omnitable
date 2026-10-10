---
"@neovici/cosmoz-omnitable": major
---

Tolerate promise values in the column API to support async data
sources (such as cosmoz-tree 4).

- Sorting and grouping resolve `getComparableValue` results before
  comparing; items are shown once their async values are settled.
- `saveAsXlsxAction`/`prepareXlsxData` and `saveAsCsvAction` await
  `toXlsxValue`/`getString` cells, so exporting is now async.
- Cell titles resolve via the `until` directive instead of
  stringifying `[object Promise]`.
- Column contracts now type `toXlsxValue`, `getString` and
  `cellTitleFn` as `string | Promise<string>`.

Synchronous columns keep their exact previous behavior.
