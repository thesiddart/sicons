# sicons

An open-source icon component library for React.

## Features

- **Tree-shakable** — Import only the icons you need; build output is **one small file per icon** (not a single multi‑MB bundle).
- **Subpath imports** — Optional `sicons/<style>/<Name>` entry points (same pattern as many large icon sets) for predictable resolution.
- **Multiple styles** — Bold, Outline, Bulk, and Broken variants
- **React components** — First-class React support
- **TypeScript** — `IconProps` and per-icon typings; root `index.d.ts` stays small (re-exports only).
- **Design-system friendly** — Works with any design system
- **Customizable** — Control size and color via props

## Import styles

### Barrel (default)

```tsx
import { AddBold, HomeOutline } from 'sicons';
```

Modern bundlers (Vite, webpack 5, Rollup, etc.) usually **tree-shake** this well: the package sets `"sideEffects": false`, and each icon lives in its own file re-exported from the root barrel. You still depend on the toolchain **actually** following those re-exports—if you want zero ambiguity, use subpaths below.

### Subpath (smallest, strictest module graph)

```tsx
import { AddBold } from 'sicons/bold/AddBold';
import { HomeOutline } from 'sicons/outline/HomeOutline';
```

Use the **component basename** (PascalCase + style), matching the file under `dist/<style>/`. Also available: `sicons/bold`, `sicons/outline`, … (per-style barrels).

Published `package.json` **`exports`** maps these paths to the matching `.js` / `.cjs` / `.d.ts` files.

### Install size vs. what the browser downloads

- **`node_modules/sicons` can be large on disk** (often tens of MB). That is expected: thousands of icon modules, **source maps**, **`.d.ts` files**, plus **ESM and CJS** copies. Installs and CI caches pay that cost.
- **End users in the browser** do not download `node_modules` as a blob. They only get what your bundler **includes** in the production JS bundle—typically the icons you import (especially if you use **subpath** imports or a tree-shaken barrel).
- **Future / optional splits:** if install size becomes a problem, a common direction is a second artifact (e.g. **no source maps**, or **ESM-only**) or a scoped package name—this repo currently ships one full tarball. Source maps are useful for debugging consumer bundles; omitting them would shrink installs noticeably.

## Installation

```bash
npm install sicons
```

```bash
yarn add sicons
```

```bash
pnpm add sicons
```

## Available icons

The library includes **3,853 icons** across four styles:

| Style | Count |
|-------|------:|
| **Bold** | 968 |
| **Outline** | 996 |
| **Bulk** | 989 |
| **Broken** | 900 |

Naming: kebab-case SVG basename → PascalCase + style suffix, for example:

- `Add` → `AddBold`, `AddOutline`, `AddBulk`, `AddBroken`
- `ArrowRight` → `ArrowRightBold`, `ArrowRightOutline`, `ArrowRightBulk`, `ArrowRightBroken`

## Props

Each icon component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size (width and height) |
| `color` | `string` | *(see below)* | When set, wins over `style.color`. When omitted, uses `style.color` if present, else **`currentColor`**. Applied on the root `<svg>` as CSS **`color`** so inner `fill="currentColor"` / `stroke="currentColor"` resolve correctly. |
| All SVG props | `React.SVGProps<SVGSVGElement>` | - | Standard attributes (`className`, `style`, `aria-*`, …). Spread after `style` merge; avoid duplicating `color` in both prop and `style.color` unless you intend the prop to override. |


### Colors

Source SVGs are normalized at build time so inner shapes use **`fill="currentColor"`** and **`stroke="currentColor"`** where applicable. The root `<svg>` sets a resolved CSS **`color`** (from the **`color` prop** if provided, otherwise from **`style.color`**, otherwise **`currentColor`**), merged with the rest of **`style`**, so inner **`currentColor`** fills/strokes and utilities like Tailwind **`text-*`** stay consistent.

## Next.js and TypeScript

- **`package.json` `exports`** — Node 16+ and modern bundlers resolve `sicons` and `sicons/outline/AddOutline` style paths; you do not need `legacy` flags for these subpaths.
- **`moduleResolution`** — Use `"moduleResolution": "bundler"` (Next 13+ / TS 5) or `"node16"` / `"nodenext"` so TypeScript follows `exports` for types.
- **Smallest graph** — Prefer `import { AddOutline } from 'sicons/outline/AddOutline'` over `from 'sicons'` when you want the strictest dependency surface (see [Import styles](#import-styles) above).

### React Server Components (App Router)

Icons are **stateless** and do not use hooks or browser-only APIs. You do **not** need `'use client'` on a file that only renders these SVGs. Put `'use client'` on a parent if you add interactivity there.


Icons use `currentColor` by default, making them easy to style with CSS:

```tsx
// Using CSS classes
<AddBold className="text-blue-500" />

// Using inline styles
<AddBold style={{ color: '#3b82f6' }} />

// Using the color prop
<AddBold color="#3b82f6" />
```

## Design principles

- **24×24 canvas** — All icons use a 24×24 viewBox
- **No hardcoded colors** — SVG fills/strokes are normalized to `currentColor` at build time
- **Style separation** — Each visual style is a separate component, not a `variant` prop
- **Consistent weight** — Visual weight is consistent within each style

## Development

### Build

```bash
npm run build
```

This will:

1. Generate React components from SVG files under `icons/{bold,outline,bulk,broken}/`
2. Bundle with Rollup (`preserveModules`: one ESM `.js` and one CJS `.cjs` per source file)
3. Emit TypeScript declarations (`tsc --emitDeclarationOnly`) into `dist/`

### Tests

```bash
npm test
```

Runs **`npm run build`** first (regenerate components + `dist/`), then:

1. **Vitest** — `react-dom/server` `renderToString` for barrel + subpath imports (all four styles), `className` / `aria-*`, and **jsdom** `hydrateRoot` parity checks (no hydration mismatch errors).
2. **Smoke** — `scripts/verify-packaging.mjs` resolves a few built entry points without React.
3. **Bundle guard** — `fixtures/bundle-smoke` rolls up **10 subpath** imports with `react` external; `scripts/assert-bundle-size.mjs` enforces a max output size so a regression to a mega-barrel fails CI.

### Project structure

```
sicons/
├── icons/              # Source SVG files
│   ├── bold/
│   ├── outline/
│   ├── bulk/
│   └── broken/
├── src/                # Generated React components (do not hand-edit style folders)
│   ├── bold/
│   ├── outline/
│   ├── bulk/
│   ├── broken/
│   ├── IconWrapper.tsx
│   └── index.ts
├── fixtures/bundle-smoke/  # Rollup subpath bundle size guard
├── .github/workflows/      # CI (npm test)
└── dist/               # Published build output
```

## License

MIT

## Contributing

Contributions are welcome. Please read [project-overview.md](./project-overview.md) for how icons should be structured and named.

Repository: [github.com/thesiddart/sicons](https://github.com/thesiddart/sicons)
