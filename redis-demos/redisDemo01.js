const redis = require("redis"),
    client = redis.createClient({detect_buffers: true});
client.on("error", (err) => {
    "use strict";
    console.log(`Error : ${err}`);
});
client.set("String key", "String value", redis.print);
client.get(Buffer.from("String key"), (err, reply) => {
        "use strict";
        console.log(reply);
        console.log(reply.toString());
    }
);
// client.set('key', 'value!', 'EX', 10);
// client.set("key1", "value1", "key2", "value2");
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hgetall("hash key", (err, obj) => {
    "use strict";
    console.log(obj);
});

client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});