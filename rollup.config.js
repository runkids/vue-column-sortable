import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {uglify} from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  dest: 'dist/vue-column-sortable.js',
  moduleName: 'columnSortable',
  format: 'umd',
  plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      babel({
          exclude: 'node_modules/**',
      }),
      uglify()
  ],
}