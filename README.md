# sicons

An open-source icon component library for React.

## Features

- ✅ **Tree-shakable** - Import only the icons you need
- 🎨 **Multiple styles** - Bold and Outline variants
- ⚛️ **React components** - First-class React support
- 🎯 **TypeScript** - Full type safety
- 📦 **Design-system friendly** - Works with any design system
- 🎨 **Customizable** - Control size and color via props

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
import { AddBold, AddOutline } from 'sicons';

function App() {
  return (
    <div>
      {/* Bold style */}
      <AddBold size={24} color="#000" />
      
      {/* Outline style */}
      <AddOutline size={32} color="blue" />
      
      {/* Uses currentColor by default */}
      <AddOutline className="text-red-500" />
    </div>
  );
}
```

## Available Icons

The library includes **~1,900+ icons** across two styles:
- **Bold**: 968 icons
- **Outline**: 996 icons

All icons are available as React components with PascalCase names followed by their style:
- `Add` → `AddBold` or `AddOutline`
- `ArrowRight` → `ArrowRightBold` or `ArrowRightOutline`
- `Calendar` → `CalendarBold` or `CalendarOutline`

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

## Design Principles

- **24×24 canvas** - All icons fit within a 24×24 pixel canvas
- **No hardcoded colors** - Icons use `currentColor` for easy theming
- **Style separation** - Bold and Outline are separate components, not props
- **Consistent weight** - Visual weight is consistent within each style

## Development

### Build

```bash
npm run build
```

This will:
1. Generate React components from SVG files
2. Bundle the library with Rollup
3. Generate TypeScript declarations

### Project Structure

```
sicons/
├── icons/              # Source SVG files
│   ├── bold/           # Bold style SVGs
│   └── outline/        # Outline style SVGs
├── src/                # Generated React components
│   ├── bold/           # Bold components
│   ├── outline/        # Outline components
│   ├── IconWrapper.tsx # Base icon wrapper
│   └── index.ts        # Main entry point
├── scripts/            # Build scripts
│   └── generate-components.js
└── dist/               # Built library
```

## License

MIT

## Contributing

Contributions are welcome! Please read the [project-overview.md](./project-overview.md) for guidelines on how icons should be structured and named.
