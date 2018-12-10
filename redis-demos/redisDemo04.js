// const redis = require("redis"),
//     RDS_PORT = 6379,
//     RDS_HOST = "111.231.69.204",
//     RDS_PWD = "xingjian123",
//     RDS_OPTS = {auth_pass: RDS_PWD},
//     client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
//
// client.on("ready", () => {
//     "use strict";
//     console.log("ready!");
// });
const redis = require("redis"),
    RDS_PORT = 6379,
    RDS_HOST = "111.231.69.204",
    RDS_PWD = "xingjian123",
    RDS_OPTS = {},
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

function throww(bottle, callback) {
    "use strict";
    bottle.time = bottle.time || Date.now();
    let bottleId = Math.random().toString(16);
    let type = {male: 0, female: 1};
    // if (bottle.type) {
    //     console.log(type[bottle.type]);
    // }
    client.select(type[bottle.type], () => {
        client.hmset(bottleId, bottle, (err, result) => {
            if (err) {
                return;
            }
            callback({code: 1, msg: result});
            client.expire(bottleId, 86400);
        })
    });
}

client.auth(RDS_PWD, () => {
    "use strict";
    console.log("通过认证！");
});

client.on("ready", () => {
    "use strict";
    console.log("ready!");
});

client.on("connect", () => {
    "use strict";
    client.set("author", "xingjian", redis.print);
    client.get("author", redis.print);
    throww({type: "male", name: "xingjian", age: 22});
    console.log("connect!");
});

var Fib = {
    [Symbol.iterator]() {
        var n1 = 1, n2 = 1;
        return {
            // 使迭代器成为一个可迭代对象
            // [Symbol.iterator]() { return this; },
            next() {
                var current = n2;
                n2 = n1;
                n1 = n1 + current;
                return { value: current, done: false };
            },

            return(v) {
                console.log(
                    "Fibonacci sequence abandoned."
                );
                return { value: v, done: true };
            }
        };
    }
};
for (let v of Fib) {
    console.log( v );

    if (v > 50) break;
}




