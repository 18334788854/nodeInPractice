let MessageBus = require("./index");
let messageBus = new MessageBus();
let $ = require("jquery")(window);

messageBus.on("message", function (msg) {
    $("#messages").append(`<p>${msg}</p>`);
});

$(function () {
    messageBus.emit("message", "Hello from index 2");
});

