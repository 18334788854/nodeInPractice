const repl = require("repl");
const net = require("net");
net.createServer(function (socket) {
    let r = repl.start({
        input: socket,
        output: socket,
        terminal:true
    });
    r.on("exit", function () {
        socket.end();
    });
}).listen(1337);
console.log(`node repl listening on 1337`);