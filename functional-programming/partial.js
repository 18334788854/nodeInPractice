function partial(fn, ...presetArgs) {
    "use strict";
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    }
}

module.exports = partial;