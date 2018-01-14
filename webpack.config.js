const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackDevServer = require ('webpack-dev-server');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry:  {
        'index': PATHS.source + '/pages/index/index.js',
        'about': PATHS.source + '/pages/about/about.js',
        'works': PATHS.source + '/pages/works/works.js',
        'blog': PATHS.source + '/pages/blog/blog.js',
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        watchContentBase: true,
        open: true,
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: PATHS.source + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about', 'common'],
            template: PATHS.source + '/pages/about/about.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'works.html',
            chunks: ['works', 'common'],
            template: PATHS.source + '/pages/works/works.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog', 'common'],
            template: PATHS.source + '/pages/blog/blog.pug'
        }),


       // new CleanWebpackPlugin('build'),
        new ExtractTextPlugin('./css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: {removeAll: true } }
        }),
        new StyleLintPlugin({
            configFile: './.stylelintrc'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new UglifyJSPlugin()

    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    use: ['css-loader','sass-loader'],
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    fix: true
                }
            },
            {
                test    : /\.js$/        ,
                loader  : 'babel-loader' ,
                options : {
                    presets : ['env', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }




        ]
    }
};