const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    entry: {
        app: './src/index.js',
        calc: './src/scripts/calculator.js',
        form: './src/scripts/form-validation.js',
        validate: './src/scripts/number-validator.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '/fonts/[name].[ext]',
                        outputPath: 'fonts'
                    }
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'nav.html',
            template: './src/nav.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'calculator.html',
            template: './src/calculator.html',
            chunks: ['app', 'calc']
        }),
        new HtmlWebpackPlugin({
            filename: 'form.html',
            template: './src/form.html',
            chunks: ['app', 'form']
        }),
        new HtmlWebpackPlugin({
            filename: 'validator.html',
            template: './src/validator.html',
            chunks: ['app', 'validate']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'app.bundle.css'
        })
    ]
};