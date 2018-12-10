const redis = require("redis");
let sub = redis.createClient(),
    pub = redis.createClient(),
    msg_count = 0;
sub.on("subscribe", (channel, count) => {
    "use strict";
    // if (channel === "a nice channel") {
    pub.publish("a nice channel", JSON.stringify({a: 1}));
    pub.publish("a nice channel", "I am sending a second message.");
    pub.publish("a nice channel", "I am sending my last message.");
    // }
    console.log(channel, count);
});

sub.on("message_buffer", function (channel, message) {
    console.log("sub channel " + channel + ": " + message);
    msg_count += 1;
    console.log(msg_count);
    if (msg_count === 3) {
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    }
});
sub.subscribe("a nice channel");
sub.subscribe("a nice channel1");


// sub.publish("xingjian","1234567");
