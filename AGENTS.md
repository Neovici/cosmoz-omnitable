# AGENTS.md — cosmoz-omnitable

A table/grid web component for rendering, sorting, filtering, grouping, selecting, and exporting tabular data. Uses `@pionjs/pion` (haunted-style hooks) + Polymer + lit-html; tests via `@web/test-runner` with Playwright.

Run `npm run build` (tsc), `npm run lint` (eslint), `npm test` (wtr). Read `package.json` for the rest.

## Code Conventions

- **Comma-first**: `export const foo = bar, baz = (x) => x`
- **Tabs**: tab indentation (not spaces)
- **ES modules**: all files use ESM
- **Polymer properties**: `static get properties()` returning POJO with `type`, `value`, `notify`
- **Observed attributes** format on `component()`: flat string array
- **Custom events**: `legacy-filter-changed`, `cosmoz-column-prop-changed`, `column-resize` bubble up
- **Event delegation**: most handlers attached to host, not individual elements
- **i18n**: `i18next` `t()` throughout templates
- **Part attribute**: components expose `part` attributes for CSS customization by consumers

## TypeScript Conventions

- No `as` casts: prefer `!` non-null assertions and `instanceof` / `Array.isArray` / `typeof` guards. `querySelector<T>()` (type parameter, not a cast) is the preferred way to narrow queried elements.
- Guards must not change the valid runtime flow: a dead (unreachable) branch is acceptable (see Gotcha #13), but never add a runtime path the original code didn't have.
- `import type { ... }` for type-only imports.
- Local `interface XxxHost extends HTMLElement { ... }` for host properties a hook reads; keep it minimal.
- `interface UseXxxParams { host; ...; [key: string]: unknown; }` — the index signature lets `...rest` / `...api` spread pass TS.
- `host.shadowRoot!.querySelector<El>('#id')!` — `!` over `as`, type param over cast.
- `useProperty<TSelection<Item>>('selectedItems', [])` — explicit generic so `T` isn't `never[]`.
- `useImperativeApi(api, Object.values(api))` and `useNotifyProperty('name', value)` — call untyped, let generics infer.
- `useProperty` is from `@pionjs/pion` (host props with `notify`); `@neovici/cosmoz-utils` exports a different `useProperty` — don't mix them up.

## Gotchas

1. **Vite override**: `package.json` pins vite to 7.3.6 because newer versions misidentify `@polymer/polymer` static imports causing `SyntaxError: Unexpected token '('`
2. **`useShadowDOM: false`**: `cosmoz-omnitable-item-row`, `cosmoz-grouped-list`, and `sort-and-group-consumer` render in light DOM — styles cascade from parent, component selectors may leak
3. **Filter debounce**: Base text column debounces filter input by 1000ms before applying
4. **Column names are required**: `use-dom-columns.ts` throws console errors if any column lacks a unique `name` attribute
5. **`useProperty` vs `useState`**: `useProperty` from `@pionjs/pion` binds to host properties (reflected to attributes with `notify`), `useState` is internal-only
6. **`columnSymbol`**: Each normalized column has a `[columnSymbol]` property pointing back to the DOM element — used for writing changes back (`__ownChange` gate to prevent loops)
7. **Layout priority system**: Column priority 0 is highest (always visible). Negative or very high numbers push columns toward the back of the visibility queue
8. **Tween animation**: `useTweenArray` runs at speed 1 (snap) by default. `requestTween()` bumps it to `resizeSpeedFactor` (default 1.9) — only during drag-resize, show/hide, or reorder. The speed resets to 1 when the array converges.
9. **`All` sentinel symbol**: `selectedItems` can be the `All` symbol (from `src/lib/utils.ts`) — not just an array. Used when "Select all items" is clicked in the footer. Check with `selectedItems === All`, not `Array.isArray`.
10. **`check-duplicate-components`**: Runs via `lint-staged` on every commit via husky pre-commit hook — it checks `package-lock.json` for duplicate component packages
11. **Settings save/reset**: `onSave` saves current settings to driver via `normalizeStore`. `Shift+click` on reset clears saved settings from driver. `onReset` (without shift) just clears runtime overrides.
12. **Resize nubs**: Last visible column's resize nub is hidden via CSS (can't resize the flex-to-fill column)
13. **Dead-branch guards drop `codecov/patch`**: A guard added for TS narrowing whose branch is never taken at runtime (a dead/unreachable branch, e.g. `if (!(event.target instanceof HTMLInputElement)) return;` on a checkbox handler) is not covered by tests and turns `codecov/patch` red. This is expected and correct per the TypeScript conventions (guards over `as` casts; guards must not change runtime flow). Do not "fix" it by switching to an `as` cast.
