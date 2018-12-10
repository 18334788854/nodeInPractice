let fs = require("fs");
let join = require("path").join;

exports.find = function (nameRe, startPath, callback) {
    let results = [];
    let asyncOps = 0;
    let errored = false;

    function error(err) {
        if (!errored) {
            callback(err);
        }
        errored = true;
    }

    function finder(path) {
        asyncOps++;
        fs.readdir(path, function (err, files) {
            if (err) {
                return error(err);
            }

            files.forEach(function (file) {
                let fpath = join(path, file);
                asyncOps++;
                fs.stat(fpath, function (err, stats) {
                    if (err) {
                        return error(err);
                    }

                    if (stats.isDirectory()) {
                        finder(fpath);
                    }

                    if (stats.isFile() && nameRe.test(file)) {
                        results.push(fpath);
                    }
                    asyncOps--;
                    if (asyncOps === 0) {
                        callback(null, results);
                    }
                })
            });
            asyncOps--;
            if (asyncOps === 0) {
                callback(null, results);
            }
        })
    }

    finder(startPath);
};