const ENTRY_POINTS = [
    './lib/es6/src/index.js',
    './src/main.css',
];

const BASE_CSS_LOADERS = [
    { loader: 'css-loader', options: { importLoaders: 1 }},
    'postcss-loader',
];

module.exports = {
    ENTRY_POINTS, BASE_CSS_LOADERS,
};
