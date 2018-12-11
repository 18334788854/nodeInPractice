const Benchmark = require("benchmark");

console.log(Benchmark.join([1, 2, 3, 4, 5, 6, 7, 8, 9]));//1,2,3,4,5,6,7,8,9
console.log(Benchmark.join([1, 2, 3, 4, 5, 6, 7, 8, 9], separator1 = "。", separator2 = ";"));//1。2。3。4。5。6。7。8。9
console.log((Benchmark.join({a: 1, b: 2, c: 3}, separator1 = "。", separator2 = ";")));//a;1。b;2。c;3