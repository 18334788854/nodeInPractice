let stream = require("stream");

class GreenStream extends stream.Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        process.stdout.write('\u001b[32m' + chunk + '\u001b[39m');
        callback();
    }
}

process.stdin.pipe(new GreenStream());

// GreenStream.prototype = Object.create(stream.Writable.prototype, {
//     constructor: {value: GreenStream}
// });
//
// function GreenStream(options) {
//     stream.Writable.call(this, options);
// }
//
// GreenStream.prototype._write = function (chunk, encoding, callback) {
//     process.stdout.write('u001b[32m' + chunk + 'u001b[39m');
//     callback();
// };
