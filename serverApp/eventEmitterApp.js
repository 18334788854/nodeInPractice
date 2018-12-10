let express = require("express");
let app = express();
let emials = require("./emails");
let routes = require("./routes");
app.use(express.json());    //使用json格式
app.post("/users", routes.user.create);
app.on("user:created", emails.welcome);
module.exports = app;