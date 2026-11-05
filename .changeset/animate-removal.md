---
"@neovici/cosmoz-omnitable": minor
---

Add an opt-in `animate-removal` attribute. With it, `removeItem` and `removeItems` fade the removed rows out, then glide the rows below up into the gap. They still return the removed items at once; `data` updates when the fade ends. Without the attribute, or under reduced motion, removal stays instant.
