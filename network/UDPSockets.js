// let dgram = require("dgram");
// let socket = dgram.createSocket("udp4"); //创建UDP socket
// socket.bind(4000);//绑定在一个端口上。

let dgram = require("dgram");
let fs = require("fs");
let port = 41230;
let defaultSize = 16;

function Client(remoteIp) {
    let intStream = fs.createReadStream(__filename);
    let socket = dgram.createSocket("udp4");

    intStream.on("readable", function () {
        sendData();
    });

    function sendData() {
        let message = intStream.read(defaultSize);
        if (!message) {
            return socket.unref();
        }
        socket.send(message, 0, message.length, port, remoteIp, function (err, bytes) {
            sendData();
        });
    }
}

function Server() {
    let socket = dgram.createSocket("udp4");
    socket.on("message", function (msg, info) {
        process.stdout.write(msg.toString());
    });
    socket.on("listening", function () {
        console.log(`Server ready:${socket.address()}`);
    });
    socket.bind(port);
}

if (process.argv[2] === "client") {
    new Client(process.argv[3]);
} else {
    new Server();
}