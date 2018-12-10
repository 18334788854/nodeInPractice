let EventEmitter = require("events").EventEmitter;

class MessageBus extends EventEmitter {
    constructor(options) {
        super(options);
        // this.on("message", this.messageReceived.bind(this));
    }

    // messageReceived(msg) {
    //     console.log(`RX:${msg}`);
    // }
}

// let messageBus = new MessageBus();
// messageBus.emit("message", "hello world!");

module.exports = MessageBus;