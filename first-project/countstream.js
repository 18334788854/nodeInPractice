const Writable = require("stream").Writable;
const util = require("util");

class CountStream extends Writable {
    constructor(matchText, options) {
        super(options);
        this.count = 0;
        this.matcher = new RegExp(matchText, "ig");
    }

    _write(chunk, encoding, cb) {
        let text = chunk.toString();
        console.log(text);
        let matches = text.match(this.matcher);
        if (matches) {
            this.count += matches.length;
        }
    }

    end() {
        console.log(`this.count : ${this.count}`);
        this.emit("total", this.count);
    }
}

module.exports = CountStream;
// util.inherits(CountStream, Writable);
//
// function CountStream(matchText, options) {
//     Writable.call(this, options);
//     this.count = 0;
//     this.matcher = new RegExp(matchText, "ig");
// }
//
// CountStream.prototype._write = function (chunk, encoding, cb) {
//     let matches = chunk.toString().match(this.matcher);
//     if (matches) {
//         this.count += matches.length;
//     }
// };
// CountStream.prototype.end = function () {
//     this.emit("total", this.count);
// };
