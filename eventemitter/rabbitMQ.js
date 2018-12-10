let rabbitHub = require("rabbitmq-nodejs-client");
let subHub = rabbitHub.create({task: "sub", channel: "myChannel"});
let pubHub = rabbitHub.create({task: "pub", channel: "myChannel"});

subHub.on("connection", function (hub) {
    hub.on("message", function (msg) {
        "use strict";
        console.log(msg);
    }.bind(this));
});
subHub.connect();

pubHub.on("connection", function (hub) {
    "use strict";
    hub.send("Hello World!");
});
pubHub.connect();