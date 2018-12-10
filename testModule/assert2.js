let assert = require("assert");

class User {
    constructor(name) {
        this.name = name;
        this.premissions = {
            admin: false
        }
    }
}

function login(name) {
    let user = new User(name);
    user.premissions.admin = true;
    return user;
}

let actual = login(`xingjian`);
let expected = new User(`xingjian`);
assert.deepEqual(actual, expected, `The user state was not correct.`);