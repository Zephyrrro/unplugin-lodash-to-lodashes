import { createFilter } from '@rollup/pluginutils';
import { createUnplugin } from 'unplugin'
import type { Options } from './types';

const RequireLodashRegexp = /require\(['"`]lodash(?:-es)*\/(\w*)['"`]\)/gm;

const defaultOptions: Options = {
  include: ['**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx', '**/*.vue'],
  exclude: [],
  lib: 'lodash-es'
}

export default createUnplugin<Options>((userOptions: Partial<Options> = {}) => {
  const options = Object.assign(defaultOptions, userOptions) as Required<Options>;
  const filter = createFilter(options.include, options.exclude);

  const { lib } = options;

  return {
    name: 'unplugin-lodash-to-lodashes',
    enforce: 'pre',

    transformInclude(id) {
      return filter(id);
    },    

    vite: {
      resolveId(id) {
        if (/lodash\/\w+/.test(id)) {
          return `${id.replace("lodash", lib)}.js`;
        }
      },
    },

    webpack(compiler) {
      const { resolve } = compiler.options;
      resolve.alias = {
        ...resolve.alias,
        lodash: lib,
      };
    },

    transform(code) {
      //  require("lodash/xxx") -> require("lodash-es/xxx").default
      if (!RequireLodashRegexp.test(code)) return;
      const newCode = code.replace(RequireLodashRegexp, `require("${lib}/$1.js").default`);
      return newCode;
    },
  };
});
