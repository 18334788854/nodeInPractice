let fs = require("fs");
let https = require("https");

let options = {
    key: fs.readFileSync("./client.pem"),
    cert: fs.readFileSync("./client-cert.pem"),
    ca: [fs.readFileSync("./server-cert.pem")],
    servername: "DN",
    // host:'localhost',
    port: 8000,
    path: "/",
    method: "GET"
};
let req = https.request(options, function (res) {
    let text = "";
    res.on("data", function (data) {
        text += data.toString();
        process.stdout.write(data);
        // process.stdin.pipe(res);
    });
    // res.on("end", function () {
    //     res.write(text);
    // });
});
req.end();

req.on("error", function (e) {
    console.log(e);
});