let http = require("http");
let https = require("https");
let url = require("url");
let request;

class Request {
    constructor() {
        this.maxRedirects = 10;
        this.redirects = 0;
    }

    get(href, cb) {
        let uri = url.parse(href);
        let options = {host: uri.host, path: uri.path};
        let httpGet = uri.protocol === "http" ? http.get : https.get;
        console.log(`GET:${href}`);

        function processResponse(res) {
            if (res.statusCode >= 300 && res.statusCode < 400) {
                if (this.redirects >= this.maxRedirects) {
                    this.error = new Error(`Too many redirects for:${href}`);
                } else {
                    this.redirects++;
                    href = url.resolve(options.host, res.headers.location);
                    return this.get(href, cb);
                }
            }
            res.url = href;
            res.redirects = this.redirects;
            console.log(`Redirected:${href}`);

            function end() {
                console.log(`Connection ended.`);
                cb(this.error, res);
            }

            res.on('data', function (data) {
                console.log(`Got data,length:${data.length}`);
            });
            res.on('end', end);
        }

        httpGet(options, processResponse.bind(this)).on("error", function (err) {
            cb(err);
        });
    }
}

request = new Request();
request.get('https://www.baidu.com/s?ie=utf8&oe=utf8&wd=module%2Eparent&tn=98010089_dg&ch=1', function (err, res) {
    if (err) {
        console.error(err);
    } else {
        console.log(`Fetched URL:${res.url} with ${res.redirects} redirects`);
        process.exit();
    }
});