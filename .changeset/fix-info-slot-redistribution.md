---
'@neovici/cosmoz-omnitable': patch
---

Fix regression in render-footer where the `info` slot redistribution (`<slot name="info" slot="info">`) was accidentally replaced with a plain `<span slot="info">` in #1037, breaking consumer content slotted as `name="info"`.
