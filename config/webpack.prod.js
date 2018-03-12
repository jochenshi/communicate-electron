const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const base_config = require('./webpack.common')

const pro_config = merge(base_config, {
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/login.html'),
            template: path.resolve(__dirname, '../src/modules/login/login.html')
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../src/modules/main/index.html')
        })
    ]
});

module.exports = pro_config;