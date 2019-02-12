const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const webpackGlobConfig = require('./webpack.globs.js');

const eslintLoader = {
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: ['node_modules'],
  loader: 'eslint-loader'
};

const linter = process.env.LINTER === 'true' ? eslintLoader : {};

const devConfig = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', `${webpackGlobConfig.APP_DIR}/index.jsx`],
  output: {
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      linter
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: `${webpackGlobConfig.APP_DIR}`,
    compress: true,
    historyApiFallback: true,
    hot: true,
    // open: true,
    port: 3333,
    host: '0.0.0.0',
    stats: 'minimal'
  },
  stats: 'errors-only',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'ENZA - Image Sorter',
      template: `${webpackGlobConfig.APP_DIR}/index.html`,
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      inject: false
    })
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
});

module.exports = devConfig;
