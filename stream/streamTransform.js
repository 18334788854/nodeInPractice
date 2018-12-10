let fs = require("fs");
let stream = require("stream");

class CSVParser extends stream.Transform {
    constructor(options) {
        super(options);
        this.value = "";
        this.headers = [];
        this.values = [];
        this.line = 0;
    }

    _transform(chunk, encoding, done) {
        let c;
        let i;
        chunk = chunk.toString();
        for (i = 0; i < chunk.length; i++) {
            c = chunk.charAt(i);
            if (c === ",") {
                this.addValue();
            } else if (c === ";") {
                this.addValue();
                if (this.line > 0) {
                    this.push(JSON.stringify(this.toObject()));
                }
                this.values = [];
                this.line++;
            } else {
                this.value += c;
            }
        }
        done();
    }

    toObject() {
        let i;
        let obj = {};
        for (i = 0; i < this.headers.length; i++) {
            obj[this.headers[i]] = this.values[i];
        }
        return obj;
    }

    addValue() {
        if (this.line === 0) {
            this.headers.push(this.value);
        } else {
            this.values.push(this.value)
        }
        this.value = '';
    }
}

let parser = new CSVParser();
fs.createReadStream(__dirname + '/sample.csv').pipe(parser).pipe(process.stdout);