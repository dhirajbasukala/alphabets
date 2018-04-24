const { resolve } = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackSimpleProgressPlugin = require("webpack-simple-progress-plugin");

module.exports = env => {
  return {
    entry: ["./index.js"],
    output: {
      filename: "bundle.js",
      path: resolve(__dirname, "dist"),
      publicPath: "/"
    },
    context: resolve(__dirname, "src"),
    devtool: "source-map",
    stats: "errors-only",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        }
      ]
    },

    plugins: [
      new WebpackSimpleProgressPlugin(),
      new HtmlWebpackPlugin({
        title: "Barnamala",
        template: `index.html`,
        hash: true,
        minify: {
          collapseWhitespace: true
        }
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: true
        }
      }),
      new ExtractTextPlugin("styles.css"),
      new BundleAnalyzerPlugin(),
      new CleanWebpackPlugin([`dist`])
    ]
  };
};
