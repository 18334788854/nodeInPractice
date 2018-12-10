let stream = require("stream");
let Readable = stream.Readable;
let util = require("util");

util.inherits(MemoryStream, stream);

function MemoryStream(interval) {
    this.readable = true;
    setInterval(function () {
        let data = process.memoryUsage();
        data.date = new Date();
        this.emit("data", JSON.stringify(data) + "\n");
    }.bind(this), interval);
}

let memoryStream = new MemoryStream(1000);
let wrappedStream = new Readable().wrap(memoryStream);

wrappedStream.pipe(process.stdout);