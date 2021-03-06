const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index',
        vendors: [
            'react',
            'react-dom',
            'react-redux',
            'redux-thunk'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.[hash].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!autoprefixer!sass-loader")
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }, {
            test: /\.(jpg|jpeg|gif|png)$/,
            loader: 'url?limit=4000&name=images/[name].[hash:base64:5].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name].[hash].css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './src/index.html',
            showErrors: false,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};
