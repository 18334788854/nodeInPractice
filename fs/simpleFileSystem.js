let fs = require("fs");
let assert = require("assert");
let fd = fs.openSync("./file.txt", "w+");
let writeBuf = Buffer.from("some data to write");
fs.writeSync(fd, writeBuf, 0, writeBuf.length, 0);

let readBuf = Buffer.alloc(writeBuf.length);
fs.readSync(fd, readBuf, 0, writeBuf.length, 0);
assert.equal(writeBuf.toString(), readBuf.toString());

fs.closeSync(fd);