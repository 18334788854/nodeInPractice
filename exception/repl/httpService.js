const http = require("http");
const server = http.createServer();
server.on("request", function (req, res) {
    res.end("Hello world.");
});
server.listen(3000);
console.log(`server listening on port 3000`);