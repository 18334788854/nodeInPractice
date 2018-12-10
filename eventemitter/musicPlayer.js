const util = require("util");
const events = require("events");

let AudioDevice = {
    play(track) {
        "use strict";

    },
    stop() {
        "use strict";

    }
};
//两种继承方式：推荐ES6的extends
// function MusicPlayer() {
//     "use strict";
//     this.playing = false;
//     events.EventEmitter.call(this);
// }
// util.inherits(MusicPlayer, events.EventEmitter);

class MusicPlayer extends events.EventEmitter {
    constructor() {
        super();
        this.playing = false;
    }
}

let musicPlayer = new MusicPlayer();
musicPlayer.on("play", function (track) {
    this.playing = true;
    console.log(this);
});

musicPlayer.on("stop", function () {
    this.playing = false;
    console.log(this);
});
musicPlayer.on("play", function (track) {
    console.log(`Track now playing : ${track}`);
});

musicPlayer.emit("play", "The Roots - The Fire");

setTimeout(function () {
    "use strict";
    musicPlayer.emit("stop");
}, 1000);