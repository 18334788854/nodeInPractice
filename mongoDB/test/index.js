const https = require("https");

const req = https.request("https://api.github.com/search/repositories?q=language&sort=stars&order=desc", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        // "Connection": "keep-alive"
    }
}, function (res) {
    console.log(res.statusCode);
    console.log(res.headers);
    res.on("data", function (data) {
        console.log(data.toString());
    });
}).on("error", function (err) {
    console.error(err);
    req.end();
});

