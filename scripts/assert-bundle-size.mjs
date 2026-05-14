/**
 * Guardrail: subpath-only Rollup output must stay small (catches accidental mega-barrel).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'fixtures', 'bundle-smoke', 'out.mjs');
const maxBytes = 400_000;

const stat = fs.statSync(out);
if (stat.size > maxBytes) {
  console.error(
    `bundle-smoke out.mjs is ${stat.size} bytes (max ${maxBytes}). ` +
      'Suspect entire icon set is being rolled up.',
  );
  process.exit(1);
}
console.log(`assert-bundle-size: ok (${stat.size} bytes ≤ ${maxBytes})`);
