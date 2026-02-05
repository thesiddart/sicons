# Project Overview — sicons

This document explains the **purpose, structure, constraints, and expected behavior** of the `sicons` project so that **AI models and automated tools** can safely contribute without breaking design or architectural principles.

---

## Project Purpose

`sicons` is an **open-source icon component library** for React.

Its primary goals are:
- Provide reusable icon components
- Support multiple visual styles (currently: `bold`, `outline`)
- Eliminate per-project SVG exports
- Maintain a single source of truth between design and code

The library is intended to be:
- Design-system friendly
- Tree-shakable
- Explicit in API
- Easy to scale

---

## Target Consumers

- React developers
- Design system maintainers
- Product teams
- Open-source users

The project is **not** intended for:
- Runtime icon fetching
- Dynamic style switching
- Raster image usage

---

## Source of Truth

- **Design source:** Figma
- **Code source:** This repository

Figma is authoritative for:
- Icon geometry
- Visual weight
- Alignment
- Style differences

Code is a **representation**, not a redesign.

---

## Supported Icon Styles

`sicons` supports **style-based variants**, not runtime props.

### Current Styles

| Style | Description |
|-----|------------|
| `bold` | Filled or visually heavier icons |
| `outline` | Stroke-based or lighter icons |
| `bulk` | Partially filled icons with accent areas |

Each style:
- Has its own folder
- Has its own component exports
- Is explicit at import time

❌ Do NOT introduce `variant="bold"` props  
❌ Do NOT merge styles into a single component

---

## Design Constraints (Non-Negotiable)

All icons must follow these rules:

### Canvas & Geometry
- Canvas size: `24 × 24`
- No extra padding
- No masks
- No raster effects
- Center-aligned

### Color
- No hardcoded colors
- Use `currentColor`
- Let consumers control color via CSS or props

### Consistency
- Stroke width must be consistent within a style
- Visual weight must match existing icons
- Do not mix bold & outline semantics

---

## Naming Rules (Strict)

### Figma Naming