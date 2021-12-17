# [8.0.0](https://github.com/neovici/cosmoz-omnitable/compare/v7.3.0...v8.0.0) (2021-12-17)


### Bug Fixes

* computeSource should by default return the unaltered data ([35addf7](https://github.com/neovici/cosmoz-omnitable/commit/35addf7247aa26a62825e046e5f29058d78dc693))
* external values stops working after column resize ([40087ca](https://github.com/neovici/cosmoz-omnitable/commit/40087ca7b01ce9894a596dab22cf469c809430c4))
* **legacy-interop:** match polymer property change events ([178a713](https://github.com/neovici/cosmoz-omnitable/commit/178a71347f3ef24054f8919e9c59276331631f86))
* list is not re-rendered ([9dab054](https://github.com/neovici/cosmoz-omnitable/commit/9dab0541173b9f243883e83b891befec7b4beb7d))
* **refactor:** render the layout css via haunted ([0d572a4](https://github.com/neovici/cosmoz-omnitable/commit/0d572a4788fd560db832f51efdf10a2467b64cca))
* send `values` to computeSource ([4a6312d](https://github.com/neovici/cosmoz-omnitable/commit/4a6312d126ceee71cf6b1b1d6d82fa0f5bff27f0))
* support for treenode columns ([37f6825](https://github.com/neovici/cosmoz-omnitable/commit/37f6825d0096bf646863b9e26b9f5b5637035063))
* **use-dom-columns:** copy over headerCellClass to column config ([e6197d3](https://github.com/neovici/cosmoz-omnitable/commit/e6197d35d48432cb4b093f1e949654cc1ff19931))
* **use-omnitable:** settings panel does not display correct hidden columns ([6535170](https://github.com/neovici/cosmoz-omnitable/commit/65351706eb725b3638af828049ad93ee2f60a2d5))


### Code Refactoring

* change the signature of getComparableValue ([772523e](https://github.com/neovici/cosmoz-omnitable/commit/772523e1a04182761add3a59bb679ed3bbc77b40))


* feat!: migrate to hooks ([6285a11](https://github.com/neovici/cosmoz-omnitable/commit/6285a11a6e24ecf4ab343ddc3871112e4ae679a2))


### Features

* **ui:** checkbox color variables ([3025cf3](https://github.com/neovici/cosmoz-omnitable/commit/3025cf3594f49ef551ee72fcec53928d1e626615))
* **ui:** footer color variable ([1ec85a0](https://github.com/neovici/cosmoz-omnitable/commit/1ec85a0f70c384d95ff85772a5dacf45f9ae4f12))


### BREAKING CHANGES

* the signature is now getComparableValue(column, item)
* the columns no longer store the state. A compatibility
layer has been set up to make sure the legacy code still works.

# [8.0.0-beta.10](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.9...v8.0.0-beta.10) (2021-12-17)


### Bug Fixes

* **use-omnitable:** settings panel does not display correct hidden columns ([6535170](https://github.com/neovici/cosmoz-omnitable/commit/65351706eb725b3638af828049ad93ee2f60a2d5))

# [8.0.0-beta.9](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.8...v8.0.0-beta.9) (2021-12-16)


### Features

* **ui:** checkbox color variables ([98c80fc](https://github.com/neovici/cosmoz-omnitable/commit/98c80fcf5276e46af0b94177cb09bdb8f317773e))
* **ui:** footer color variable ([db1302a](https://github.com/neovici/cosmoz-omnitable/commit/db1302ac17798a8321ad9cf975504ee77dd7fe61))

# [8.0.0-beta.8](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.7...v8.0.0-beta.8) (2021-12-16)


### Bug Fixes

* external values stops working after column resize ([40087ca](https://github.com/neovici/cosmoz-omnitable/commit/40087ca7b01ce9894a596dab22cf469c809430c4))

# [8.0.0-beta.7](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.6...v8.0.0-beta.7) (2021-12-15)


### Bug Fixes

* send `values` to computeSource ([4a6312d](https://github.com/neovici/cosmoz-omnitable/commit/4a6312d126ceee71cf6b1b1d6d82fa0f5bff27f0))
* **use-dom-columns:** copy over headerCellClass to column config ([e6197d3](https://github.com/neovici/cosmoz-omnitable/commit/e6197d35d48432cb4b093f1e949654cc1ff19931))

# [8.0.0-beta.6](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.5...v8.0.0-beta.6) (2021-12-13)


### Bug Fixes

* **legacy-interop:** match polymer property change events ([178a713](https://github.com/neovici/cosmoz-omnitable/commit/178a71347f3ef24054f8919e9c59276331631f86))

# [8.0.0-beta.5](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.4...v8.0.0-beta.5) (2021-12-13)


### Bug Fixes

* computeSource should by default return the unaltered data ([35addf7](https://github.com/neovici/cosmoz-omnitable/commit/35addf7247aa26a62825e046e5f29058d78dc693))


### Code Refactoring

* change the signature of getComparableValue ([772523e](https://github.com/neovici/cosmoz-omnitable/commit/772523e1a04182761add3a59bb679ed3bbc77b40))


### BREAKING CHANGES

* the signature is now getComparableValue(column, item)

# [8.0.0-beta.4](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.3...v8.0.0-beta.4) (2021-12-10)


### Bug Fixes

* list is not re-rendered ([9dab054](https://github.com/neovici/cosmoz-omnitable/commit/9dab0541173b9f243883e83b891befec7b4beb7d))
* **refactor:** render the layout css via haunted ([0d572a4](https://github.com/neovici/cosmoz-omnitable/commit/0d572a4788fd560db832f51efdf10a2467b64cca))

# [8.0.0-beta.3](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.2...v8.0.0-beta.3) (2021-12-08)


### Features

* **ui:** checkbox color variables ([3025cf3](https://github.com/neovici/cosmoz-omnitable/commit/3025cf3594f49ef551ee72fcec53928d1e626615))
* **ui:** footer color variable ([1ec85a0](https://github.com/neovici/cosmoz-omnitable/commit/1ec85a0f70c384d95ff85772a5dacf45f9ae4f12))

# [8.0.0-beta.2](https://github.com/neovici/cosmoz-omnitable/compare/v8.0.0-beta.1...v8.0.0-beta.2) (2021-12-07)


### Bug Fixes

* support for treenode columns ([37f6825](https://github.com/neovici/cosmoz-omnitable/commit/37f6825d0096bf646863b9e26b9f5b5637035063))

# [8.0.0-beta.1](https://github.com/neovici/cosmoz-omnitable/compare/v7.2.1...v8.0.0-beta.1) (2021-11-28)


* feat!: migrate to hooks ([6285a11](https://github.com/neovici/cosmoz-omnitable/commit/6285a11a6e24ecf4ab343ddc3871112e4ae679a2))


### BREAKING CHANGES

* the columns no longer store the state. A compatibility
layer has been set up to make sure the legacy code still works.

# [7.3.0](https://github.com/neovici/cosmoz-omnitable/compare/v7.2.1...v7.3.0) (2021-12-08)


### Features

* **ui:** checkbox color variables ([98c80fc](https://github.com/neovici/cosmoz-omnitable/commit/98c80fcf5276e46af0b94177cb09bdb8f317773e))
* **ui:** footer color variable ([db1302a](https://github.com/neovici/cosmoz-omnitable/commit/db1302ac17798a8321ad9cf975504ee77dd7fe61))


## [7.2.1](https://github.com/neovici/cosmoz-omnitable/compare/v7.2.0...v7.2.1) (2021-11-03)


### Bug Fixes

* **range-column:** filter out undefined values ([34d4b9c](https://github.com/neovici/cosmoz-omnitable/commit/34d4b9cd230ecd86bc2ebacbf96728c97215afd3))

# [7.2.0](https://github.com/neovici/cosmoz-omnitable/compare/v7.1.1...v7.2.0) (2021-10-26)


### Bug Fixes

* extract generic-sorter pure function ([fbc1951](https://github.com/neovici/cosmoz-omnitable/commit/fbc19519437dbda55b95cc503fa538309f05d967))
* **use-saved-settings:** explicitly pick the relevant information ([9e1b842](https://github.com/neovici/cosmoz-omnitable/commit/9e1b842ab836495adfbe910619360a7af2b96c96))


### Features

* allow filtering on the groupOn column ([879b10a](https://github.com/neovici/cosmoz-omnitable/commit/879b10ad3f43d7890fec5bb6292c531e8b14860a))

## [7.1.1](https://github.com/neovici/cosmoz-omnitable/compare/v7.1.0...v7.1.1) (2021-10-18)


### Bug Fixes

* migrate group-row to haunted ([5f811d4](https://github.com/neovici/cosmoz-omnitable/commit/5f811d4f521ae671ebf32b0ab52f3a44f63b4b96))
* migrate item-row to haunted ([a77eef7](https://github.com/neovici/cosmoz-omnitable/commit/a77eef702445d0d4e336451256593d412e9f5d2a))
* no easy way to reset settings to default ([a0daade](https://github.com/neovici/cosmoz-omnitable/commit/a0daade2a36a5ea015fed8b5a73e066953720ddd))

# [7.1.0](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.7...v7.1.0) (2021-10-15)


### Bug Fixes

* animation happens when visibility state is toggled ([db61b0d](https://github.com/neovici/cosmoz-omnitable/commit/db61b0dc3bf5494c18c4b55a6322b74d345a0177))


### Features

* save settings locally ([d9e8304](https://github.com/neovici/cosmoz-omnitable/commit/d9e8304d741fa588f8169e71f849eb9ed3e81473)), closes [#418](https://github.com/neovici/cosmoz-omnitable/issues/418)

## [7.0.7](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.6...v7.0.7) (2021-10-14)


### Bug Fixes

* _dataChanged optimization is hard to maintain and has little gains ([d31f64a](https://github.com/neovici/cosmoz-omnitable/commit/d31f64a0b020e00b645ebb3809a2ad9354690ed8))
* item processing is debounced unnecessarily ([cdd9222](https://github.com/neovici/cosmoz-omnitable/commit/cdd92220c579494c35684a9c6d118b436c46fcb8))

## [7.0.6](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.5...v7.0.6) (2021-10-14)


### Bug Fixes

* forced flex column is not always the correct one ([9d87c7d](https://github.com/neovici/cosmoz-omnitable/commit/9d87c7d8f2b61b81c190a0aee53a83070c7a563e))

## [7.0.5](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.4...v7.0.5) (2021-10-14)


### Bug Fixes

* **styles:** prevent bottom bar stacking context ([470c295](https://github.com/neovici/cosmoz-omnitable/commit/470c29592354655874201ee657bcb9c064775382))

## [7.0.4](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.3...v7.0.4) (2021-10-08)


### Bug Fixes

* **cosmoz-omnitable-settings:** safari toggle fix ([cbf64aa](https://github.com/neovici/cosmoz-omnitable/commit/cbf64aa70d8f3fca7025d275b056255803c6f4e6))

## [7.0.3](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.2...v7.0.3) (2021-09-21)


### Bug Fixes

* **layout:** error when columns are hidden conditionally ([86942bb](https://github.com/neovici/cosmoz-omnitable/commit/86942bb33d3a901c7a5534c11efea24eeb8e9af6)), closes [#458](https://github.com/neovici/cosmoz-omnitable/issues/458)

## [7.0.2](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.1...v7.0.2) (2021-09-14)


### Bug Fixes

* playwright can't locate elements via the for attribute ([2a25384](https://github.com/neovici/cosmoz-omnitable/commit/2a25384a0c3552052a9be73b80c7c72a1a9b514c))

## [7.0.1](https://github.com/neovici/cosmoz-omnitable/compare/v7.0.0...v7.0.1) (2021-09-08)


### Bug Fixes

* **settings:** toggle settings ([940324b](https://github.com/neovici/cosmoz-omnitable/commit/940324b5ccae02f3d9c4a260bdebc15aa6791bfc))

# [7.0.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.7.0...v7.0.0) (2021-09-07)


### Bug Fixes

* resize handle misaligned when filters are set ([94766c1](https://github.com/neovici/cosmoz-omnitable/commit/94766c1b74667c8f44fbf73ffd3b61120a95aa7e))
* **settings:** resize columns and settings UI fixes ([7cf52d5](https://github.com/neovici/cosmoz-omnitable/commit/7cf52d5dd75e432bebc3d7932dea80c953baed87)), closes [#418](https://github.com/neovici/cosmoz-omnitable/issues/418)


### BREAKING CHANGES

* **settings:** dropped cosmoz-omnitable-column-{index} classes
* **settings:** dropped visibleColumns
* **settings:** dropped disabledColumns

# [6.7.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.6.3...v6.7.0) (2021-09-01)


### Bug Fixes

* checkbox ([724f4fd](https://github.com/neovici/cosmoz-omnitable/commit/724f4fdd94d0c24feb1f2edd01d27b9d6349b855))
* **omnitable:** indeterminate priority ([97af759](https://github.com/neovici/cosmoz-omnitable/commit/97af759ffc5557f50c0137509e87291cd5a1c3bb))
* **omnitable:** propagate editable on visibleColumns ([956f9fc](https://github.com/neovici/cosmoz-omnitable/commit/956f9fc896555d4c597c3f79cae7dd13fdaf8483))
* **settings:** html syntax ([36b13b3](https://github.com/neovici/cosmoz-omnitable/commit/36b13b3b67db3802cb0834c9f459dcad657e7222))
* **settings:** max + 1 priority ([72845f7](https://github.com/neovici/cosmoz-omnitable/commit/72845f7b861b85b4afde2d981978322a6c7ad494))


### Features

* **omnitable:** enable priority sorting ([c50efe1](https://github.com/neovici/cosmoz-omnitable/commit/c50efe1c382684a5b6cf8e0a8d3458061f9f7fdc))
* **settings:** initial implementation ([eddd138](https://github.com/neovici/cosmoz-omnitable/commit/eddd13894ba7bc8278c2c0ce25ceca77dfffb878))
* implement disable and sort persistence ([edd37d1](https://github.com/neovici/cosmoz-omnitable/commit/edd37d1317f1c02168f5f060d1c825804cd4edbe))
* **settings:** initial implementation ([7f6bcbe](https://github.com/neovici/cosmoz-omnitable/commit/7f6bcbe01f2413dd97918671318b41d828268fc2))

## [6.6.3](https://github.com/neovici/cosmoz-omnitable/compare/v6.6.2...v6.6.3) (2021-08-31)


### Bug Fixes

* **resizable-columns:** you can't resize the last column anymore ([181c1c1](https://github.com/neovici/cosmoz-omnitable/commit/181c1c1c84975ec1c0d879783702e8059a4b4c52)), closes [#453](https://github.com/neovici/cosmoz-omnitable/issues/453)

## [6.6.2](https://github.com/neovici/cosmoz-omnitable/compare/v6.6.1...v6.6.2) (2021-08-27)


### Bug Fixes

* **resizable-columns:** columns are hidden even if they could fit ([aab5b97](https://github.com/neovici/cosmoz-omnitable/commit/aab5b97af94f1bb3aae7373b939845f6f896777a))

## [6.6.1](https://github.com/neovici/cosmoz-omnitable/compare/v6.6.0...v6.6.1) (2021-08-27)


### Bug Fixes

* **resizable-columns:** undefined priorities break the layout when resizing columns ([7d808be](https://github.com/neovici/cosmoz-omnitable/commit/7d808bef81a9fcd51d3e58a977bb6f94d218efb0))

# [6.6.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.5.0...v6.6.0) (2021-08-26)


### Features

* flagless resizable columns ([2b8121f](https://github.com/neovici/cosmoz-omnitable/commit/2b8121fc394a81d43c4dba8394464da7c1f8b3e1))

# [6.5.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.4.0...v6.5.0) (2021-08-25)


### Bug Fixes

* prepare for dropping visibleColumns and renamed collapsedColumns ([13c35c4](https://github.com/neovici/cosmoz-omnitable/commit/13c35c4d7b82acbe73c466cd77a1a71ba565f946))
* **item-expand:** expanded rows don't resize when columns are collapsed/expanded ([559a319](https://github.com/neovici/cosmoz-omnitable/commit/559a319bc53983261e34db32c5ded93772feb801))
* **item-row:** editable attribute is set, even if column is not editable ([325c660](https://github.com/neovici/cosmoz-omnitable/commit/325c660c241890caa1daa1c151da8853e365e2cb))
* clean up prototype resize implementation ([6298f7e](https://github.com/neovici/cosmoz-omnitable/commit/6298f7e6258e3dfb3227e552675a7874485216b9))


### Features

* improved resizable columns ([0962e6e](https://github.com/neovici/cosmoz-omnitable/commit/0962e6e4ff1272e32a1ef9346fa505d3d5a98d61))
* support resizeSpeedFactor to adjust the resize animation speed ([660b158](https://github.com/neovici/cosmoz-omnitable/commit/660b158ee21439948bb806b6e87ac2632564f36e))
* **layout:** support FORCE_FIT option ([3e96d50](https://github.com/neovici/cosmoz-omnitable/commit/3e96d5055b5ee7eff2a46de0d680ded4d7f7def1))

# [6.4.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.3.2...v6.4.0) (2021-08-12)


### Features

* values as function ([d908b92](https://github.com/neovici/cosmoz-omnitable/commit/d908b922995e164cd0024a00215c5af3100a9fb8))

## [6.3.2](https://github.com/neovici/cosmoz-omnitable/compare/v6.3.1...v6.3.2) (2021-08-05)


### Bug Fixes

* **date:** hide dropdown icon ([810a239](https://github.com/neovici/cosmoz-omnitable/commit/810a2399c2d4301b1dd82edddd23bb64490ff8ac))

## [6.3.1](https://github.com/neovici/cosmoz-omnitable/compare/v6.3.0...v6.3.1) (2021-07-01)


### Bug Fixes

* typo in `Sort on` ([b312f3d](https://github.com/neovici/cosmoz-omnitable/commit/b312f3dcf9db662316dcf127ffd78415daa0e413))

# [6.3.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.2.1...v6.3.0) (2021-07-01)


### Features

* **cosmoz-omnitable:** replace dropdown for sort and group with autocomplete ([a6da707](https://github.com/neovici/cosmoz-omnitable/commit/a6da707f5b16754a950dda41ff55dceb04f4d189))

## [6.2.1](https://github.com/neovici/cosmoz-omnitable/compare/v6.2.0...v6.2.1) (2021-06-07)


### Bug Fixes

* rows are misaligned when cells have different heights ([9ebac4b](https://github.com/neovici/cosmoz-omnitable/commit/9ebac4be72962911deeb0e55f055236799c7d76d)), closes [#442](https://github.com/neovici/cosmoz-omnitable/issues/442)

# [6.2.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.1.2...v6.2.0) (2021-05-31)


### Features

* resizable headers prototypeFixes [#440](https://github.com/neovici/cosmoz-omnitable/issues/440) ([8b17ddb](https://github.com/neovici/cosmoz-omnitable/commit/8b17ddbf8b287283eecf63ea5880dc5d0286b1b1))

## [6.1.2](https://github.com/neovici/cosmoz-omnitable/compare/v6.1.1...v6.1.2) (2021-05-24)


### Bug Fixes

* selections overlap columns when double clicking ([f3e61e3](https://github.com/neovici/cosmoz-omnitable/commit/f3e61e30bb5084c9f245032c5a596cb719c9cd66)), closes [#434](https://github.com/neovici/cosmoz-omnitable/issues/434)

## [6.1.1](https://github.com/neovici/cosmoz-omnitable/compare/v6.1.0...v6.1.1) (2021-05-17)


### Bug Fixes

* **layout:** layout is broken when grouping ([aa54989](https://github.com/neovici/cosmoz-omnitable/commit/aa549896daf5ee3dfd8927d43125079616800923)), closes [#437](https://github.com/neovici/cosmoz-omnitable/issues/437)

# [6.1.0](https://github.com/neovici/cosmoz-omnitable/compare/v6.0.1...v6.1.0) (2021-05-14)


### Bug Fixes

* improve hover on groupRow ([cf7e810](https://github.com/neovici/cosmoz-omnitable/commit/cf7e810dfa6d00d80cb8e222df38f49664e1ea19))


### Features

* checkboxes/hover ([ed975a7](https://github.com/neovici/cosmoz-omnitable/commit/ed975a780ea5746d0d29b1611688e8791759580e))
* replace hover & checkbox ([ab12245](https://github.com/neovici/cosmoz-omnitable/commit/ab12245f27d5ad0bb36e2385471e22a9de8055f7))

## [6.0.1](https://github.com/neovici/cosmoz-omnitable/compare/v6.0.0...v6.0.1) (2021-04-28)


### Bug Fixes

* expand columns arrow always shows up when table is grouped ([37032cd](https://github.com/neovici/cosmoz-omnitable/commit/37032cd634350709cddc6200501fc61fc7927ebe)), closes [#432](https://github.com/neovici/cosmoz-omnitable/issues/432)
* rendering issues when resizing or scrolling with expanded rows ([2491024](https://github.com/neovici/cosmoz-omnitable/commit/24910248271811ac774a0fb3a36ab48fdaba54e4))

# [6.0.0](https://github.com/neovici/cosmoz-omnitable/compare/v5.2.1...v6.0.0) (2021-04-26)


### Bug Fixes

* prevent ResizeObserver loop completed with undelivered notifications errors ([b7bf18f](https://github.com/neovici/cosmoz-omnitable/commit/b7bf18f211292dd062b80f3a526e62411a04290f))


### Features

* migrate item-expand and item-expand-line to haunted ([b543e32](https://github.com/neovici/cosmoz-omnitable/commit/b543e32112da9c42138e43a0af7155af140ae872))


* feat!: drop legacy layout algorithm ([4df0960](https://github.com/neovici/cosmoz-omnitable/commit/4df0960de2c960e865f0bda322a45f7cf3d2d061))


### BREAKING CHANGES

* layout algorithm has been changed to fast-layout.
Some differences in rendering will occur.

## [5.2.1](https://github.com/neovici/cosmoz-omnitable/compare/v5.2.0...v5.2.1) (2021-04-16)


### Bug Fixes

* **cosmoz-omnitable-column-boolean:** remove label for edit cell ([c842c07](https://github.com/neovici/cosmoz-omnitable/commit/c842c0796a39d38dfa70a0776babc6614ac25942))

# [5.2.0](https://github.com/neovici/cosmoz-omnitable/compare/v5.1.0...v5.2.0) (2021-04-16)


### Features

* implement multi-select ([98c26cb](https://github.com/neovici/cosmoz-omnitable/commit/98c26cb44b5d97522fde58f62c96a154f9cea8d9)), closes [#177](https://github.com/neovici/cosmoz-omnitable/issues/177)

# [5.1.0](https://github.com/neovici/cosmoz-omnitable/compare/v5.0.3...v5.1.0) (2021-04-02)


### Features

* fast-layout ([b2b6a17](https://github.com/neovici/cosmoz-omnitable/commit/b2b6a170aab191114f2d0988869bd22ba74a0a8f)), closes [#426](https://github.com/neovici/cosmoz-omnitable/issues/426)

## [5.0.3](https://github.com/neovici/cosmoz-omnitable/compare/v5.0.2...v5.0.3) (2021-03-25)


### Bug Fixes

* include lib in package ([a7351bf](https://github.com/neovici/cosmoz-omnitable/commit/a7351bfa3c73b5a056182baae695820623c66103))

## [5.0.2](https://github.com/neovici/cosmoz-omnitable/compare/v5.0.1...v5.0.2) (2021-03-25)


### Bug Fixes

* migrate header-row to haunted ([a719438](https://github.com/neovici/cosmoz-omnitable/commit/a719438c9f37589d94ddd0c8758e6fbf04a78270))

## [5.0.1](https://github.com/neovici/cosmoz-omnitable/compare/v5.0.0...v5.0.1) (2021-03-24)


### Bug Fixes

* expanded rows don't update size after column changes ([458ccfa](https://github.com/neovici/cosmoz-omnitable/commit/458ccfa6b4d3c52526d296f272f86cb6329379d8))

# [5.0.0](https://github.com/neovici/cosmoz-omnitable/compare/v4.5.0...v5.0.0) (2021-03-24)


* feat!: migrate all columns to lit-html render functions ([32d6940](https://github.com/neovici/cosmoz-omnitable/commit/32d6940d3cb916ea90dbf2e7c222ba8161445ba9))


### Bug Fixes

* autocomplete columns don't display 0 value ([7a1ecf2](https://github.com/neovici/cosmoz-omnitable/commit/7a1ecf2e068fcca96dd54c53b27527fcc5459ab9))
* update docs, tests ([25993fb](https://github.com/neovici/cosmoz-omnitable/commit/25993fbadccf5b69d835a3f32101d848ab0fe90c))
* webcomponents-bundle is not installed anymore ([64e8d2f](https://github.com/neovici/cosmoz-omnitable/commit/64e8d2f21864d2026e4c8dbd9d083cfa3bc827b0))
* **column:** migrate templates to render functions ([aa17708](https://github.com/neovici/cosmoz-omnitable/commit/aa1770843b08f8a483db0f6fcf64404116230a82))
* **column-amount:** migrate templates to render functions ([7261def](https://github.com/neovici/cosmoz-omnitable/commit/7261def611aac619110d9bd508c3a392c51a5d35))
* **column-autocomplete:** migrate templates to render functions ([84d747f](https://github.com/neovici/cosmoz-omnitable/commit/84d747ffec399ff183aa059653315903c6e45bae))
* **column-boolean:** migrate templates to render functions ([021609d](https://github.com/neovici/cosmoz-omnitable/commit/021609d64322e0a9d9efb9575348bd4e4800d1e1))
* **column-date:** migrate templates to render functions ([2d7d97c](https://github.com/neovici/cosmoz-omnitable/commit/2d7d97ca80a8177410230bd3dbc1a7ec5446a3d7))
* **column-datetime:** migrate templates to render functions ([8b1ccb0](https://github.com/neovici/cosmoz-omnitable/commit/8b1ccb009dd183633df5ed46d0c50a83eec25209))
* **column-list:** migrate templates to render functions ([574b02b](https://github.com/neovici/cosmoz-omnitable/commit/574b02b6029a1d1321fbf67c86fc697c21925c39))
* **column-list-horizontal:** migrate templates to render functions ([55e0835](https://github.com/neovici/cosmoz-omnitable/commit/55e08357abc16b75bddeb7cead666a9ff6f905d0))
* **column-number:** migrate templates to render functions ([31ac8db](https://github.com/neovici/cosmoz-omnitable/commit/31ac8dbf66ccd6097fad3d605a017155e7130d25))
* **column-time:** migrate templates to render functions ([20dec3f](https://github.com/neovici/cosmoz-omnitable/commit/20dec3f57a339129af614779995b8652d6326feb))
* **demo:** migrate to render-cell ([d29290d](https://github.com/neovici/cosmoz-omnitable/commit/d29290dc759628865ebe3c604ce48891699af12e))


### BREAKING CHANGES

* dropped support for <template> based customization

# [4.5.0](https://github.com/neovici/cosmoz-omnitable/compare/v4.4.0...v4.5.0) (2021-03-23)


### Features

* **cosmoz-omnitable:** renders totalAvailable in row stats ([63ac024](https://github.com/neovici/cosmoz-omnitable/commit/63ac024171fba89d35ef52911ff86a1e6a9d2545))

# [4.4.0](https://github.com/neovici/cosmoz-omnitable/compare/v4.3.1...v4.4.0) (2021-02-19)


### Features

* custom render group function ([69347e4](https://github.com/neovici/cosmoz-omnitable/commit/69347e48022e934e5cbae0ef4f6665579cc9404d)), closes [#65](https://github.com/neovici/cosmoz-omnitable/issues/65)

## [4.3.1](https://github.com/neovici/cosmoz-omnitable/compare/v4.3.0...v4.3.1) (2021-02-18)


### Bug Fixes

* support render functions in group rows ([#415](https://github.com/neovici/cosmoz-omnitable/issues/415)) ([b1584cd](https://github.com/neovici/cosmoz-omnitable/commit/b1584cdd0e66cae893dd82d42080dfa85c6a454b))

# [4.3.0](https://github.com/neovici/cosmoz-omnitable/compare/v4.2.1...v4.3.0) (2021-02-17)


### Bug Fixes

* table is not re-rendered when item is replaced ([4719efb](https://github.com/neovici/cosmoz-omnitable/commit/4719efb254a7b6c59024417803cf89804168f83d))


### Features

* support custom templates via lit render functions ([079c192](https://github.com/neovici/cosmoz-omnitable/commit/079c192a80c23c9cb73ec3dc837cdab69be80984)), closes [#398](https://github.com/neovici/cosmoz-omnitable/issues/398)

## [4.2.1](https://github.com/neovici/cosmoz-omnitable/compare/v4.2.0...v4.2.1) (2021-02-17)


### Bug Fixes

* **deps:** replace file saver ([#414](https://github.com/neovici/cosmoz-omnitable/issues/414)) ([ccbb5b8](https://github.com/neovici/cosmoz-omnitable/commit/ccbb5b8bd6404a28adf161b9da9b5fc8a58a4996))

# [4.2.0](https://github.com/neovici/cosmoz-omnitable/compare/v4.1.1...v4.2.0) (2021-01-27)


### Features

* expose bottom-bar info slot ([e4fcc70](https://github.com/neovici/cosmoz-omnitable/commit/e4fcc70c7258bcad24e0566b3e273014d0cd85a7))

## [4.1.1](https://github.com/neovici/cosmoz-omnitable/compare/v4.1.0...v4.1.1) (2021-01-27)


### Bug Fixes

* **column-autocomplete:** handle numbers in getComparableValue ([1989daa](https://github.com/neovici/cosmoz-omnitable/commit/1989daa56dc7cc6b3f6ae165cffe0a5580122115))

# [4.1.0](https://github.com/neovici/cosmoz-omnitable/compare/v4.0.5...v4.1.0) (2021-01-07)


### Features

* adds emptyLabel and emptyValue to list columns ([1eba46c](https://github.com/neovici/cosmoz-omnitable/commit/1eba46ccdf299d3a398910ea04d90316a506d9bf)), closes [#406](https://github.com/neovici/cosmoz-omnitable/issues/406)

## [4.0.5](https://github.com/neovici/cosmoz-omnitable/compare/v4.0.4...v4.0.5) (2020-12-09)


### Bug Fixes

* **bar:** overflow bar to prevent auto scrolling ([183247c](https://github.com/neovici/cosmoz-omnitable/commit/183247c4c3f3b08dd9a0d05476219374ecbe4997))

## [4.0.4](https://github.com/neovici/cosmoz-omnitable/compare/v4.0.3...v4.0.4) (2020-12-03)


### Bug Fixes

* **pkg:** include all files in package ([4e6b94e](https://github.com/neovici/cosmoz-omnitable/commit/4e6b94e0cfbb31d12bacc0117c50e06441b042c3))

## [4.0.3](https://github.com/neovici/cosmoz-omnitable/compare/v4.0.2...v4.0.3) (2020-12-03)


### Bug Fixes

* **update-columns:** slotted columns are not displayed ([ba6c1a8](https://github.com/neovici/cosmoz-omnitable/commit/ba6c1a8f044be1d6c31d825f0ea840d074ab966c))

## [4.0.2](https://github.com/neovici/cosmoz-omnitable/compare/v4.0.1...v4.0.2) (2020-11-02)


### Bug Fixes

* **column-boolean:** notify when clearing ([3ff469b](https://github.com/neovici/cosmoz-omnitable/commit/3ff469b02279499efda27570ea058e03e4424750))

## [4.0.1](https://github.com/neovici/cosmoz-omnitable/compare/v4.0.0...v4.0.1) (2020-10-22)


### Bug Fixes

* remove extra padding for header inputs ([3cc4fba](https://github.com/neovici/cosmoz-omnitable/commit/3cc4fba45120b5390f7e18f59c44838a53be1e3c))
* upgrade cosmoz-autocomplete to 2.4.10 ([95b02cb](https://github.com/neovici/cosmoz-omnitable/commit/95b02cb6ce73cb667dfb7d908bd69518fc237e90))

# [4.0.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.9...v4.0.0) (2020-10-15)


### Bug Fixes

* upgrade to latest bottom-bar ([952ebee](https://github.com/neovici/cosmoz-omnitable/commit/952ebee6da48c316d8f414e881a0ef317714ae94)), closes [#24802](https://github.com/neovici/cosmoz-omnitable/issues/24802)


### BREAKING CHANGES

* If your component allows adding content to the omnitable via the actions slot,
then you have to also make sure you also export `bottom-bar-toolbar` and `bottom-bar-menu`,
otherwise the actions will not show up.

## [3.8.9](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.8...v3.8.9) (2020-10-14)


### Bug Fixes

* handles null values in list columns ([9089556](https://github.com/neovici/cosmoz-omnitable/commit/9089556809f14d03d1330dce3e65046702862e48))

## [3.8.8](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.7...v3.8.8) (2020-10-14)


### Bug Fixes

* always selectable if data is valid ([cb8a63e](https://github.com/neovici/cosmoz-omnitable/commit/cb8a63e852242c191e11c79d17780df2230fc117))
* removes _showCheckboxes ([22991e7](https://github.com/neovici/cosmoz-omnitable/commit/22991e74a5f4bd740e91e570ea62a0fe9e14965e))

## [3.8.7](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.6...v3.8.7) (2020-10-13)


### Bug Fixes

* **remove-item:** arrayDelete is undefined ([2432988](https://github.com/neovici/cosmoz-omnitable/commit/2432988eb6ffe1fdd07dfd9f899d7e187ea6341a))

## [3.8.6](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.5...v3.8.6) (2020-10-12)


### Bug Fixes

* **render:** grouped list renders old items ([c16e761](https://github.com/neovici/cosmoz-omnitable/commit/c16e7618835c1f935b243f77481c9586ec7f5a70)), closes [#24702](https://github.com/neovici/cosmoz-omnitable/issues/24702)

## [3.8.5](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.4...v3.8.5) (2020-10-07)


### Bug Fixes

* cosmoz-omnitable, adding empty set message slot [#23679](https://github.com/neovici/cosmoz-omnitable/issues/23679) ([62be7d9](https://github.com/neovici/cosmoz-omnitable/commit/62be7d9a622b85245bc9514974489c8873c910b2))

## [3.8.4](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.3...v3.8.4) (2020-10-05)


### Bug Fixes

* replace iron-flex-layout with css ([5ff1de8](https://github.com/neovici/cosmoz-omnitable/commit/5ff1de8aef6b88b15d2b79061ac902d89946bb0c))

## [3.8.3](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.2...v3.8.3) (2020-10-03)


### Bug Fixes

* replace iron-resizable-behavior with a ResizeObserver ([3254986](https://github.com/neovici/cosmoz-omnitable/commit/3254986971a45d696e55ec1e9c4bcba7f05b3c90))

## [3.8.2](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.1...v3.8.2) (2020-09-22)


### Bug Fixes

* list, only render spinner when loading [#24260](https://github.com/neovici/cosmoz-omnitable/issues/24260) ([213860f](https://github.com/neovici/cosmoz-omnitable/commit/213860f19767b9b41b0faa2399c8bf6bf1ca8a9a))

## [3.8.1](https://github.com/neovici/cosmoz-omnitable/compare/v3.8.0...v3.8.1) (2020-09-21)


### Bug Fixes

* autocomplete, only render spinner when loading [#24260](https://github.com/neovici/cosmoz-omnitable/issues/24260) ([2461b1a](https://github.com/neovici/cosmoz-omnitable/commit/2461b1a19f7b6f9a33979bb78a7907a4da16f9b0))

# [3.8.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.12...v3.8.0) (2020-09-02)


### Bug Fixes

* add autocomplete tests for external values, key/value values ([e9dbe8e](https://github.com/neovici/cosmoz-omnitable/commit/e9dbe8e6c6a9dc8a79538a0104f94e960bf34e85))


### Features

* autocomplete: allow key/value object suggestions source ([9206a2f](https://github.com/neovici/cosmoz-omnitable/commit/9206a2f80ef7e34d406bf2a94d3ca0ed9d1cf265))

## [3.7.12](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.11...v3.7.12) (2020-08-18)


### Bug Fixes

* hide dropdown menu icons [#22545](https://github.com/neovici/cosmoz-omnitable/issues/22545) ([2e840cf](https://github.com/neovici/cosmoz-omnitable/commit/2e840cf0401f5d235dde28b8d8e2a6be0846951c))

## [3.7.11](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.10...v3.7.11) (2020-08-14)


### Bug Fixes

* **column-list-data:** add ellipses to overflow ([21335e3](https://github.com/neovici/cosmoz-omnitable/commit/21335e37ed353eac6e73dd6187ff40d1f6a40c0b))

## [3.7.10](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.9...v3.7.10) (2020-08-13)


### Bug Fixes

* hide dropdown menu icons [#22545](https://github.com/neovici/cosmoz-omnitable/issues/22545) ([baf9ed2](https://github.com/neovici/cosmoz-omnitable/commit/baf9ed2d911ce8e9fd870f936a7930990cab6e5b))

## [3.7.9](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.8...v3.7.9) (2020-06-19)


### Bug Fixes

* make sure we only evaluate regrouping if actually grouped ([ca3a19e](https://github.com/neovici/cosmoz-omnitable/commit/ca3a19e1e38d356fbbc0d09eec7bc50f2691bb1f))
* only evaluate resorting if sorted ([286928e](https://github.com/neovici/cosmoz-omnitable/commit/286928e9f00f9b550f6acbad482061e1f1b495e5))

## [3.7.8](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.7...v3.7.8) (2020-06-16)


### Bug Fixes

* suppress scroll reset on item replace ([9cc4d0c](https://github.com/neovici/cosmoz-omnitable/commit/9cc4d0cf6f9e5a40a0ab0b9053581432793d0f33))

## [3.7.7](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.6...v3.7.7) (2020-06-11)


### Bug Fixes

* autocomplete string comparable value ([432e87e](https://github.com/neovici/cosmoz-omnitable/commit/432e87e0fc1402d9e5f6f7aaa635133ed3756a0a))

## [3.7.6](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.5...v3.7.6) (2020-06-10)


### Bug Fixes

* correct comparable values for object autocomplete column ([4a15be8](https://github.com/neovici/cosmoz-omnitable/commit/4a15be8c72e68151c967aa522def26224ebb009f))

## [3.7.5](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.4...v3.7.5) (2020-06-03)


### Bug Fixes

* restore internal suggestion filtering for autocomplete columns ([62103e7](https://github.com/neovici/cosmoz-omnitable/commit/62103e759401ae77be2d5c189399141e40659498))

## [3.7.4](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.3...v3.7.4) (2020-05-28)


### Bug Fixes

* don't overflow editable boolean column ([93a3fa7](https://github.com/neovici/cosmoz-omnitable/commit/93a3fa735c27b2ec2a0780803874d10422b37179))
* toggle editable attribute for item row element ([e08d703](https://github.com/neovici/cosmoz-omnitable/commit/e08d70357dd36db8d5bfa8e5ed85fe426404d8e6))

## [3.7.3](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.2...v3.7.3) (2020-05-08)


### Bug Fixes

* depend on source in computeValue ([f0660a7](https://github.com/neovici/cosmoz-omnitable/commit/f0660a73d18384625c4ac1c8b65a34d20c96d8d8))
* restore omnitable list column  filter behavior ([c50db01](https://github.com/neovici/cosmoz-omnitable/commit/c50db01af3255657619f8dabf29041b3b691174d))

## [3.7.2](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.1...v3.7.2) (2020-05-07)


### Bug Fixes

* autocomplete external filtered columns ([ce2ea40](https://github.com/neovici/cosmoz-omnitable/commit/ce2ea40b627da5ff8fe8bfdfac80e197f15e3e68))
* autosize autocomplete columns ([9bcd02d](https://github.com/neovici/cosmoz-omnitable/commit/9bcd02dabbb3e347b411085c10cb0a423f05707c))
* update props for autocomplete columns ([23ddb7f](https://github.com/neovici/cosmoz-omnitable/commit/23ddb7f629cd0d752c92890da34437bd81a0430e))

## [3.7.1](https://github.com/neovici/cosmoz-omnitable/compare/v3.7.0...v3.7.1) (2020-05-05)


### Bug Fixes

* **autocomplete:** handle autocomplete onFocusChange ([b03d95e](https://github.com/neovici/cosmoz-omnitable/commit/b03d95e3b51f7f214c053750e6ec6a49d9ddbd21))

# [3.7.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.6.0...v3.7.0) (2020-04-29)


### Features

* replace paper-autocomplete with cosmoz-autocomplete ([ee80629](https://github.com/neovici/cosmoz-omnitable/commit/ee806290f51a1abe8f189334750f405ccd3db1b0))

# [3.6.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.5.0...v3.6.0) (2020-04-11)


### Bug Fixes

* refilter if the splice update is something else than replace ([7d93d6c](https://github.com/neovici/cosmoz-omnitable/commit/7d93d6cf040a4d4bfda66d6527a9a33e44f8a777))
* reflow logic to reuse call ([4cb9ed2](https://github.com/neovici/cosmoz-omnitable/commit/4cb9ed2e86e9290a5286ef5719858b2ae5a596b6))
* use column objects instread of groupOn/sortOn ([50a64aa](https://github.com/neovici/cosmoz-omnitable/commit/50a64aad0acf96227642164cc9c7875fa432133d))
* use isEmpty implementation from cosmoz-utils ([2388001](https://github.com/neovici/cosmoz-omnitable/commit/23880013a346f2bdcf12c35f2fb950af74d100f4))


### Features

* adjust effects according to item updates ([cd0d3ae](https://github.com/neovici/cosmoz-omnitable/commit/cd0d3ae65b14b651d95f508f840334f27feb4a5b))
* list column value property groupon ([07ef494](https://github.com/neovici/cosmoz-omnitable/commit/07ef4946ff1f98437d56088cb4851f077d3a361e))

# [3.5.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.4.1...v3.5.0) (2020-03-25)


### Features

* allow objects as autocomplete values ([a83defe](https://github.com/neovici/cosmoz-omnitable/commit/a83defe70077919e6db526c9ca5572b6554be048))

## [3.4.1](https://github.com/neovici/cosmoz-omnitable/compare/v3.4.0...v3.4.1) (2020-03-25)


### Bug Fixes

* enable styling of local/remote column header suggestions ([8d188e2](https://github.com/neovici/cosmoz-omnitable/commit/8d188e2bb32c1ce34f8f085f5ddd9bfd403285d0))

# [3.4.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.3.3...v3.4.0) (2020-03-16)


### Features

* upgrade to cosmoz-page-router@^6.0.0 ([213bff8](https://github.com/neovici/cosmoz-omnitable/commit/213bff8d938d683fd941b9adb82ddfaedb4e3bd4))

## [3.3.3](https://github.com/neovici/cosmoz-omnitable/compare/v3.3.2...v3.3.3) (2020-03-15)


### Bug Fixes

* adjustColumns handles empty cells ([ae01e2f](https://github.com/neovici/cosmoz-omnitable/commit/ae01e2f4569077c25ed43680293fa2799b3b5893))

## [3.3.2](https://github.com/neovici/cosmoz-omnitable/compare/v3.3.1...v3.3.2) (2020-03-10)


### Bug Fixes

* filters are lost after refresh ([d4b90af](https://github.com/neovici/cosmoz-omnitable/commit/d4b90af7c5915cee7b31aca307246cfecd26cff3)), closes [#23129](https://github.com/neovici/cosmoz-omnitable/issues/23129)

## [3.3.1](https://github.com/neovici/cosmoz-omnitable/compare/v3.3.0...v3.3.1) (2020-03-04)


### Bug Fixes

* style paper-button in download-menu slot ([902151a](https://github.com/neovici/cosmoz-omnitable/commit/902151a106c4c0864ea65923257f5afb0b638bae))

# [3.3.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.2.2...v3.3.0) (2020-03-03)


### Features

* adds download-menu slot ([ef4a4bd](https://github.com/neovici/cosmoz-omnitable/commit/ef4a4bdb4a8db1e50b4ad52b6122894ab302260b))

## [3.2.2](https://github.com/neovici/cosmoz-omnitable/compare/v3.2.1...v3.2.2) (2020-02-27)


### Bug Fixes

* rework boolean column [#315](https://github.com/neovici/cosmoz-omnitable/issues/315) ([#340](https://github.com/neovici/cosmoz-omnitable/issues/340)) ([9025c27](https://github.com/neovici/cosmoz-omnitable/commit/9025c274295589d9e41ee690dbfad12e67cf3228))

## [3.2.1](https://github.com/neovici/cosmoz-omnitable/compare/v3.2.0...v3.2.1) (2020-02-26)


### Bug Fixes

* rework boolean column [#315](https://github.com/neovici/cosmoz-omnitable/issues/315) ([#335](https://github.com/neovici/cosmoz-omnitable/issues/335)) ([40e44b3](https://github.com/neovici/cosmoz-omnitable/commit/40e44b3bc6b6d15f949fae7f6abc29b2da7c96a4))

# [3.2.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.1.0...v3.2.0) (2020-02-26)


### Features

* adding item-row-min-height custom property [#22270](https://github.com/neovici/cosmoz-omnitable/issues/22270) ([26bd0dc](https://github.com/neovici/cosmoz-omnitable/commit/26bd0dc))

# [3.1.0](https://github.com/neovici/cosmoz-omnitable/compare/v3.0.17...v3.1.0) (2019-11-28)


### Features

* **selection:** support cosmoz-grouped-list compareItemsFn ([#334](https://github.com/neovici/cosmoz-omnitable/issues/334)) ([af184e7](https://github.com/neovici/cosmoz-omnitable/commit/af184e7))

## [3.0.17](https://github.com/neovici/cosmoz-omnitable/compare/v3.0.16...v3.0.17) (2019-10-31)


### Bug Fixes

* make sure spinner in autocomplete is properly hidden ([1825223](https://github.com/neovici/cosmoz-omnitable/commit/1825223))

## [3.0.16](https://github.com/neovici/cosmoz-omnitable/compare/v3.0.15...v3.0.16) (2019-10-30)


### Bug Fixes

* `all selected` checkbox is checked ([1112844](https://github.com/neovici/cosmoz-omnitable/commit/1112844))

## [3.0.15](https://github.com/neovici/cosmoz-omnitable/compare/v3.0.14...v3.0.15) (2019-10-17)


### Bug Fixes

* **omnitable:** make saveAs import explicit ([ad7413c](https://github.com/neovici/cosmoz-omnitable/commit/ad7413c))

## [3.0.14](https://github.com/neovici/cosmoz-omnitable/compare/v3.0.13...v3.0.14) (2019-10-10)


### Bug Fixes

* **deps:** update dependencies ([aaffdee](https://github.com/neovici/cosmoz-omnitable/commit/aaffdee))

## [3.0.13](https://github.com/neovici/cosmoz-omnitable/compare/v3.0.12...v3.0.13) (2019-10-07)


### Bug Fixes

* **styling:** make hidden attribute apply display: none ([2487b5a](https://github.com/neovici/cosmoz-omnitable/commit/2487b5a))

## [3.0.12](https://github.com/neovici/cosmoz-omnitable/compare/v3.0.11...v3.0.12) (2019-10-07)


### Bug Fixes

* **filter:** free text filters don't persist ([7e0762d](https://github.com/neovici/cosmoz-omnitable/commit/7e0762d))
