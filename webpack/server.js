const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

app.listen(8080,function () {
   console.log(`Listening the port of 8080!`);
});