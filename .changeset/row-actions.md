---
"@neovici/cosmoz-omnitable": minor
---

Add per-row action menus. Set `rowMenu` to a function that renders the menu content for the rows it acts on: `(items) => template`.

- Right-clicking a row, or the context-menu key, opens the menu. Right-clicking a link or selected text still opens the browser's own menu.
- A row in a multi-row selection acts on the whole selection; any other row acts on itself.
- The menu is a popover (`role="menu"`). Clicking an element with `role="menuitem"` closes it, and so do Escape, scrolling the list and a data change. Focus returns to where the menu was opened.
- The arrow keys move focus between the `role="menuitem"` elements and wrap around, and Home and End go to the first and last. Items inside the content's shadow roots count too. Content that handles a key itself calls `preventDefault()`.
- Style the menu through `::part(row-menu)`.
- A custom `renderItem` receives `onRowContextMenu`, and `onRowMenu` for a button of its own: the menu opens below the button, the button gets `aria-expanded`, a second click closes it, and focus returns to it. The button may sit in the row element's shadow root. Tables without `rowMenu` don't change.
