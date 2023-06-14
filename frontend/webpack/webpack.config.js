const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const prodConf = require('./prod');
const devConf = require('./dev');


const base_conf = {
    mode: process.env.mode || 'production',
    entry: ['babel-polyfill', path.resolve(__dirname, '../src/index.jsx')],

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: './bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
            '@components': path.resolve(__dirname, '..', 'src', 'components', 'shared'),
            '@pages': path.resolve(__dirname, '..', 'src', 'components', 'pages'),
            '@public': path.resolve(__dirname, '..', 'src', 'public'),
        },
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/public/index.html',
            favicon: './src/public/favicon.ico',
            inject: false,
        }),
        new Dotenv({
            allowEmptyValues: true,
            systemvars: true,
        }),
    ],
};

module.exports = process.env.mode === 'development'
    ? merge(base_conf, devConf)
    : merge(base_conf, prodConf);
