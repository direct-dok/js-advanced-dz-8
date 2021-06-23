const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin")


let htmlPageNames = ['cart', 'catalog'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `./src/${name}.html`), 
        filename: `${name}.html`, 
        chunks: [`${name}`] 
    })
});

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/css", to: "css" },
                { from: "src/fonts", to: "fonts" },
                { from: "src/img", to: "img" },
            ],
            options: {
                concurrency: 100,
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['main']
        }),
    ].concat(multipleHtmlPlugins)
}