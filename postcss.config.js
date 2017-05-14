module.exports = ({ env }) => ({
    plugins: {
        'postcss-import': {},
        'cssnext': {},
        'cssnano': env === 'production' ? {} : false,
    },
});
