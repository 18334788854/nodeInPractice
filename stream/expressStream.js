const stream = require("stream");
const util = require("util");
const express = require("express");

let app = express();

class StatStream extends stream.Readable {
    constructor(limit) {
        super();
        this.limit = limit;
        this.arr = [];
    }

    read(size) {
        if (this.limit === 0) {
            this.arr.push();
        } else {
            this.arr.push(util.inspect(process.memoryUsage()));
            this.arr.push("n");
            this.limit--;
            console.log(this.arr);
        }
    }
}

app.get("/", (req, res) => {
    "use strict";
    let statStream = new StatStream(10);

    statStream.pipe(res);
});
app.listen(8080);