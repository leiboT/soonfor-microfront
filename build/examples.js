const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, '../examples/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    stats: 'none'
}