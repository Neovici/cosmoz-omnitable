---
"@neovici/cosmoz-omnitable": minor
---

Add `renderItem` and `renderGroup` host properties, export `renderItem`
and `renderGroup`, add `compact` attribute

New optional host properties for full row rendering:

```html
<cosmoz-omnitable .renderItem="${renderItem}"> … </cosmoz-omnitable>
```

- `renderItem(item, index, params)` — replaces the entire item row.
- `renderGroup(group, index, params)` — replaces the entire group row.
- Unset (or `null`) renders the built-in rows, as before.

Item params: `selected`, `expanded`, `toggleSelect`, `toggleCollapse`,
plus `columns`, `collapsedColumns`, `miniColumns`, `onItemClick`,
`onCheckboxChange` (mark your checkbox `.dataItem` with the item and
`@input=${params.onCheckboxChange}` — keeps shift-range and ctrl
select-only semantics), `onItemChange` (editable-cell wiring, also
usable from custom rows), `rowPartFn`, `groupOnColumn` and
`dataIsValid`.

Group params: `selected`, `folded`, `toggleSelect`, `toggleFold`, plus
`columns`, `onCheckboxChange` (mark your checkbox `.dataItem` with the
group — selection is group-aware and the default shift/ctrl semantics
apply; the fold affordance is your responsibility, `params.toggleFold`),
`groupOnColumn` and `dataIsValid`.

All functions should be stable references (module-level function or
`guard([])`); inline arrows re-assert on every render.

The built-in renderers are exported in the same shape and can be set
directly or wrapped:

```js
import { renderItem } from "@neovici/cosmoz-omnitable";

omnitable.renderItem = (item, index, params) => html`
	${renderItem(item, index, params)}<my-badge></my-badge>
`;
```

`null` restores the built-in rows.

New `compact` boolean property (or `compact` attribute): the container
chrome previously only available in mini mode — card row look, thin
scrollbars, collapsed header, hidden settings column picker — as plain
host-driven state, combinable with `renderItem`. Legacy mini mode
(`miniBreakpoint`, `column.mini`, `[mini]`) is unaffected and stays
dormant while `renderItem` is set.

`index` is the row's position in the visible data — stable across group
fold/unfold, the same number the built-in rows use for part names
(`itemRow-${index}`) and the `omnitable-item-click` detail.

Removes the unused `RenderItemParams` / `GroupRenderParams` type exports
from `lib/use-list` (no known consumers; superseded by
`ItemRenderParams` / `GroupRenderParams` in `lib/types`).
