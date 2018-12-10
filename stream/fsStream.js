const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

let stream = fs.createReadStream("not-found");
stream.on("error", (err) => {
    "use strict";
    console.trace();
    console.error(`Stack : ${err.stack}`);
    console.error(`The error raised was : ${err}`);
});

http.createServer((req, res) => {
    "use strict";
    res.writeHead(200, {"content-encoding": "gzip"});
    fs.createReadStream(__dirname + "/index.html")
        .pipe(zlib.createGzip())
        .pipe(res);
}).listen(8080);

// http.createServer(function (req, res) {
//     fs.readFile(__dirname + "/index.html", (err, data) => {
//         "use strict";
//         if (err) {
//
//         } else {
//             res.end(data);
//         }
//     })
// }).listen(8000);