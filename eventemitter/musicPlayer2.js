const events = require("events");
const e = {
    play: "play",
    pause: "pause",
    stop: "stop",
    ff: "ff",
    rw: "rw",
    addTrack: "add-track"
};

class MusicPlayer extends events.EventEmitter {
    constructor() {
        super();
        this.playing = false;
        this.on(e.play, this.play.bind(this));
        console.log("1");
    }

    play() {
        this.playing = true;
        console.log("2");
    }
}

let musicPlayer = new MusicPlayer();
musicPlayer.on(e.play, function () {
   console.log("3");
});
musicPlayer.emit(e.play);