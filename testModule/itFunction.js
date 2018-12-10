let assert = require("assert");
let exitCode = 0;
let filenames = process.argv.slice(2);

it = function (name, test) {
    let err;
    try {
        test();
    } catch (e) {
        err = e;
    }
    console.log(`- it ${name} ${err ? "[FAIL]" : "[OK]"}`);

    if (err) {
        console.error(err);
        console.error(err.stack);
        exitCode = 1;
    }
};
filenames.forEach(function (filename) {
    console.log(filename);
    require("./" + filename);
});
process.on("exit", function () {
    process.exit(exitCode);
});