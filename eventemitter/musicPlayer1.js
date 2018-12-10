const events = require("events");

function MusicPlayer(track) {
    "use strict";
    this.track = track;
    this.playing = false;

    for (let methodName in events.EventEmitter.prototype) {
        if (events.EventEmitter.prototype.hasOwnProperty(methodName)) {
            this[methodName] = events.EventEmitter.prototype[methodName];
            // console.log(this[methodName]);
        }
    }
}

MusicPlayer.prototype = {
    toString() {
        "use strict";
        if (this.playing) {
            return `Now playing : ${this.track}`;
        } else {
            return `stopped`;
        }
    }
};

let musicPlayer = new MusicPlayer('Girl Talk - Still Here');

musicPlayer.on("play", () => {
    musicPlayer.playing = true;
    console.log(musicPlayer.toString());
    console.log(this);
});

musicPlayer.emit("play");