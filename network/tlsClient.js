let fs = require("fs");
let tls = require("tls");
let os = require("os");

let options = {
    key: fs.readFileSync("./client.pem"),
    cert: fs.readFileSync("./client-cert.pem"),
    ca: [fs.readFileSync("./server-cert.pem")],
    servername: "DN"
};

let cleartextStream = tls.connect(8000, options, function () {
    let authrized = cleartextStream.authorized ? "authorized" : "unauthorized";
    console.log(`Connected:${authrized}`);
    process.stdin.pipe(cleartextStream);
});
cleartextStream.setEncoding("utf8");
cleartextStream.on("data", function (data) {
    console.log(data);
});