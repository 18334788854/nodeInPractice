let cp = require("child_process");
let fs = require("fs");
let outFd = fs.openSync("./longrun.out", "a");
let errFd = fs.openSync("./longrun.err", "a");
let child = cp.spawn("node", ["spawn.js"], {detached: true, stdio: ['ignore', outFd, errFd]});//'ignore'忽视子进程的输入，输出和错误日志输入到具体的位置。
child.unref();//移除子进程在父进程中的引用。
