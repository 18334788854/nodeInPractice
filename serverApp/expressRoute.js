let express = require("express");
let app = express();
let routes = require("./routes");

app.use(express.bodyParser());

app.get('/notes', routes.notes.index);
app.post('/notes', routes.notes.create);
app.patch('/notes/:id', routes.notes.update);
app.get('/notes/:id', routes.notes.show);

module.exports = app;