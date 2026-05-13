/**
 * @vitest-environment jsdom
 */
import assert from 'node:assert/strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { describe, it, vi } from 'vitest';
import { AddBold } from 'sicons';
import { HomeOutline } from 'sicons/outline/HomeOutline';

describe('client hydration after SSR markup', () => {
  it('hydrates barrel icon without throwing', () => {
    const markup = renderToString(<AddBold size={20} className="icon" />);
    const div = document.createElement('div');
    div.innerHTML = markup;
    document.body.appendChild(div);

    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    try {
      hydrateRoot(div, <AddBold size={20} className="icon" />);
      const errors = spy.mock.calls.filter(
        (c) => typeof c[0] === 'string' && /did not match|Hydration/i.test(String(c[0])),
      );
      assert.equal(
        errors.length,
        0,
        `unexpected hydration console errors: ${JSON.stringify(spy.mock.calls)}`,
      );
      assert.ok(div.querySelector('svg'));
    } finally {
      spy.mockRestore();
      div.remove();
    }
  });

  it('hydrates subpath icon without throwing', () => {
    const markup = renderToString(<HomeOutline aria-hidden />);
    const div = document.createElement('div');
    div.innerHTML = markup;
    document.body.appendChild(div);

    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    try {
      hydrateRoot(div, <HomeOutline aria-hidden />);
      const errors = spy.mock.calls.filter(
        (c) => typeof c[0] === 'string' && /did not match|Hydration/i.test(String(c[0])),
      );
      assert.equal(errors.length, 0);
    } finally {
      spy.mockRestore();
      div.remove();
    }
  });
});
