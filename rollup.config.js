import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import {plugin as analyze} from 'rollup-plugin-analyzer';

export default [
	// Browser-friendly UMD build
	{
		input: 'src/mobik.js',
		output: {
			file: 'lib/mobik.umd.js',
			format: 'umd',
			name: 'mobik'
		},
		plugins: [
			babel({
				exclude: ['node_modules/**']
			}),
			terser(),
			analyze()
		]
	},
	{
		entry: 'src/mobik.js',
		external: ['ms'],
		output: {
			file: 'lib/mobik.cjs.js',
			format: 'cjs'
		},
		plugins: [
			babel({
				exclude: ['node_modules/**']
			}),
			terser(),
			analyze()
		]
	},
	{
		input: 'src/mobik.js',
		external: ['ms'],
		output: {
			file: 'lib/mobik.esm.js',
			format: 'es'
		},
		plugins: [
			babel({
				exclude: ['node_modules/**']
			}),
			terser(),
			analyze()
		]
	}
];
