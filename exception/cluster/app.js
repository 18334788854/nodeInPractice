const express = require("express");
const app = express();

app.use(function (req, res) {
    res.send(`hello world.${process.pid}`);
});

module.exports = app;