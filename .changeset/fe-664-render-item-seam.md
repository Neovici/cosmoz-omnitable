---
"@neovici/cosmoz-omnitable": minor
---

Add `renderItem` / `renderGroup` host props and the `renderMini` export

- `renderItem(item, index, params)` replaces the entire default row
  (checkbox, cells, minis block, expand). Params include the grouped-list
  contract (`selected`, `expanded`, `toggleSelect`, `toggleCollapse`) plus
  omnitable data and wiring: `columns`, `collapsedColumns`, `onItemClick`,
  `onCheckboxChange`, `dataIsValid`. `renderGroup` mirrors this for group
  rows (`selected`, `folded`, `toggleSelect`, `toggleFold`, `columns`,
  `onCheckboxChange`, `dataIsValid`).
- Checkbox wiring: set `.dataItem` on your checkbox and `@input` it to
  `params.onCheckboxChange` — this keeps shift-range and ctrl select-only
  semantics. For group rows `.dataItem` must be the _group_ so selection
  stays group-aware. The fold affordance of group rows is the custom
  renderer's responsibility (`params.toggleFold`).
- Set both to stable references (module-level function or `guard([])`);
  inline arrows re-assert on every render. `null` restores the default row
  (the exit path for breakpoint directives).
- Unset = current behavior, unchanged.
- New `compact` boolean property, reflected to `[compact]`: the container
  chrome previously only available in mini mode (card row look, thin
  scrollbars, collapsed header, hidden settings column picker) as a
  host-driven state, combinable with `renderItem` (e.g. driven per
  breakpoint by the caller).
- New `renderMini` export: the default two-tier card (first mini column as
  title line, the rest in a meta flex row), usable as a `renderItem`.
  Old mini mode is dormant while `renderItem` is set.
- Internal: the default row and group renderers moved from `use-list` to
  `lib/render-item` and `lib/render-group`. No behavior change.
- `index` is the position in the flat list (groups interleaved) — use
  `item[indexSymbol]` for stable part names; `rowPartFn` applies to
  default rows only, custom renderers own their parts.
