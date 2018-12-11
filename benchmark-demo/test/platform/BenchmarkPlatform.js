const Benchmark = require("benchmark");
const bench = new Benchmark("bench",function(){
    console.log(1);
});
console.log(Benchmark.platform);
// { description: 'Node.js 10.13.0 on Win32 64-bit',
//     layout: null,
//     manufacturer: null,
//     name: 'Node.js',
//     prerelease: null,
//     product: null,
//     ua: null,
//     version: '10.13.0',
//     os:
//     { architecture: 64,
//         family: 'Win32',
//         version: null,
//         toString: [Function: toString] },
//     parse: [Function: parse],
//     toString: [Function: toStringPlatform] }
