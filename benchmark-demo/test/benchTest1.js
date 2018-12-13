const Benchmark = require("benchmark");

const bench = new Benchmark("foo", function () {
    console.log("1");
});
console.log(Benchmark);
// { [Function: Benchmark]
//     options:
//     { async: false,
//         defer: false,
//         delay: 0.005,
//         id: undefined,
//         initCount: 1,
//         maxTime: 5,
//         minSamples: 5,
//         minTime: 0,
//         name: undefined,
//         onAbort: undefined,
//         onComplete: undefined,
//         onCycle: undefined,
//         onError: undefined,
//         onReset: undefined,
//         onStart: undefined },
//     platform:
//     { description: 'Node.js 10.13.0 on Win32 64-bit',
//         layout: null,
//         manufacturer: null,
//         name: 'Node.js',
//         prerelease: null,
//         product: null,
//         ua: null,
//         version: '10.13.0',
//         os:
//         { architecture: 64,
//             family: 'Win32',
//             version: null,
//             toString: [Function: toString] },
//         parse: [Function: parse],
//         toString: [Function: toStringPlatform] },
//     version: '2.1.4',
//         filter: [Function: filter],
//     formatNumber: [Function: formatNumber],
//     invoke: [Function: invoke],
//     join: [Function: join],
//     runInContext: [Function: runInContext],
//     support: { browser: false, timeout: true, decompilation: true },
//     each: [Function: forEach],
//     forEach: [Function: forEach],
//     forOwn: [Function: forOwn],
//     has: [Function: has],
//     indexOf: [Function: indexOf],
//     map: [Function: map],
//     reduce: [Function: reduce],
//     Deferred: [Function: Deferred],
//     Event: [Function: Event],
//     Suite: { [Function: Suite] options: { name: undefined } },
//     Benchmark: [Circular] }

console.log(bench);
// Benchmark {
//     name: 'foo',
//         options:
//     { async: false,
//         defer: false,
//         delay: 0.005,
//         id: undefined,
//         initCount: 1,
//         maxTime: 5,
//         minSamples: 5,
//         minTime: 0,
//         name: undefined,
//         onAbort: undefined,
//         onComplete: undefined,
//         onCycle: undefined,
//         onError: undefined,
//         onReset: undefined,
//         onStart: undefined },
//     async: false,
//         defer: false,
//         delay: 0.005,
//         initCount: 1,
//         maxTime: 5,
//         minSamples: 5,
//         minTime: 0,
//         id: 1,
//         fn: [Function],
//         stats:
//     { moe: 0,
//         rme: 0,
//         sem: 0,
//         deviation: 0,
//         mean: 0,
//         sample: [],
//         variance: 0 },
//     times: { cycle: 0, elapsed: 0, period: 0, timeStamp: 0 } }