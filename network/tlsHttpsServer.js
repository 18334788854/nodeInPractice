let fs = require("fs");
let https = require("https");
let options = {
    key: fs.readFileSync("./server.pem"),
    cert: fs.readFileSync("./server-cert.pem"),
    ca: [fs.readFileSync("./client-cert.pem")],
    requestCert: true
};

let server = https.createServer(options, function (req, res) {
    let authorized = req.socket.authorized ? "authorized" : "unauthorized";
    res.writeHead(200);
    res.write(`Welcome! You are ${authorized}.\n`);
});
// server.on("readable", function (data) {
//     process.stdin.pipe(server);
// });
server.listen(8000, function () {
    console.log(`Server listening.`);
});