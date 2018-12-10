const assert = require("assert");
const recurse = require("../lib/recurse");
const tail = require("../lib/tail");
const iter = require("../lib/iter");
const suite = new (require("benchmark")).Suite;

suite.add(`recurse`, function () {
    recurse(20);
}).add(`tail`, function () {
    tail(20);
}).add(`iter`, function () {
    iter(20);
}).on("complete", function () {
    console.log(`results：`);
    this.forEach(function (result) {
        console.log(result.name, result.count, result.times.elapsed);
    });
    assert.equal(this.filter("fastest")[0].name, "iter", `expect recurse to be the fastest.`);
}).run();