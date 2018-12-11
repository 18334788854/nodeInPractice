const Benchmark = require("benchmark");
const bench = new Benchmark("bench", function () {
    console.log(1);
});
console.log(bench.running);//false
console.log(bench.run({async:true}));//bench.running为true

