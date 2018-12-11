const Benchmark = require("benchmark");
const bench = new Benchmark("bench");
console.log(bench.aborted);//false
