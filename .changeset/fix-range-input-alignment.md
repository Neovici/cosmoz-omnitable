---
'@neovici/cosmoz-omnitable': patch
---

Rename the range-input's `horizontalAlign` property to `align` for consistency with the column API. Remove redundant `align-right` from number/amount `cellClass` defaults (alignment is now handled by the `align` property + `.cell[align]` CSS rules). Mark `.align-left`/`.align-right` CSS classes as `@deprecated` (kept for backward compat with consumers using `cellClass`).
