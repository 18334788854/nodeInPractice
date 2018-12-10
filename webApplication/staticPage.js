let express = require("express");
let app = express();
app.get("/", function (req, res) {
    res.send("<h1>hello world!</h1>");
});
app.listen(8080, function () {
    console.log(`listening the port:8080`);
});