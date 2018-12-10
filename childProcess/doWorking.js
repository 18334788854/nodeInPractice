let cp = require("child_process");

function doWork(job, cb) {
    let child = cp.fork("./worker");
    let cbTriggered = false;

    child.once("error", function (err) {
        if (!cbTriggered) {
            cb(err);
            cbTriggered = true;
        }
        child.kill();//异常错误时，杀死子进程
    }).once("exit", function (code, signal) {
        if (!cbTriggered) {
            cb(new Error(`Child exited with code:${code}`));
        }
    }).once("message", function (result) {
        cb(null, result);
        cbTriggered = true;
    }).send(job);

}