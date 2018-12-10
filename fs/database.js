let fs = require("fs");
let EventEmitter = require("events").EventEmitter;

class Database extends EventEmitter {
    constructor(path) {
        super();
        this.path = path;
        this._records = Object.create(null);
        this._writeStream = fs.createWriteStream(this.path, {encoding: "utf8", flags: "a"});
        this._load();
    }

    _load() {
        let stream = fs.createReadStream(this.path, {encoding: "utf8"});
        let database = this;
        let data = "";
        stream.on("readable", function () {
            data += stream.read();
            let records = data.split("\n");
            data = records.pop();
            for (let i = 0; i < records.length; i++) {
                try {
                    let record = JSON.parse(records[i]);
                    if (record.value == null) {
                        delete database._records[record.key];
                    } else {
                        database._records[record.key] = record.value;
                    }
                } catch (e) {
                    database.emit("error", "found invalid record:", records[i]);
                }
            }
        });
        stream.on("end", function () {
            database.emit("load");
        });
    }

    get(key) {
        return this._records[key] || null;
    }

    set(key, value, cb) {
        let toWrite = JSON.stringify({key, value}) + "\n";
        if (value == null) {
            delete this._records[key];
        } else {
            this._records[key] = value;
        }
        this._writeStream.write(toWrite, cb);
    }

    del(key, cb) {
        return this.set(key, null, cb);
    }
}

module.exports = Database;