const events = require("events");
let id;

class Pulser extends events.EventEmitter {
    constructor(speed, times) {
        super();
        this.speed = speed;
        this.times = times;
        this.on("newListener", (eventName, listener) => {
            if (eventName === "pulse") {
                this.start();
            }
            if (eventName === "stop") {
                this.stop();
            }
        })
    }

    start() {
        id = setInterval(() => {
            this.emit("pulse");
            this.times--;
            if (this.times === 0) {
                clearInterval(id);
            }
        }, this.speed);
    }

    stop() {
        if (this.listeners("pulse").length === 0) {
            throw new Error("No listeners have been added");
        }
        setTimeout(() => {
            this.emit("stop");
            clearInterval(id);
        }, 4000);
    }
}

let pulser = new Pulser(500, 5);
pulser.on("pulse", () => {
    "use strict";
    console.log(".");
});
pulser.on("stop", () => {
    "use strict";
    console.log("结束定时器！");
});

// class EventTracker extends events.EventEmitter {
//
// }
//
// let eventTracker = new EventTracker();
//
// eventTracker.on("newListener", (name, listener) => {
//     "use strict";
//     if(name!=="error"){
//         console.log(`Listen a new listener : ${name}`);
//         listener();
//     }
// });
// eventTracker.on("error", (err) => {
//     "use strict";
//     return console.error(`Error : ${err}`);
// });
//
// eventTracker.on("one listener", () => {
//     "use strict";
//     console.log(`Established one listener!`);
// });
//
// eventTracker.on("two listener",()=>{
//     "use strict";
//     console.log(`Established two listener!`);
// });
