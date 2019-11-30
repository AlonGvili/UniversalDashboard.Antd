var webpack = require('webpack');
var path = require('path');
var TerserPlugin = require('terser-webpack-plugin');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var SRC_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'src/app');

const options = {
	antDir: path.join(__dirname, './node_modules/antd'),
	stylesDir: path.join(__dirname, './styles'),
	varFile: path.join(__dirname, './styles/variables.less'),
	mainLessFile: path.join(__dirname, './styles/index.less'),
	themeVariables: [
		'@primary-color',
		'@layout-header-background',
		'@bg-color',
		'@component-background',
		'@btn-primary-bg',
		'@menu-bg',
		'@btn-default-bg',
		'@btn-default-color',
		'@card-background',
		'@card-actions-background',
		'@card-head-background',
		'@menu-item-active-bg'
	],
	indexFileName: 'index.html',
	generateOnce: false,
	lessUrl: 'less.js',
	publicPath: '/'
};
const themePlugin = new AntDesignThemePlugin(options);

module.exports = {
	mode: 'production',
	entry: {
		index: __dirname + '/components/index.js'
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].[hash].bundle.js',
		sourceMapFilename: '[name].[hash].bundle.map',
		publicPath: '/',
		library: 'Antd',
		libraryTarget: 'var'
	},
	optimization: {
		nodeEnv: 'production',
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			automaticNameMaxLength: 30,
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				},
			},
		},
		removeEmptyChunks: true,
		noEmitOnErrors: false,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					sourceMap: true,
					compress: {
						drop_console: false
					}
				}
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'css-loader' },
					{ loader: 'less-loader', options: { javascriptEnabled: true } }
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /public/],
				loader: 'babel-loader'
			},
		]
	},
	plugins: [themePlugin],
	externals: {
		UniversalDashboard: 'UniversalDashboard',
		react: 'react',
	},
	resolve: {
		extensions: ['.js', '.jsx', 'less', 'css', 'svg']
	},
	devServer: {
		disableHostCheck: true,
		historyApiFallback: true,
		port: 10000,
		// hot: true,
		compress: true,
		publicPath: '/',
		stats: 'minimal'
	}
};
