---
'@neovici/cosmoz-omnitable': patch
---

Keep informational props on useNotifyProperty

Reverts the informational/derived outputs (visibleData,
sortedFilteredGroupedItems, sortOn, descending, isMini, filters) from
useProperty back to useNotifyProperty so they only fire a -changed event
without exposing a meaningless setter or accepting parent overrides.
Restores value-based deps for filters so filters-changed only fires when
filter values actually change.
