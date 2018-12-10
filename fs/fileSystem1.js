let fs = require("fs");
let fd = fs.openSync("./file.txt", "a");
console.log(fd, typeof fd === "number");