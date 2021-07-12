//require all packges and plugins we need 
const path = require('path')
const webpack = require('webpack')

//create the script of javascipt file produced in dist at the end of the html file
const HtmlWebPackPlugin = require("html-webpack-plugin") 
//delete the dist file before runing every time we call npm run build-dev or prod
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                //the file type we transalte to
                test: '/\.js$/',
                //files we don't want to touch
                exclude: /node_modules/,
                //loader: translate from any file type to another 
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                //we can put more than one loader and it call after one another from right to left
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    //any function we want to add to our bundles we put in plugins
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            //this the html file name in dist
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}