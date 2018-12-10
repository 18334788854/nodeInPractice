const http = require("http");
const server = http.createServer();
server.on("request", function (req, res) {
    res.end("Hello world.");
});
server.listen(3000);
console.log(`server listening on port 3000`);

const net = require("net");
const repl = require("repl");

net.createServer(function (socket) {
    let r = repl.start({
        input: socket,
        output: socket,
        terminal: true,
        userGlobal: true
    });
    r.on("exit", function () {
        socket.end();
    });
    r.context.server = server;
}).listen(1339);
console.log(`repl listening on 1339`);