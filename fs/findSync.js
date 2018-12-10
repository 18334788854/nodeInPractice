let fs = require("fs");
let join = require("path").join;

exports.findSync = function (nameRe, startPath) {
    let results = [];

    function finder(path) {
        let files = fs.readdirSync(path);
        for (let i = 0; i < files.length; i++) {
            let fpath = join(path, files[i]);
            let stat = fs.statSync(fpath);

            if (stat.isDirectory()) {
                finder(fpath);
            }
            if (stat.isFile() && nameRe.test(files[i])) {
                results.push(fpath);
            }
        }
    }

    finder(startPath);
    return results;
};