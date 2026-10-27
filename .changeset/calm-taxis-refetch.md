---
"@neovici/cosmoz-omnitable": patch
---

Keep the external-values autocomplete source stable per column. Replacing the items array no longer refetches the header options, and columns that share a `values` function each build their own option list from their own `text-property` and `value-property`.
