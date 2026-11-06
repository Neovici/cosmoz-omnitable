---
"@neovici/cosmoz-omnitable": patch
---

Keep the rows readable while a list refreshes. They no longer drop to 30% opacity under a large spinner at once. After 400ms they fade to half opacity, and nothing is drawn over them. Show the wait where the user acted, for example in the search field.
