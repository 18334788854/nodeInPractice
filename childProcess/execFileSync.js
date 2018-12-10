let ex = require("child_process").execFileSync;
let stdout = ex("node", ["-v"]).toString();
console.log(stdout);