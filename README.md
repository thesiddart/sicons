# sicons

An open-source icon component library for React.

## Features

- ✅ **Tree-shakable** — Import only the icons you need
- 🎨 **Multiple styles** — Bold, Outline, Bulk, and Broken variants
- ⚛️ **React components** — First-class React support
- 🎯 **TypeScript** — Full type safety
- 📦 **Design-system friendly** — Works with any design system
- 🎨 **Customizable** — Control size and color via props

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

## Usage

```tsx
import { AddBold, AddOutline, AddBulk, AddBroken } from 'sicons';

function App() {
  return (
    <div>
      {/* Bold */}
      <AddBold size={24} color="#000" />

      {/* Outline */}
      <AddOutline size={32} color="blue" />

      {/* Bulk */}
      <AddBulk size={28} color="green" />

      {/* Broken (stroke “broken” / dashed style) */}
      <AddBroken size={28} color="currentColor" />

      {/* Uses currentColor by default */}
      <AddOutline className="text-red-500" />
    </div>
  );
}
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
| All SVG props | `React.SVGProps<SVGSVGElement>` | - | Standard SVG attributes |

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
2. Bundle the library with Rollup
3. Emit TypeScript declarations into `dist/`

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
├── scripts/
│   └── generate-components.js
└── dist/               # Published build output
```

### Publish to npm

1. Bump the `version` in `package.json` (this repo uses [Semantic Versioning](https://semver.org/)).
2. Run `npm run build` and confirm it finishes without errors.
3. Log in with `npm login` and publish: `npm publish --access public` (omit `--access public` if the package is already public).

## License

MIT

## Contributing

Contributions are welcome. Please read [project-overview.md](./project-overview.md) for how icons should be structured and named.

Repository: [github.com/thesiddart/sicons](https://github.com/thesiddart/sicons)
