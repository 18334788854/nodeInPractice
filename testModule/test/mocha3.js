let assert = require("assert");
let request = require("supertest");
let app = require("./../server");

describe(`Example web app 2`, function () {
    it(`should square numbers`, function (done) {
        request(app).get("/square/4").expect(200).expect(/16/, done);
    });
    it (`should return a 500 for invalid square requests`, function (done) {
        request(app).get("/square").expect(500, done);
    }) ;
});