const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge')
const JavaScriptObfuscator = require('webpack-obfuscator');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'bin/assets'),
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new JavaScriptObfuscator ({
            rotateUnicodeArray: true
        }, ['app.bundle.js']),
        new OptimizeCssAssetsPlugin()
    ]
});