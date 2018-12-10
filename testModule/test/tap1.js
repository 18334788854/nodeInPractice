let index = require("./../index");
let test = require("tap").test;

test(`Alex's handy mathematics modules`, function (t) {
    t.test(`square`, function (t) {
        t.equal(index.square(4), 16);
        t.end();
    });
    t.test(`randomTimeout`, function (t) {
        t.plan(1);
        index.randomTimeout(function () {
            t.ok(true);
        });
    });
    t.end();
});