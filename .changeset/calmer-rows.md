---
"@neovici/cosmoz-omnitable": minor
---

Calmer table chrome

- Links in cells read as text: `--cz-link-color` is `currentColor` inside the
  table (primary on hover), and plain anchors no longer default to brand blue
  and an underline. The row itself is the click target.
- The header drops its gray band and uses `border-secondary` rules.
- Row hover is a background tint only; the drop shadow is gone.
- On hover-capable devices, row checkboxes appear on row hover, keyboard focus
  or once any row is selected. The select-all checkbox stays visible.
