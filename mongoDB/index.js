const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/test";

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    console.log(`mongo数据库创建！`);
    var dbase = db.db("runoob");//从数据库实例test数据库切换至数据库实例runoob
    dbase.createCollection('site', function (err, res) {    //在数据库实例runoob下创建集合site
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});