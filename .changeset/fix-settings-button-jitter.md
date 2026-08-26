---
'@neovici/cosmoz-omnitable': patch
---

Round column widths by their cumulative offset instead of each width independently when generating the resize layout. This keeps every cell edge on a whole pixel while avoiding the cumulative rounding error that made the rightmost column (and the header settings button) tremble during a column-resize animation on both Chromium and Firefox.
