import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const external = ['react'];

const pluginsEsm = [
  peerDepsExternal(),
  typescript({ tsconfig: './tsconfig.rollup.esm.json' }),
];

const pluginsCjs = [
  peerDepsExternal(),
  typescript({ tsconfig: './tsconfig.rollup.cjs.json' }),
];

/** Two passes so each @rollup/plugin-typescript outDir matches Rollup output dir. */
export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    plugins: pluginsEsm,
    external,
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      exports: 'named',
      entryFileNames: '[name].cjs',
    },
    plugins: pluginsCjs,
    external,
  },
];
