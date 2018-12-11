const Benchmark = require("benchmark");
const bench = new Benchmark("bench", function () {
    console.log(1);
});
console.log(bench.name);//bench
console.log(bench.clone({name: "xingjian"}).name);//xingjian
