---
'@neovici/cosmoz-omnitable': patch
---

Limit omnitable tweening to direct column interactions

Tweening now only runs briefly in response to direct user interactions
with columns (show/hide, reorder, drag-to-resize, group-on change) and
snaps otherwise. Fixes slow load caused by the initial column layout
animation (FE-861).
