let assert = require("assert");
let crypto = require("crypto");

class User {
    constructor(fields) {
        this.fields = fields;
    }

    save(cb) {
        process.nextTick(cb);
    }

    signIn(password) {
        let shasum = crypto.createHash("sha1");
        shasum.update(password);
        return shasum.digest("hex") === this.fields.hashed_password;
    }
}

describe(`user model`, function () {
    describe(`sign in`, function () {
        let user = new User({
            email: "250853852@qq.com",
            hashed_password: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
        });
        before(function (done) {
            user.save(done);
        });
        it(`should accept the correct password`, function () {
            assert(user.signIn("test"));
        });
        it(`should not accept the wrong password`, function () {
            assert.equal(user.signIn("wrong"), false);
        });
    });
});
