const events = require("events");
class MusicPlayer extends events.EventEmitter {
}
let musicPlayer = new MusicPlayer();
musicPlayer.on("play", function (track) {
    this.emit("error", "unable to play!");
});
musicPlayer.on("error", function (err) {
    console.error(`Error : ${err}`);
});
musicPlayer.emit("play", "123");
