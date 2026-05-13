# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.2] - 2026-05-14

### Added

- **Vitest** SSR suite: `renderToString` for barrel and `sicons/<style>/…` imports, all four styles, a11y-related props.
- **Hydration checks** (jsdom + `hydrateRoot`) for barrel and subpath icons.
- `pretest` runs full `npm run build` so tests always target fresh `dist/`.

### Fixed

- Generator: map common kebab-case SVG attributes (`stroke-width`, etc.) to React camelCase to avoid SSR/DOM warnings.

## [0.4.1] - 2026-05-14

### Added

- `package.json` **`exports`** wildcards for `sicons/bold/*`, `sicons/outline/*`, `sicons/bulk/*`, `sicons/broken/*`, plus per-style barrels and `sicons/IconWrapper`.
- `npm test` — `scripts/verify-packaging.mjs` smoke-imports a few built modules.

### Changed

- README: document subpath imports, RSC/Next notes, and build/test workflow.

## [0.4.0] - 2026-05-14

### Changed

- **Breaking (publish layout):** library ships as **many small files** (`rollup` `preserveModules`) instead of a single large `dist/index.esm.js` / `dist/index.js` blob.
- Dual output: ESM under `dist/`, CommonJS under `dist/cjs/*.cjs`.
- `main` / `module` / `exports` updated for the new layout.

## [0.3.0] - 2026-05-14

### Added

- **Broken** style: 900 icons and generated `*Broken` React components from `icons/broken/`.
- Package `exports` map and `sideEffects: false` for clearer bundler resolution and tree-shaking.
- Repository, homepage, and bugs URLs pointing to [thesiddart/sicons](https://github.com/thesiddart/sicons).

### Changed

- README and docs updated for four styles and current icon totals (3,853 icons).

## [0.2.0] - 2026-02-05

### Added
- 989 new Bulk style icons
- Bulk icon components with partial fill styling
- Full support for all three icon styles (Bold, Outline, Bulk)

### Changed
- Updated documentation to reflect new bulk icon set
- Total icon count now 2,953 icons across three styles

## [0.1.0] - 2026-01-30

### Added
- Initial release of sicons
- 968 Bold style icons
- 996 Outline style icons
- React component support with TypeScript
- Tree-shakable ESM and CommonJS builds
- Customizable size and color props
- Full TypeScript type definitions
