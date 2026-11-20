---
'@neovici/cosmoz-omnitable': patch
---

Reduce style recalc cost while the table scrolls, loads and resizes. The table containers now carry explicit state classes (`has-spinner`, `has-skeleton`, `has-selection`) instead of `:has()` selectors, so a change inside the table no longer restyles the entire shadow subtree. Scrolling shows the largest win — a one-row scroll measures 20% faster overall — and column resizes pay fewer full-canvas style passes per tween step.
