let fs = require("fs");
let exec = require("child_process").exec;

function watch() {
    let child = exec('node server.js');
    let watcher = fs.watch(__dirname, function (event) {
        console.log(`File changed,reloading.`);
        child.kill();
        watcher.close();
        watch();
    })
}

watch();