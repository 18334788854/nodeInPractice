const Benchmark = require("benchmark");
const bench = new Benchmark("bench", function () {
    console.log(1);
});
console.log(bench.toString());//bench x 0.00 ops/sec ±0.00% (0 runs sampled)
