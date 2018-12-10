const zlib = require("zlib");
const store = require("./dbProtocol");

let header = Buffer.alloc(2);
header[0] = 8;
header[1] = 0;
zlib.deflate("my message", function (err, deflatedBuf) {
    if (err) {
        return console.error(err);
    }
    let message = Buffer.concat([header, deflatedBuf]);
    store(message);
});