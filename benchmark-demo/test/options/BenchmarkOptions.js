const Benchmark = require("benchmark");
const bench = new Benchmark("bench",function(){
    console.log(1);
});
console.log(Benchmark.options);
// { async: false,
//     defer: false,
//     delay: 0.005,
//     id: undefined,
//     initCount: 1,
//     maxTime: 5,
//     minSamples: 5,
//     minTime: 0,
//     name: undefined,
//     onAbort: undefined,
//     onComplete: undefined,
//     onCycle: undefined,
//     onError: undefined,
//     onReset: undefined,
//     onStart: undefined }