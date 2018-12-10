const baudio = require("baudio");

let n = 0;
let b = baudio(function (t) {
    let x = Math.sin(t * 262 + Math.sin(n));
    n += Math.sin(t);
    return x;
});
b.play();