let assert = require("assert");
assert.match = match;

function match(actual, regex, message) {
    if (!actual.match(regex)) {
        assert.strictEqual(actual, regex, message);
    }
}

assert.match('{name:"Alex"}', /Alex/, 'The name should be Alex');

assert.throws(function () {
    assert.match('{name:"Alex"}', /xlex/, `This will failed.`)
}, assert.AssertionError, `A non-matching regex should throw an AssertionError.`);