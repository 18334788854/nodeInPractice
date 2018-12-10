let assert = require("assert");
let sinon = require("sinon");
let db = sinon.mock(require("./db"));
let User = require("./user");

describe(`Users`, function () {
    let fields = {
        name: "xingjian",
        password: "12sfsdg"
    };
    let user;
    before(function () {
        user = new User(1, fields);
        let stub = sinon.stub(user.db, "hmget").callsArgWith(2, null, JSON.stringify(fields));
    });
    it(`should allow users to sign in`, function (done) {
        user.signIn('test', function (err, signedIn) {
            assert(signedIn);
            done(err);
        });
    });
    it(`should require the correct password`, function (done) {
        user.signIn('wrong', function (err, signedIn) {
            assert(!signedIn);
            done(err);
        })
    });
});