const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.common')

const devConfig = merge(baseConfig, {
    output: {
        publicPath: '/'
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        // port: 3000,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: path.resolve(__dirname, '../src/modules/login/login.html'),
            inject: true,
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/modules/main/index.html'),
            inject: true,
            chunks: ['app']
        })
    ]
})

module.exports = devConfig