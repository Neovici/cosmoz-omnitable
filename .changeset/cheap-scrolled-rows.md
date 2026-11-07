---
"@neovici/cosmoz-omnitable": patch
---

perf: rows whose `item`/`index` bindings are unchanged no longer re-render while scrolling

`cosmoz-grouped-list-row` is now a pion component: the row re-renders with the final `item`/`index`/`renderFn` of the tick exactly once (pion coalesces the commits), instead of once per property setter, and pion's reflective-property identity check keeps rows whose bindings are identity-identical from re-rendering across scroll reconciliations and host re-renders. Scrolling builds content only for rows entering the DOM; full-list refreshes rebuild nothing when the data does not change identity. Rows still re-render from changed bindings: replaced items, index changes and row-content callback identity churn such as selection state. The row element contract is unchanged (`cosmoz-grouped-list-row`, `.item`/`.index`/`.renderFn` properties, light-DOM content, no shadow root, no new dependencies).
