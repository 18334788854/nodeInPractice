const Benchmark = require("benchmark");

console.log(Benchmark.runInContext());//Benchmark
const foo = {a: 1};
console.log(Benchmark.runInContext(foo));//Benchmark