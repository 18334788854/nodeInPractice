const Benchmark = require("benchmark");

const suite = new Benchmark.Suite("Suite", function () {
    console.log("1");
});
console.log(suite);