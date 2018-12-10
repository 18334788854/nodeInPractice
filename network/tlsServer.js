let fs = require("fs");
let tls = require("tls");

let options = {
    key: fs.readFileSync("./server.pem"),
    cert: fs.readFileSync("./server-cert.pem"),
    ca: [fs.readFileSync("./client-cert.pem")],
    requestCert: true
};

let server = tls.createServer(options, function (cleartextStream) {
    let authrized = cleartextStream.authorized ? "authorized" : "unauthorized";
    console.log(`Connected:${authrized}`);
    cleartextStream.write(`Welcome!\n`);
    cleartextStream.setEncoding("utf8");
    cleartextStream.pipe(cleartextStream);
});
server.listen(8000, function () {
    console.log(`Server listening.`);
});