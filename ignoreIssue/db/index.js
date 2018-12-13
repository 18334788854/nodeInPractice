const mysql = require("mysql");
const dbConfig = require("./db_config");

module.exports = mysql.createPool(dbConfig);