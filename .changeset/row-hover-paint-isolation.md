---
'@neovici/cosmoz-omnitable': patch
---

Cut the cost of row hover: hover affordances now use inherited values instead of
ancestor-`:hover` descendant selectors, and rows contain their own paint. A hover
no longer restyles slotted/part content across components and no longer repaints
the document layer.
