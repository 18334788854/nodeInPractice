let assert = require("assert");
let http = require("http");
// let index = require("./../index");

function request(method, url, cb) {
    http.request({hostname: "localhost", port: 8000, path: url, method: method}, function (res) {
        res.body = "";
        res.on("data", function (data) {
            res.body += data;
        });
        res.on("end", function () {
            cb(res);
        });
    }).end();
}

describe(`Example web app 1`, function () {
    it(`should square numbers`, function (done) {
        request("GET", "/square/4", function (res) {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body, "16");
            done();
        })
    });
    it(`should return 500 for invalid square requests`, function (done) {
        request("GET", "/square", function (res) {
            assert.equal(res.statusCode, 500);
            done();
        })
    });
});