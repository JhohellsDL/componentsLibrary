import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }), // Sigue usando TypeScript aquí
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(),
      image(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
        'use client': '',
        delimiters: ['', ''],
        include: 'node_modules/react-native-svg/lib/module/index.js',
      }),
    ],
  },
  {
    // Configuración para generar archivos de declaración .d.ts
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
