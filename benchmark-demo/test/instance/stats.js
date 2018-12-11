const Benchmark = require("benchmark");
const bench = new Benchmark("bench",function(){
    console.log(1);
});
console.log(bench.stats);
/**
 * moe:0——误差范围
 * rme:0——相对误差范围
 * sem:0——平均数的标准误差
 * deviation:0——样表标准差
 * mean:0——算术平均数
 * sample:[]——样本数组
 * variance:0——样本方差
 */