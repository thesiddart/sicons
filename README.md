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

Bundlers that follow ESM re-exports and respect `"sideEffects": false` can include only the icon modules you use.

### Subpath (smallest module graph)

```tsx
import { AddBold } from 'sicons/bold/AddBold';
import { HomeOutline } from 'sicons/outline/HomeOutline';
```

Use the **component basename** (PascalCase + style), matching the file under `dist/<style>/`. Also available: `sicons/bold`, `sicons/outline`, … (per-style barrels).

Published `package.json` **`exports`** maps these paths to the matching `.js` / `.cjs` / `.d.ts` files.

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
| `color` | `string` | `'currentColor'` | Icon color |
| All SVG props | `React.SVGProps<SVGSVGElement>` | - | Standard SVG attributes (`className`, `style`, `aria-*`, …) |

Re-exported type: `import type { IconProps } from 'sicons';`

### Colors

Source SVGs are normalized at build time so `fill` and `stroke` use **`currentColor`**, so `color`, `className` (e.g. Tailwind `text-*`), and parent CSS all behave predictably.

## React Server Components / Next.js

Icons are **stateless function components** with no hooks or browser-only APIs. You do **not** need `'use client'` for static SVG icons in the App Router. If you wrap an icon in interactive UI, add `'use client'` on that wrapper instead.

## Styling

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

Runs a full `build:lib` first, then:

1. **Vitest** — `react-dom/server` `renderToString` for barrel + subpath imports (all four styles), `className` / `aria-*`, and **jsdom** `hydrateRoot` parity checks (no hydration mismatch errors).
2. **Smoke** — `scripts/verify-packaging.mjs` resolves a few built entry points without React.

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
├── tests/               # Vitest SSR + hydration tests
├── vitest.config.ts
└── dist/               # Published build output
```

## License

MIT

## Contributing

Contributions are welcome. Please read [project-overview.md](./project-overview.md) for how icons should be structured and named.

Repository: [github.com/thesiddart/sicons](https://github.com/thesiddart/sicons)
