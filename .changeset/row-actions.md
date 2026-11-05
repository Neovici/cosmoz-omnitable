---
"@neovici/cosmoz-omnitable": minor
---

Add per-row action menus. Set `rowMenu` to a function that renders the menu content for the rows it acts on: `(items) => template`.

- Each row gets a "…" button next to its checkbox, shown on hover or focus like the other row controls. Right-clicking a row, or the context-menu key, opens the same menu.
- A row in a multi-row selection acts on the whole selection; any other row acts on itself.
- The menu is a popover (`role="menu"`). Clicking an element with `role="menuitem"` closes it, and so do Escape, a second click on "…", scrolling the list and a data change. Focus returns to where the menu was opened.
- With focus on the menu, the arrow keys, Home and End move focus to the first or last `role="menuitem"`, including items inside the content's shadow roots. Arrow keys between items are up to the content.
- Style the menu through `::part(row-menu)` and the button through `::part(row-menu-trigger)`. The header keeps the button's slot free, so the columns stay aligned.
- A custom `renderItem` receives `onRowMenu` and `onRowContextMenu` and should render its own button, which may sit in the row element's shadow root. Tables without `rowMenu` don't change.
