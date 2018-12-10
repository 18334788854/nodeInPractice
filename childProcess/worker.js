process.on("message", function (job) {
    for (let i = 0; i < 10000000; i++) ;
    process.send(`finished:${job}`);
});