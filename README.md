# cosmoz-omnitable

[![Build Status](https://github.com/Neovici/cosmoz-omnitable/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-omnitable/actions?workflow=Github+CI)
[![codecov](https://codecov.io/gh/Neovici/cosmoz-omnitable/branch/master/graph/badge.svg?token=j46iVMxjcs)](https://codecov.io/gh/Neovici/cosmoz-omnitable)
[![Changesets](https://img.shields.io/badge/Changesets-🦋%20changesets-268ADA.svg)](https://github.com/changesets/changesets)

### Uniform-row fast path

Set the `fixedRowHeight` property to a positive pixel height only when unexpanded,
ungrouped rows have that exact rendered height. Account for spacing tokens and
browser font-size preferences when computing it. A consumer using compact or custom row renderers
must clear this property unless it can guarantee the same height. Grouping or expanding
any row automatically restores measured flow layout. The default remains measured.
