var path = require('path');
var webpack = require('webpack');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
    entry: './src',
    output: {
        path: 'src',
        publicPath: 'assets',
        filename: 'game.js'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                loader: 'script',// script-loader
                test: /(pixi|phaser).js/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackErrorNotificationPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    watch: true,
    stats: {
        // Nice colored output
        colors: true,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
        modules: false
    },
    // Create Sourcemaps for the bundle
    devtool: '#cheap-module-inline-eval-source-map'
};
