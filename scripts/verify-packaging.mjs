/**
 * Smoke-check: built modules resolve and export components (no React render).
 * Run after `npm run build` (or `npm test`).
 */
import assert from 'node:assert/strict';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const samples = [
  ['bold/AddBold.js', 'AddBold'],
  ['outline/AddOutline.js', 'AddOutline'],
  ['bulk/AddBulk.js', 'AddBulk'],
  ['broken/AddBroken.js', 'AddBroken'],
  ['IconWrapper.js', 'IconWrapper'],
];

for (const [rel, name] of samples) {
  const url = pathToFileURL(path.join(root, 'dist', rel)).href;
  const mod = await import(url);
  assert.equal(typeof mod[name], 'function', `${rel} should export ${name}`);
}

const indexUrl = pathToFileURL(path.join(root, 'dist', 'index.js')).href;
const index = await import(indexUrl);
assert.equal(typeof index.AddBold, 'function', 'dist/index.js should re-export AddBold');
console.log('verify-packaging: ok');
