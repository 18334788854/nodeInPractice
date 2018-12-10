let http = require("http");
let server = http.createServer(function (req, res) {
    response.end("Hello world!");
});
server.listen(8090, function () {
    console.log(`Listening on port 8090.`);
});

setInterval(function () {
    console.log(process.memoryUsage().heapUsed);
}, 2000);

process.on("uncaughtException", function (err) {
    console.error(err);
    server.close();
    setTimeout(process.exit, 5000, 1);
});

