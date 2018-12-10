const httpProxy = require("http-proxy");

let proxy = httpProxy.createProxyServer({
    target: 'http://localhost:8090'
});
proxy.on("error", function (err) {
    console.error(`Error:${err}`);
});
proxy.listen(9000);