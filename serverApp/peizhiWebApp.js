let express = require("express");
let app = express();

app.set("port", process.env.PORT || 3000);

if(process.env.NODE_ENV==="development"){
    app.set('db', 'localhost/development');
}else if(process.env.NODE_ENV==="production"){
    app.set("db", "db.example.com/production");
}else{
    app.set("db","not shezhi db")
}

app.listen(app.get("port"), function () {
    console.log(`Using database:${app.get("db")}`);
    console.log(`Listening on port:${app.get("port")}`);
});