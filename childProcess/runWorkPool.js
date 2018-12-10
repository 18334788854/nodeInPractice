let http = require("http");
let makePool = require("./doWorkPool");
let runJob = makePool("./worker.js");

http.createServer(function (req, res) {
    runJob("some dummy job", function (er, data) {
        if (er) {
            return res.end(`got an error:${er.message}`);
        }
        res.end(data);
    });
}).listen(8000);