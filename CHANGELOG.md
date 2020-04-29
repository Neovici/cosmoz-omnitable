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
