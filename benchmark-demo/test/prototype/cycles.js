const Benchmark = require("benchmark");
const bench = new Benchmark("bench", function () {
    console.log(1);
});
console.log(bench.cycles);//0