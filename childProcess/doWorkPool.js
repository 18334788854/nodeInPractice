let cp = require("child_process");
let cpus = require("os").cpus().length;     //获取CPU数量

module.exports = function (workModule) {
    let awaiting = [];      //没有空闲进程时，存放任务队列
    let readyPool = [];     //存放准备就绪的工作进程
    let poolSize = 0;       //存放现有的工作进程数量

    return function doWork(job, cb) {
        if (!readyPool.length && poolSize > cpus) {     //没有空闲进程，且达到限制数量，排队的工作需要延后
            return awaiting.push([doWork, job, cb]);
        }
        let child = readyPool.length ? readyPool.shift() : (poolSize++, cp.fork(workModule));
        //取得下一个可用的子进程或fork一个新的进程（增加工作池大小）
        let cbTriggered = false;

        child.removeAllListeners().once("error", function (err) {   //使任意一个子进程上的监听只拥有一个监听
            if (!cbTriggered) {
                cb(err);
                cbTriggered = true;
            }
            child.kill();
        }).once("exit", function (code, signal) {
            if (!cbTriggered) {
                cb(new Error(`Child exited with code:${code}`));
            }
            poolSize--;
            let childIdx = readyPool.indexOf(child);
            if (childIdx > -1) {
                readyPool.splice(childIdx, 1);      //保证子进程在readyPool里被移除
            }
        }).once("message", function (msg) {
            cb(null, msg);
            cbTriggered = true;
            readyPool.push(child);      //子进程就绪，加回readyPool中，等待下个工作
            if (awaiting.length) {
                setImmediate.apply(null, awaiting.shift());
            }
        }).send(job);
    }
};