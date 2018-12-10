let stream = require("stream");
let util = require("util");

util.inherits(MemoryStream, stream.Readable);

function MemoryStream(options) {
    options = options || {};
    options.objectMode = true;
    stream.Readable.call(this, options);
}

MemoryStream.prototype._read = function (size) {
    this.push(process.memoryUsage());
};

let memoryStream = new MemoryStream();

memoryStream.on("readable", function () {
    let output = memoryStream.read();
    console.log(`Type:${typeof output},value:${output}`);
});