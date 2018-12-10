let assert = require("assert");

function square(number) {
    return number * number + 1;
}

let actual = square(2);
let expected = 4;
assert(actual, 'square() should have returned a value');
assert.equal(actual, expected, 'square() did not calculate the correct value');
