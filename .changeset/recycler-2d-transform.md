---
'@neovici/cosmoz-omnitable': patch
---

Rows are positioned with 2D transforms, so a row is no longer promoted to its
own compositor layer and a scroll layerizes one canvas instead of dozens of
rows. The scroller no longer carries a redundant `will-change: transform` hint;
the recycled canvas keeps its own hint.
