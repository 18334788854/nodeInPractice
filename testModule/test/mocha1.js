let index = require("./../index");
let assert = require("assert");

describe(`Amazing mathematical operations`, function () {
    it(`should square numbers`, function () {
        assert.equal(index.square(4), 16);
    });

    it(`should run a callback after a delay`, function (done) {
        index.randomTimeout(function () {
            assert(true);
            done();
        })
    })
});