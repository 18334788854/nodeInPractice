let express = require("express");
let app = express();

app.use(function (req, res, next) {     //调用app.use()来应用一个中间件
    console.log(`${req.method} ${req.url}`);
    next();                 //继续执行下一个中间件
});

function middleware(req, res, next) {
    if (req.session.user_id) {
        db.users.find(req.session.user_id, function (err, user) {
            if (err) {
                next(err);
            } else if (user) {
                res.locals.user = user;
                next();
            } else {
                next(new Error(`Account not found.`));
            }
        })
    } else {
        next();
    }
}

module.exports = {
    loadUser: middleware
};