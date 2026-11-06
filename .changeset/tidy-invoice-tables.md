---
'@neovici/cosmoz-omnitable': minor
---

Avoid rerendering retained scrolling rows and hidden cells, batch recycled-row bindings, and flatten loaded rows in linear time.

Row property updates now commit together in the next microtask, rather than synchronously after each setter.
