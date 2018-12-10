#!/usr/bin/env node
const fastfib = require("./../");
const seqNo = Number(process.argv[2]);

if (Number.isNaN(seqNo)) {
    return console.error(`\nInvalid sequence number provided, try:\n fastfib 30\n`);
}
console.log(fastfib(seqNo));