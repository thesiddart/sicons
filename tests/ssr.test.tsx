import assert from 'node:assert/strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, it } from 'vitest';
import { AddBold, HomeOutline } from 'sicons';
import { AddBold as AddBoldSubpath } from 'sicons/bold/AddBold';
import { HomeOutline as HomeOutlineSubpath } from 'sicons/outline/HomeOutline';
import { AddBulk } from 'sicons/bulk/AddBulk';
import { AddBroken } from 'sicons/broken/AddBroken';

describe('SSR (react-dom/server)', () => {
  it('renders barrel imports to static SVG markup', () => {
    const html = renderToString(<AddBold size={32} color="#111" data-testid="add" />);
    assert.match(html, /<svg[\s\S]*<\/svg>/);
    assert.match(html, /width="32"/);
    assert.match(html, /height="32"/);
    assert.match(html, /viewBox="0 0 24 24"/);
    assert.match(html, /data-testid="add"/);
    assert.match(html, /color:\s*#111/);
  });

  it('renders subpath imports identically to barrel for the same icon', () => {
    const a = renderToString(<AddBoldSubpath size={24} />);
    const b = renderToString(<AddBold size={24} />);
    assert.equal(a, b);
  });

  it('supports className and aria attributes (Next/RSC-friendly props)', () => {
    const html = renderToString(
      <HomeOutline
        className="h-6 w-6 text-blue-500"
        aria-hidden
        role="img"
        aria-label="Home"
      />,
    );
    assert.match(html, /class="h-6 w-6 text-blue-500"/);
    assert.match(html, /aria-hidden="true"/);
    assert.match(html, /role="img"/);
    assert.match(html, /aria-label="Home"/);
  });

  it('renders all four styles from subpaths', () => {
    const bold = renderToString(<AddBoldSubpath />);
    const outline = renderToString(<HomeOutlineSubpath />);
    const bulk = renderToString(<AddBulk />);
    const broken = renderToString(<AddBroken />);
    for (const [name, html] of [
      ['bold', bold],
      ['outline', outline],
      ['bulk', bulk],
      ['broken', broken],
    ] as const) {
      assert.match(html, /<svg[\s\S]*<\/svg>/, `${name} should produce svg`);
    }
  });
});
