---
'@neovici/cosmoz-omnitable': patch
---

Add `align` and `headerAlign` column properties for controlling cell and header alignment. Number and amount columns default to right-aligned; date, time, and datetime to left-aligned. `headerAlign` overrides `align` for the header only. Fixes disabled-filtering range inputs losing header alignment. Removes dead `preferredDropdownHorizontalAlign` property.
