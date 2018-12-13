const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");
const mysql = require("mysql");
const pool = require("./db");
let path;

let server = http.createServer(function (req, res) {
    // console.log(req);//IncomingMessage类
    // console.log(res);//ServerResponse类
    // console.log(req.url);//"/abc?name=xingjian&age=122"
    // let path = url.parse(req.url);
    // console.log(path);
    // console.log(querystring.parse(path.query));
    path = url.parse(req.url);
    if (path.pathname === "/") {
        res.writeHead(200);
        fs.createReadStream("./show.html").pipe(res);

    } else if (path.pathname === "/add") {
        var queryString = querystring.parse(path.query);
        console.log("1");
        console.log(queryString);
        res.writeHead(200);
        fs.createReadStream("./index.html").pipe(res);
    } else if (path.pathname = "/getData") {
        pool.getConnection(function (err, conn) {
            if (err) {
                throw err;
            }
            conn.query("select firstname,lastname from username", function (err, results) {
                if (err) {
                    return console.error(err);
                } else {
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(JSON.stringify(results));
                }
            });
        });
    } else if (path.pathname === "/addDate") {
        console.log("2");
        pool.getConnection(function (err, conn) {
            if (err) {
                throw err;
            }
            let queryString = querystring.parse(path.query);
            console.log(queryString);
            conn.query("insert into username(firstname,lastname) values(?,?)", [queryString.firstname, queryString.lastname], function (err, result) {
                if (err) {
                    console.error(err);
                }
                conn.commit();
                console.log(`Insert id ${result}!`);
            })
        });
    }
}).listen(8080, function () {
    console.log(`Listening on port 8080.`);
});