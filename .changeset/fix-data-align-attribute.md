---
'@neovici/cosmoz-omnitable': patch
---

Fix: use `data-align` attribute instead of HTML `align` attribute on cell divs. The HTML `align` attribute is a presentational attribute that triggers user-agent stylesheet `text-align` inheritance, causing unintended text alignment changes in sibling elements like the bottom bar. Using `data-align` avoids this behavior while maintaining the same CSS specificity.
