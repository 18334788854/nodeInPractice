let express = require("express");
let app = express();
let Schema = require("validate");
let xml2json = require("xml2json");
let util = require("util");
let Page = new Schema();

Page.path("title").type("string").required();

class ValidatorError extends Error {
    constructor(errors) {
        super(errors);
        this.statusCode = 400;
        this.message = errors.join(", ");
    }
}

function xmlMiddleware(req, res, next) {
    if (!req.is("xml")) {
        return next();
    }
    let body = "";
    req.on("data", function (str) {
        body += str;
    });
    req.on("end", function () {
        req.body = xml2json.toJSON(body.toString(), {
            object: true,
            sanitize: false
        });
        next();
    })
}

function checkValidXml(req, res, next) {
    let page = Page.validate(req.body.page);
    if (page.errors.length) {
        next(new ValidatorError(page.errors));
    } else {
        next();
    }
}

function errorHandler(err, req, res, next) {
    console.error(`errorHandler:${err}`);
    res.send(err.statusCode || 500, err.message);
}

app.use(xmlMiddleware);

app.post("/pages", checkValidXml, function (req, res) {
    console.log(`Valid page:${req.body.page}`);
    res.send(req.body);
});

app.use(errorHandler);

app.listen(8080);