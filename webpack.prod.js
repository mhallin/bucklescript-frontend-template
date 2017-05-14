const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

const CommonConfig = require('./webpack.common.js');


module.exports = {
    entry: {
        bundle: CommonConfig.ENTRY_POINTS,
    },
    output: {
        path: path.join(__dirname, 'out'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: CommonConfig.BASE_CSS_LOADERS,
                }),
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: false,
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => 
                module.context && module.context.indexOf('node_modules') !== -1,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename: 'chunk-manifest.json',
            manifestVariable: 'webpackManifest',
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                keep_fnames: false,
            },
            comments: false,
            warn: false,
        }),
    ],
};
