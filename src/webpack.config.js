var webpack = require("webpack")
var path = require("path")
var TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const darkTheme = require("@ant-design/dark-theme")
// const AntDesignThemePlugin = require("antd-theme-webpack-plugin")

// const options = {
// 	antDir: path.join(__dirname, "./node_modules/antd"),
// 	stylesDir: path.join(__dirname, "./components/styles"),
// 	varFile: path.join(__dirname, "./components/styles/variables.less"),
// 	mainLessFile: path.join(__dirname, "./components/styles/index.less"),
// 	themeVariables: ["@primary-color"],
// 	indexFileName: "index.html",
// 	generateOnce: false,
// 	lessUrl: "less.js",
// 	publicPath: "",
// 	customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
// }

// const themePlugin = new AntDesignThemePlugin(options)

var BUILD_DIR = path.resolve(__dirname, "public")
var SRC_DIR = path.resolve(__dirname)
var APP_DIR = path.resolve(__dirname, "src/app")

module.exports = {
	mode: "production",
	entry: {
		index: __dirname + "/app/index.jsx",
	},
	output: {
		path: BUILD_DIR,
		filename: "[name].[contenthash:8].bundle.js",
		sourceMapFilename: "[name].[hash].bundle.map",
		publicPath: "/",
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
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
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
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "less-loader",
						options: {
							 lessOptions:{
								 modifyVars: {
									 ...darkTheme.default
								},
								javascriptEnabled: true,
							 },
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
		// themePlugin,
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
