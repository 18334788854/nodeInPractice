const Benchmark = require("benchmark");

const bench1 = new Benchmark("bench1", function () {
    return 1 + 1;
});
const bench2 = new Benchmark("bench2", function () {
    return 2 + 2;
});

console.log(Benchmark.invoke({bench1, bench2}, "reset"));