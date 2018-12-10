let dns = require("dns");
dns.lookup("www.manning.com", function (err, address) {
    if (err) {
        console.error(err);
    }
    console.log(`Addresses:${address}`);
});
dns.resolve("www.baidu.com", function (err, address) {
    if (err) {
        console.error(err);
    }
    console.log(`Addresses:` + address);
});