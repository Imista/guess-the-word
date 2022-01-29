const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@utils' : path.resolve(__dirname,'src/utils/'),
            '@logic' : path.resolve(__dirname,'src/logic/'),
            '@handlers' : path.resolve(__dirname,'src/handlers/'),
            '@validators' : path.resolve(__dirname,'src/validators/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader, 
                'css-loader'],
            },
        ],
    },
    devServer: {
        static: 
        {
          directory: path.join(__dirname, "dist"),
          watch: true,
        },
        watchFiles: path.join(__dirname, "./**"), 
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
    ]
}