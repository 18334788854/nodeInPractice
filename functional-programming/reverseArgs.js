function reverseArgs(fn) {
    "use strict";
    return function argsReversed(...args) {
        return fn(...args.reverse());
    }
}
module.exports=reverseArgs;