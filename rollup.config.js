import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: [
    'src/index.ts',
    'src/format.ts',
  ],
  output: {
    dir: 'lib',
    format: 'es'
  },
  plugins: [
    // multi(),
    typescript(),
    babel(),
    terser({
      // maxWorkers: 4
    }),
  ]
};

