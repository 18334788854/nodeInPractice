let assert = require("assert");
let util = require("util");

class User {
    constructor(name) {
        this.name = name;
        this.permissions = {
            admin: false
        };
    }
}

class PermissionError extends Error {
    constructor(...arg) {
        super(...arg);
    }
}

function loginAdmin(name) {
    let user = new User(name);
    if (!user.permissions.admin) {
        console.log(1);
        throw new PermissionError(`You are not an administrator.`);
    }
    return user;
}

assert.throws(function () {
        loginAdmin(`xingjian`);
    }, PermissionError, `A PermissionError was expected.`
);