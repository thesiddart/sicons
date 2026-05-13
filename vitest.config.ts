import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const root = path.dirname(fileURLToPath(import.meta.url));

/** Resolve like consumers: `sicons` and `sicons/<style>/…` → built files in `dist/`. */
export default defineConfig({
  resolve: {
    alias: [
      { find: /^sicons\/(.+)$/, replacement: `${path.resolve(root, 'dist')}/$1` },
      { find: 'sicons', replacement: path.resolve(root, 'dist/index.js') },
    ],
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
    passWithNoTests: false,
  },
});
