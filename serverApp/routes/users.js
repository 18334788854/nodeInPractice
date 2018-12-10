let User = require("./../nodules/user");
module.exports.create = function (req, res, next) {
    let user = new User(req.body);
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.app.emit("user:created", user);
        res.send(`User created.`);
    });
};