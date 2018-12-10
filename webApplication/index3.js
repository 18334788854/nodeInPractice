let browserify = require("browserify");
let fs = require("fs");
let b = browserify();
b.add("./index2.js");
b.bundle().pipe(fs.createWriteStream("./bundle2.js"));