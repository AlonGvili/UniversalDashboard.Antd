var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'public')
process.env.NODE_ENV = 'production'

module.exports = env => {
  const isDev = env == 'development' || env == 'isolated'

  return {
    entry: {
      index: __dirname + '/components/index.js',
    },
    output: {
      path: BUILD_DIR,
      filename: isDev ? 'charts.[name].bundle.js' : '[name].[hash].bundle.js',
      sourceMapFilename: '[name].[hash].bundle.map',
      publicPath: '',
      library: 'charts',
      libraryTarget: 'var',
    },
    module: {
      rules: [
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: '@svgr/webpack',
              options: {
                babel: false,
                icon: true,
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/, /public/],
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
        },
        {
          test: /\.(eot|ttf|woff2?|otf|svg)$/,
          loader: 'file-loader',
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
      ],
    },
    externals: {
      UniversalDashboard: 'UniversalDashboard',
      react: 'react',
      'react-dom': 'reactdom',
      'react-router-dom': 'reactrouterdom',
      'theme-ui': 'themeui',
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx'],
    },
    plugins: [
      // new RemoveWebpackPlugin(BUILD_DIR)
    ],
    devtool: 'source-map',
    devServer: {
      disableHostCheck: true,
      historyApiFallback: true,
      port: 10000,
      // hot: true,
      compress: true,
      publicPath: '/',
      stats: 'minimal',
    },
  }
}
