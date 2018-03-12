const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const APP_DIR = path.resolve(__dirname, '../src')

const config = {
    entry: {
        login: path.resolve(__dirname, '../src/modules/login/login.js'),
        app: path.resolve(__dirname, '../src/modules/main/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                enforce: "pre",
                exclude: /node_modules/,
                include: [APP_DIR]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [APP_DIR],
                query: {
                    presets: ['react', 'env', 'stage-3', 'stage-0']
                }
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                include: [APP_DIR],
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?-autoprefixer', 'stylus-loader']
                })
            },
            {
                test: /.css$/, 
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
};

module.exports = config;