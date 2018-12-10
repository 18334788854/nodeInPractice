let net = require("net");
let clients = 0;

let server = net.createServer(function (client) {
    clients++;
    let clientId = clients;
    console.log(`Client connected:${clientId}`);
    client.on("end", function () {
        console.log(`Client disconnected:${clientId}`);
    });
    client.write(`Welcome client:${clientId}\r\n`);
    client.pipe(client);
});

server.listen(8000, function () {
    console.log(`Server started on port 8000!`);
});