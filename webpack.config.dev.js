const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = env => {
    return {
        entry: [
            'react-hot-loader/patch',
            //activate HMR for React

            'webpack-dev-server/client?http://localhost:8080',
            //bundle the client for webpack dev server
            //and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            //bundle the client for hot reloading
            //only- means to only hot reload for successful updates


            './index.js'
            //the entry point of our app
        ],
        output: {
            filename: 'bundle.js',
            //the output bundle

            path: resolve(__dirname, 'dist'),

            publicPath: '/'
            //necessary for HMR to know where to load the hot update chunks
        },

        context: resolve(__dirname, 'src'),

        devtool: 'source-map',

        devServer: {
            hot: true,
            //activate hot reloading

            contentBase: resolve(__dirname, 'src'),
            //match the output path

            publicPath: '/',
            //match the output publicPath

            status: "miminal",

            historyApiFallback: true
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: [
                        'babel-loader',
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loader: "style!css?sourceMap!sass?sourceMap"
                }
            ],
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            //activates HMR

            new webpack.NamedModulesPlugin(),
            //prints more readable module names in the browser console on HMR updates

            new ExtractTextPlugin("../src/styles/AppStyles.css")
            //extract css to separate file
        ],
    };
};