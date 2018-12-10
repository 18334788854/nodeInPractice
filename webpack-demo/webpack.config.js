const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // optimize: {},
    entry: {
        index: './src/index.js',
        // polyfill:'./src/polyfill.js',
        // index: './src/index.ts'
        // vendor:['lodash']
        // another:'./src/another-module.js'
    },
    plugins: [
        new CleanWebpackPlugin("dist"),
        // new HtmlWebpackPlugin({
        //     title:"Hot Module Replacement"
        // }),
        // new webpack.ProvidePlugin({
        //     // _:'lodash'
        //     join: ['lodash', 'join'],
        //     // printMe: require.resolve("./src/print.js")
        // }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:"vendor"
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'manifest'
        // }),

    ],
    output: {
        // filename:'[name].bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        // chunkFilename:'[name].[chunkhash].js'
        // publicPath:'/'
    },
    devtool: "inline-source-map",
    // devServer:{
        // contentBase:'./dist',
        // hot:true
    // },
    // resolve: {
        // extensions: ['.tsx', '.ts', '.js']
    // },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            // },
            // {
            //     test: require.resolve("./src/index.js"),
            //     use: "imports-loader?this=>window"
            // },
            // {
            //     test: require.resolve("./src/global.js"),
            //     use: "exports-loader?file,parse=helpers.parse"
            // },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)?$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)?$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml?$/,
                use: ['xml-loader']
            }
        ]
    }
};