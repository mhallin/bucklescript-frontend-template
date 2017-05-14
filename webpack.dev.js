const path = require('path');
const webpack = require('webpack');

const CommonConfig = require('./webpack.common.js');


module.exports = {
    entry: [
        'react-hot-loader/patch',
        ...CommonConfig.ENTRY_POINTS,
    ],
    output: {
        path: path.join(__dirname, 'out'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['react-hot-loader/webpack'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    ...CommonConfig.BASE_CSS_LOADERS,
                ],
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            DEBUG: true,
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
};
