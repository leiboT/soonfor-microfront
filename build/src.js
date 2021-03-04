const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, '../src/index.js'),
        utils: path.resolve(__dirname, '../src/utils.js'),
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name].js',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: true,
    },
    stats: 'none'
}