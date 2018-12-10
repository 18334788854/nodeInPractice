const net = require("net");
let socket = net.connect(1339);
process.stdin.setRawMode(true);
process.stdin.pipe(socket);
socket.pipe(process.stdout);
socket.once("close", function () {
    process.stdin.destroy();
});