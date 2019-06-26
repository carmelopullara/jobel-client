import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import postcssPresetEnv from 'postcss-preset-env'
import copy from 'rollup-plugin-copy'
import postcssImport from 'postcss-import'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
  ],
  plugins: [
    resolve(),
    copy({
      targets: [
        { src: 'src/fonts/**', dest: 'dist/fonts' }
      ]
    }),
    postcss({
      modules: {
        generateScopedName: '[local]__[hash:base64:5]',
      },
      extract: 'dist/styles.css',
      plugins: [
        postcssPresetEnv({
          stage: 0,
          features: {
            'color-mod-function': { unresolved: 'warn' },
            'custom-properties': {
              preserve: false,
            }
          },
          importFrom: './src/css/global.css',
        }),
        postcssImport(),
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
  ]
}
