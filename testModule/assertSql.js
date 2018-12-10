let assert = require("assert");
let exec = require("child_process").exec;
let path = require("path");
let ran = 0;

let db = {
    config: {
        username: "",
        password: ""
    }
};

function loadFixture(sqlfile, cb) {
    sqlfile = path.resolve(sqlfile);
    let command = `mysql -u ${db.config.username} ${db.config.password} < ${sqlfile}`;
    exec(command, function (stderr, stdout, stdin) {
        if (stderr) {
            console.error(stderr);
            return;
        } else {
            cb();
        }
    });
}

before(function (done) {
    ran++;
    assert.equal(1, ran);
    assert.equal(process.env.NODE_ENV, "test", "NODE_ENV is not test.");
    loadFixture(__dirname + "/fietures/file.sql", function () {
        process.nextTick(done);
    });
});

