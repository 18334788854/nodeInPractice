let EventEmitter = require("events").EventEmitter;
let fs = require("fs");
let content;

function readFileRequired(callback) {
    if (!content) {
        fs.readFile(__filename, 'utf8', function (err, data) {
            content = data;
            console.log('readFileRequired:readFile.');
            callback(err, content);
        });
    } else {
        process.nextTick(function () {
            console.log('readFileRequired:cached.');
            callback(null, content);
        });
    }
}

readFileRequired(function (err, data) {
    console.log(`1.Length:${data.length}`);
    readFileRequired(function (err, data2) {
        console.log(`2.Length:${data2.length}`);
    });
    console.log(`Reading file again...`);
});

console.log(`Reading file...`);
