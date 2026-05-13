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

## License

MIT

## Contributing

Contributions are welcome. Please read [project-overview.md](./project-overview.md) for how icons should be structured and named.

Repository: [github.com/thesiddart/sicons](https://github.com/thesiddart/sicons)
