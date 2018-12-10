let string = "1 string to rule them all.";
let leakyArr = [];
let count = 2;
setInterval(function () {
    leakyArr.push(string.replace(/1/g, count++));
}, 0);

setInterval(function () {
    gc();
    console.log(process.memoryUsage());
}, 10000);