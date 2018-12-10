const partial = require("./partial");
const reverseArgs = require("./reverseArgs");

function partialRight(fn, ...presetArgs) {
    "use strict";
    return reverseArgs(
        partial(reverseArgs(fn), ...presetArgs.reverse())
    )
}

module.exports = partialRight;