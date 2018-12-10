let assert = require("assert");
let fs = require("fs");

function readConfigFile(cb) {
    fs.readFile("config.cfg", function (err, data) {
        console.log(err);
        if (err && err.code === "ENOENT") {
            cb(null, {database: 'psql://localhost/test'});
        } else if (err) {
            cb(err);
        } else {
            cb(null, data);
        }
    });
}

readConfigFile(function (err, data) {
    assert.ifError(err);
});



// const { message } = new assert.AssertionError({
//     actual: 1,
//     expected: 2,
//     operator: 'strictEqual'
// });
//
// // 校验错误：
// try {
//     assert.strictEqual(1, 2);
// } catch (err) {
//     assert(err instanceof assert.AssertionError);
//     assert.strictEqual(err.message, message);
//     assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
//     assert.strictEqual(err.actual, 1);
//     assert.strictEqual(err.expected, 2);
//     assert.strictEqual(err.code, 'ERR_ASSERTION');
//     assert.strictEqual(err.operator, 'strictEqual');
//     assert.strictEqual(err.generatedMessage, true);
// }