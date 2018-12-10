module.exports.square = function (num) {
    return num * num;
};

module.exports.randomTimeout = function (cb) {
    setTimeout(cb, Math.random() * 500);
};