const { resolve } = require('path');
const webpack = require('webpack');
const WebpackSimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = () => ({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname, 'src'),
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'src'),
    publicPath: '/',
    historyApiFallback: true,
    port: 8888,
    host: 'localhost',
    stats: 'errors-only'
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: ['node_modules'],
        loader: 'eslint-loader'
      },

      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  plugins: [
    new WebpackSimpleProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
});
