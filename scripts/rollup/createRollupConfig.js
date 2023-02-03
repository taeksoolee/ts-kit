

// import commonjs from '@rollup/plugin-commonjs';
// import external from 'rollup-plugin-peer-deps-external';
// import sourcemaps from 'rollup-plugin-sourcemaps';
// import { terser } from 'rollup-plugin-terser';
// import typescript from 'rollup-plugin-typescript2';

const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const sourcemaps = require('rollup-plugin-sourcemaps');
const { terser } = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');

function createRollupConfig(options, callback) {
  const name = options.name;
  // A file with the extension ".mjs" will always be treated as ESM, even when pkg.type is "commonjs" (the default)
  // https://nodejs.org/docs/latest/api/packages.html#packages_determining_module_system
  const extName = options.format === 'esm' ? 'mjs' : 'js';
  // const outputName = 'dist/' + [name, options.format, extName].join('.');
  console.log(name);
  const outputName = 'dist/' + [name, options.format, extName].join('.');

  
  const config = {
    input: options.input,
    output: {
      file: outputName,
      format: options.format,
      name: 'ReactHookForm',
      sourcemap: true,
      globals: { react: 'React' },
      exports: 'named',
    },
    plugins: [
      external(),
      typescript({
        tsconfig: options.tsconfig,
        clean: true,
      }),
      options.format === 'umd' &&
        commonjs({
          include: /\/node_modules\//,
        }),
      sourcemaps(),
      options.format !== 'esm' &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true,
          },
        }),
    ].filter(Boolean),
  };

  return callback ? callback(config) : config;
}

module.exports = {
  createRollupConfig,
}