let https = require("https");
let fs = require("fs");
let cheerio = require("cheerio");
// fs.readFile("./file.html", "utf8", function (err, html) {
//     // console.log(html);
//     let $ = cheerio.load(html);
//     var releases = $("h1");
//     releases.each(function (key, value) {
//         console.log(value.children[0].data);
//     });
// });
https.get("https://www.manning.com/index", "utf8", function (res) {
    let html = "";
    res.on("data", function (data) {
        html += data.toString();
    });
    res.on("end", function () {
        // console.log(html);
        let $ = cheerio.load(html);
        var releases = $(".react-toggle");
        releases.each(function (key, value) {
            console.log(value.children[0].data);
        });
    });
});