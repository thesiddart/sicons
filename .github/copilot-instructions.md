# AI Agent Instructions for sicons

## Project Architecture

**sicons** is a React icon component library that auto-generates 1,900+ components from SVG source files. The build pipeline transforms raw SVGs into tree-shakable TypeScript components.

### Critical Flow
1. SVG files in `icons/{bold,outline,bulk}/` (source of truth)
2. `generate-components.js` script transforms SVGs → React components in `src/{bold,outline,bulk}/`
3. Rollup bundles components → `dist/` (CJS + ESM)

**Key principle**: Never edit components in `src/` directly—they're auto-generated. Edit the generation script or source SVGs instead.

## Build System

### Commands (from package.json)
- `npm run build:components` — Regenerate all React components from SVGs (run after adding/modifying SVGs)
- `npm run build:lib` — Bundle with Rollup (run after component changes)
- `npm run build` — Full rebuild (components → bundle)
- `npm run dev` — Watch mode for Rollup

### Adding New Icons
1. Place SVG in `icons/bold/`, `icons/outline/`, or `icons/bulk/`
2. Run `npm run build:components` to generate React component
3. Component appears in `src/{style}/` with auto-generated filename

## Code Conventions

### Naming Rules
- **SVG files**: kebab-case (`arrow-right.svg`, `add-circle.svg`)
- **Component names**: PascalCase + Style suffix (`ArrowRightBold`, `AddCircleOutline`, `AddCircleBulk`)
- **Special cases** handled by `toPascalCase()`:
  - Numbers prefix: `2d.svg` → `Icon2dBold`
  - Symbols: `&` → `And`, parentheses stripped
  - Crypto tickers preserved: `bitcoin-btc.svg` → `BitcoinBtcBold`

### Component Structure Pattern
All generated components follow this exact structure (see [AddBold.tsx](src/bold/AddBold.tsx)):
```tsx
export const IconNameStyle: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      {/* SVG content */}
    </svg>
  );
};
```

**Props interface** (from [IconWrapper.tsx](src/IconWrapper.tsx)):
- `size?: number | string` (default: 24)
- `color?: string` (default: 'currentColor')
- All standard `React.SVGProps<SVGSVGElement>`

### Design Constraints (Non-Negotiable)
From [project-overview.md](project-overview.md):
- **Canvas**: Always 24×24 viewBox
- **Colors**: Replace hardcoded fills/strokes with `currentColor` (handled by script)
- **Styles**: Bold, Outline, and Bulk are separate components, NOT a `variant` prop
- **No runtime switching**: Import the specific style needed (`AddBold` vs `AddOutline` vs `AddBulk`)

## Generation Script Details

[generate-components.js](scripts/generate-components.js) handles:
1. **SVG parsing**: Extracts content between `<svg>` tags
2. **Color normalization**: Replaces `fill="..."` and `stroke="..."` with `currentColor`
3. **Name conversion**: kebab-case → PascalCase + style suffix
4. **Index generation**: Auto-creates `index.ts` barrel exports for each style

**Edge cases handled**:
- Directories in `icons/` are skipped (e.g., `icons/bold/battery-2/` is ignored)
- Only `.svg` files are processed
- Invalid SVGs log warnings but don't crash the build

## TypeScript Configuration

- Target: ES2015 (broad compatibility)
- JSX: React (classic transform)
- Strict mode enabled
- Declarations generated to `dist/` for full type support

## Common Tasks

### Modify Icon Appearance
❌ Don't edit components in `src/`  
✅ Edit source SVG in `icons/` → run `npm run build:components`

### Change Component Props/Interface
Edit [IconWrapper.tsx](src/IconWrapper.tsx) → update `IconProps` interface  
Regenerate components: `npm run build:components`

### Add New Style (e.g., "filled")
1. Add to `STYLES` array in [generate-components.js](scripts/generate-components.js)
2. Create `icons/filled/` directory
3. Add SVGs → run `npm run build`

### Debug Build Issues
- **"Component not found"**: Check case sensitivity in imports
- **Colors not theming**: Verify `currentColor` replacement in script output
- **Build fails**: Check `tsconfig.json` paths match `src/` structure

## Export Strategy

[src/index.ts](src/index.ts) uses barrel exports:
```typescript
export { IconProps } from './IconWrapper';
export * from './bold';      // Re-exports from src/bold/index.ts
export * from './outline';   // Re-exports from src/outline/index.ts
export * from './bulk';      // Re-exports from src/bulk/index.ts
```

This enables tree-shaking: `import { AddBold } from 'sicons'` only bundles that one component.

## Testing & Validation

No formal test suite currently. Validation checklist:
1. All SVGs in `icons/` have corresponding components in `src/`
2. Build completes without TypeScript errors
3. Spot-check: Import random icon in [examples/usage.tsx](examples/usage.tsx)
4. Verify `currentColor` works by changing parent CSS color

## Files to Never Edit Directly
- `src/bold/**/*.tsx` (except index.ts if manually managing exports)
- `src/outline/**/*.tsx` (generated files)
- `src/bulk/**/*.tsx` (generated files)
- `dist/` (build output)

## Files to Edit for Changes
- `scripts/generate-components.js` — Component generation logic
- `src/IconWrapper.tsx` — Icon interface/props
- `icons/{bold,outline,bulk}/` — Source SVG files
- `rollup.config.js` — Bundle configuration
