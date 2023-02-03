// import pkg from '../../package.json';
// import { createRollupConfig } from './createRollupConfig';
const pkg = require('../../package.json');
const { createRollupConfig } = require('./createRollupConfig');


function getOptions(name) {
  const input = `src/${name === 'index' ? name : `${name}/index`}.ts`;
  return [
    { name, input, format: 'cjs', },
    { name, input, format: 'esm' },
    { name, input, format: 'umd', },
  ];
}

const options = [
  ...getOptions('index'),
  ...getOptions('functional'),
];

module.exports = {
  default: options.map((option) => createRollupConfig(option)),
};