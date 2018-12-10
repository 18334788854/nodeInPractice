const http = require("http");
const httpProxy = require("http-proxy");

let targets = [
    {target: "http://localhost:3000"},
    {target: "http://localhost:3001"},
    {target: "http://localhost:3002"},
    {target: "http://localhost:3003"}
];

let proxies = targets.map(function (options, i) {
    let proxy = new httpProxy.createServer(options);
    proxy.on("error", function (err) {
        console.error(`Error:${err}`);
        console.error(`Server:${i}`);
    });
    return proxy;
});
let i = 0;
http.createServer(function (req, res) {
    proxies[i].web(req, res);
    i = (i + 1) % proxies.length;
}).listen(9999);