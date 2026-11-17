# Test helpers

- `setupOmnitableFixture(omnitableFixture, data)` — mounts an omnitable via
  `fixture()` and resolves once the header row is visible. Assign `.data`
  through it; it returns the omnitable.
- `rowVisible()` / `perform(...)` — settle barriers for the mounted fixture.
- `ignoreResizeObserverLoopErrors(setup, teardown)` — the repo-level alias of
  the lit-virtualizer support helper; use
  `setupIgnoreWindowResizeObserverLoopErrors` from
  `@lit-labs/virtualizer/support/resize-observer-errors.js` when the file does
  not already import this module (it swaps `window.onerror` and deliberately
  swallows **only** the two benign ResizeObserver-loop messages).

## Data generation

`../demo/table-demo-helper#generateTableDemoData(min, max, maxRandomString)`
builds rows with `Math.random()` — **never use it in a deterministic-assert
suite**: it is fine for structural tests (counts, presence, scroll) and the
visual stories stay deterministic on `stories/data.json` instead. For exact
outcome assertions, write literal row data next to the fixture.
