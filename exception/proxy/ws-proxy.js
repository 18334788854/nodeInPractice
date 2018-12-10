const http = require("http");
const httpProxy = require("http-proxy");

let proxy = httpProxy.createProxyServer({
    target: "http://localhost:3000"
});
let wsProxy = httpProxy.createProxyServer({
    target: "http://localhost:3001"
});

let proxyServer = http.createServer(function (req, res) {
    proxy.web(req, res);
});
proxyServer.on("upgrade", function (req, socket, head) {
    wsProxy.ws(req, socket, head);
});

proxyServer.listen(9000);