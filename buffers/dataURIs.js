const fs = require("fs");
const util = require("util");
const mime = "image/jpeg";
const encoding = "base64";
fs.readFile("./flower.jpg", (err, data) => {
    if (err) {
        return;
    } else {
        console.log(data);
        let uri = "data:" + mime + ";" + encoding + "," + data.toString("base64");
        console.log(uri);
        fs.writeFileSync("./flower1.jpg",data);
    }
});

// fs.stat("./flower.jpg", (err, stat) => {
//     console.log(util.inspect(stat));
// });