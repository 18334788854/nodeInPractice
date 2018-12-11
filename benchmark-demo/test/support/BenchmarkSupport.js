const Benchmark = require("benchmark");
const bench = new Benchmark("bench",function(){
    console.log(1);
});
console.log(Benchmark.support);
/**
 * { browser: false, timeout: true, decompilation: true }
 * browser:是否在浏览器中运行
 * timeout:检测计时器是否存在
 * decompilation:是否支持反编译
 */