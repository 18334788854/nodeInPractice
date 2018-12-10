function makeload() {
    for (let i = 0; i < 100000000000; i++) ;
}

function logSomething() {
    console.log(`something`);
}

setInterval(makeload, 2000);
setInterval(logSomething, 0);