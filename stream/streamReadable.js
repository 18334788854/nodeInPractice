var stream = require("stream");
var util = require("util");
var fs = require("fs");

class JSONLineReader extends stream.Readable {
    constructor(source) {
        super();
        this._source = source;
        this._foundLineEnd = false;
        this._buffer = "";
        source.on("readable", function () {
            this.read();
        }.bind(this));
    }

    _read(size) {
        // console.log(size);
        let chunk;
        let line;
        let lineIndex;
        let result;
        if (this._buffer.length === 0) {
            chunk = this._source.read();
            this._buffer += chunk;
        }
        lineIndex = this._buffer.indexOf("\n");
        if (lineIndex !== -1) {
            line = this._buffer.slice(0, lineIndex);
            // console.log(line);
            if (line) {
                result = JSON.parse(line);
                this._buffer = this._buffer.slice(lineIndex + 1);
                this.emit('object', result);
                this.push(util.inspect(result));
            } else {
                this._buffer = this._buffer.slice(1);
            }
        } else {

        }
    }
}

// function JSONLineReader(source) {
//     stream.Readable.call(this);
//     this._source = source;
//     this._foundLineEnd = false;
//     this._buffer = "";
//     source.on("readable", function () {
//         this.read();
//     }.bind(this));
// }
//
// util.inherits(JSONLineReader, stream.Readable);

// JSONLineReader.prototype._read = function (size) {
//     let chunk;
//     let line;
//     let lineIndex;
//     let result;
//     if (this._buffer.length === 0) {
//         chunk = this._source.read();
//         this._buffer += chunk;
//     }
//     lineIndex = this._buffer.indexOf("\n");
//     if (lineIndex !== -1) {
//         line = this._buffer.slice(0, lineIndex);
//         // console.log(line);
//         if (line) {
//             result = JSON.parse(line);
//             this._buffer = this._buffer.slice(lineIndex + 1);
//             this.emit('object', result);
//             this.push(util.inspect(result));
//         } else {
//             this._buffer = this._buffer.slice(1);
//         }
//     }else{
//
//     }
// };

let input = fs.createReadStream(__dirname + '/json-lines.txt', {
    encoding: 'utf8'
});

let jsonLineReader = new JSONLineReader(input);

jsonLineReader.on('object', function (obj) {
    console.log(`pos:${obj.position}, - letter:${obj.letter}.`);
});