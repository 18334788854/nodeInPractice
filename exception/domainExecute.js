const domain = require("domain");
const http = require("http");

let d = domain.create();
d.run(function () {
    let server = http.createServer(function (req, res) {
        response.end("hello world.");
        d.on("error", function (er) {
            res.statusCode = 500;
            res.end("internal server error.");
            server.close();
            setTimeout(process.exit, 5000, 1);
        });
    });
    server.listen(8090);
});