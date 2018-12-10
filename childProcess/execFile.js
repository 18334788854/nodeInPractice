let cp = require("child_process");

cp.execFile('./hello.bat', ["xing jian"], function (err, stdout, stderr) {
    if (err) {
        console.error(err);
    }
    console.log(`stdout:${stdout}`);
    console.log(`stderr:${stderr}`);
});