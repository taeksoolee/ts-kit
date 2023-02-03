// import pkg from '../../package.json';
// import { createRollupConfig } from './createRollupConfig';
const pkg = require('../../package.json');
const { createRollupConfig } = require('./createRollupConfig');

const name = 'index';
const options = [
  {
    name,
    format: 'cjs',
    input: pkg.source,
  },
  { name, format: 'esm', input: pkg.source },
  {
    name,
    format: 'umd',
    input: pkg.source,
  },
];

module.exports = {
  default: options.map((option) => createRollupConfig(option)),
};