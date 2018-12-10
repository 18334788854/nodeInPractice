process.on("message", function (msg) {
    process.send(msg+" send by child");
});