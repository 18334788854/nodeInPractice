const Benchmark = require("benchmark");
const bench = new Benchmark("bench",function(){
    console.log(1);
});
console.log(bench.times);
/**
 *cycle:0——完成上一个周期所需的时间
 *elapsed:0——完成基准所需的时间
 * period:0——执行一次测试所需的时间
 * timeStamp:0——基准启动时的时间戳
 */