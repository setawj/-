const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

module.exports = {
    entry : {
        app : ['./src/app.js']
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename : '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ["es2015"] }
                }
            }
        ]
    },
    plugins: [
        extractCSS
    ],
    resolve: {}
};