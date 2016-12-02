const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = env => {
    return {
        entry: [

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

            status: "miminum"
        },

        module: {
            loaders: [
                { test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options:{
                        "babelrc": false,
                        "presets": [
                            ["es2015", {"modules": false}],
                            "stage-2",
                            "react"
                        ],
                    }
                },
                {
                    test: /\.scss$/,
                    loader:  ExtractTextPlugin.extract({
                                fallbackLoader: "style-loader",
                                loader: "css-loader?sourceMap!sass-loader?sourceMap"
                            })
                }
            ],
        },

        plugins: [

            //
            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV': JSON.stringify('production')
                }
            }),

            //optimize for production with uglyfyjs plugin
            new webpack.optimize.UglifyJsPlugin({
                sourceMap:true,
                compress:{
                    warnings: true
                }
            }),

            new ExtractTextPlugin("AppStyles.css")
        ],
    };
};