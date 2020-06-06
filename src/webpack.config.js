const webpack = require("webpack")
const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const AntdThemePlugin = require('antd-theme/plugin')
const darkTheme = require("@ant-design/dark-theme")
const BUILD_DIR = path.resolve(__dirname, "public")
const SRC_DIR = path.resolve(__dirname)
const APP_DIR = path.resolve(__dirname, "src/app")

module.exports = {
	mode: "production",
	entry: {
		index: __dirname + "/app/index.jsx",
	},
	output: {
		path: BUILD_DIR,
		filename: "[name].[contenthash:8].bundle.js",
		sourceMapFilename: "[name].[hash].bundle.map",
		publicPath: "",
		library: "Antd",
		libraryTarget: "var",
	},
	optimization: {
		nodeEnv: "production",
		splitChunks: {
			chunks: "async",
			minSize: 30000,
			maxSize: 0,
			minChunks: 2,
			maxAsyncRequests: 5,
			maxInitialRequests: 2,
			automaticNameDelimiter: "-",
			automaticNameMaxLength: 15,
			name: true
		},
		removeEmptyChunks: true,
		noEmitOnErrors: false,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				cache: true,
				extractComments: false,
				terserOptions: {
					sourceMap: false,
					compress: {
						drop_console: false,
					},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "babel-loader",
					},
					{
						loader: "@svgr/webpack",
						options: {
							babel: true,
							icon: false,
						},
					},
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: AntdThemePlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							}
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /public/],
				loader: "babel-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: path.resolve(SRC_DIR, "favicon.ico"),
			template: path.resolve(SRC_DIR, "index.html"),
			chunksSortMode: "none",
		}),
		new AntdDayjsWebpackPlugin(),
		new AntdThemePlugin({
			// Variables declared here can be modified at runtime
			variables: ['primary-color'],
			themes: [
			  {
				name: 'dark',
				filename: require.resolve('antd/lib/style/themes/dark.less'),
			  },
			  {
				name: 'compact',
				filename: require.resolve('antd/lib/style/themes/compact.less'),
			  },
			],
		  })
	],
	externals: {
		UniversalDashboard: "UniversalDashboard",
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: { theme: __dirname + "/components/theme" },
	},
	devServer: {
		disableHostCheck: true,
		historyApiFallback: true,
		overlay: true,
		port: 10000,
		// hot: true,
		compress: true,
		publicPath: "/",
		stats: "minimal",
		proxy: {
			"/api": {
				changeOrigin: true,
				//pathRewrite: { '^/api': '' },
				target: "http://localhost:5000/",
				secure: true,
				logLevel: "debug",
			},
			"/dashboardhub": {
				target: "ws://localhost:5000",
				ws: true,
			},
		},
	},
}
