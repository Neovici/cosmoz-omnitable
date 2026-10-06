---
'@neovici/cosmoz-omnitable': patch
---

Always show row checkboxes. Hiding them until hover broke during selection: the list is virtualized, so once the selected rows scrolled out of view the other rows' checkboxes disappeared again.
