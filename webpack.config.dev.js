const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const eslintLoader = {
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: ['node_modules'],
  loader: 'eslint-loader'
};

module.exports = () => ({
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8888',
    // bundle the client for webpack dev server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: 'eval',

  devServer: {
    hot: true,
    // activate hot reloading

    contentBase: resolve(__dirname, 'src'),
    // match the output path

    publicPath: '/',
    // match the output publicPath

    historyApiFallback: true,

    port: 8888,

    host: 'localhost',
    stats: 'minimal'
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
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new ExtractTextPlugin('../src/styles/AppStyles.css')
    // extract css to separate file
  ],
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
});
