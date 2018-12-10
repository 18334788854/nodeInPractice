const CountStream = require("./countstream");
const https = require("https");
const countStream = new CountStream("script");
console.log(countStream.constructor);
https.get("https://www.baidu.com/", function (res) {
    console.log('状态码：', res.statusCode);
    console.log('请求头：', res.headers);
    // res.pipe(countStream);
    //等价于以下语句。
    let html = "";
    res.on("data", (d) => {
        "use strict";
        html += d.toString();
    });
    res.on("end", () => {
        "use strict";
        countStream.write(html);
        countStream.end();
    })
});

countStream.on("total", function (count) {
    console.log(`Total matches : ${count}`);
});