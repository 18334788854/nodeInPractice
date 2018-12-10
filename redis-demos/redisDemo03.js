const redis = require("redis"),
    client = redis.createClient();
let set_size = 20;
client.sadd("bigset", "a member");
client.sadd("bigset", "another member");
while (set_size > 0) {
    client.sadd("bigset", "member " + set_size);
    set_size -= 1;
}

client.multi()
    .scard("bigset")
    .smembers("bigset")
    .keys("*", (err, replies) => {
        "use strict";
        client.mget(replies);
    })
    .dbsize()
    .exec((err, replies) => {
        "use strict";
        console.log(replies);
    });