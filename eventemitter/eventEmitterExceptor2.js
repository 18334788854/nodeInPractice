const events = require("events");
const domain = require("domain");
// console.log(events.EventEmitter);
let audioDomain = domain.create();

class AudioDevice extends events.EventEmitter {
    constructor() {
        super();
        this.on("play", this.play.bind(this));
        this.on("error",function (err) {
            console.error(`AudioDevice error : ${err}`);
        });
    }

    play() {
        this.emit("error", "not implemented yet!");
    }
}

class MusicPlayer extends events.EventEmitter {
    constructor() {
        super();
        this.audioDevice = new AudioDevice();
        this.on("play", this.play.bind(this));
        this.on("error", function (err) {
            console.error(`MusicPlayer error : ${err}`);
        });
        this.emit("error", "No Audio tracks are available!");
    }

    play() {
        this.audioDevice.emit("play");
        console.log("Now playing!");
    }
}

let musicPlayer = new MusicPlayer();
musicPlayer.play();
console.log(musicPlayer);
// audioDomain.on("error", function (err) {
//     console.log("audioDomain error : ", err);
// });
// audioDomain.run(function () {
//     let musicPlayer = new MusicPlayer();
//     musicPlayer.play();
// });