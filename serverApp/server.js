let http = require("http");
let server = http.createServer(function (req, res) {
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.end(`This is a super basic web application3.`);
});
server.listen(8080);