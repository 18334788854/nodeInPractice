const signals = require("signals");

let myObject = {
    started: new signals.Signal()
};

function onStarted(param1, param2) {
    "use strict";
    console.log(param1, param2);
}

myObject.started.add(onStarted);
myObject.started.dispatch("hello", "world");