import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: path.join(dir, 'entry.mjs'),
  output: {
    file: path.join(dir, 'out.mjs'),
    format: 'esm',
    sourcemap: false,
  },
  external: ['react'],
  treeshake: true,
  logLevel: 'warn',
};
