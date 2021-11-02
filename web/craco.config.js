const path = require('path')

module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	webpack: {
		alias: {
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@context': path.resolve(__dirname, 'src/context'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@models': path.resolve(__dirname, 'src/models'),
			'@util': path.resolve(__dirname, 'src/util'),
			'@views': path.resolve(__dirname, 'src/views'),
		},
	},
}
