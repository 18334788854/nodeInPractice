const fs = require("fs");
var a = {
    b: 42,
    c: "42",
    d: [1, 2, 3]
};
console.log(JSON.stringify(a, ["b", "c"], "\t")); // "{"b":42,"c":"42"}"
console.log(JSON.stringify(a, function (k, v) {
    if (k !== "c") return v;
}, "\t"));

parseInt( 0.000008 );       // 0   ("0" from "0.000008")
parseInt( 0.0000008 );      // 8   ("8" from "8e-7")
parseInt( false, 16 );      // 250 ("fa" from "false")
parseInt( parseInt, 16 );   // 15  ("f" from "function..")
parseInt( "0x10" );         // 16
parseInt( "103", 2 );       // 2

fs.open("./XINGJIAN.DBF", "r", (err, fd) => {
    if (err) {
        return;
    } else {
        let buffer = Buffer.alloc(1080);
        fs.read(fd, buffer, 0, 1080, 0, (err, bytesRead, buffer) => {
            console.log(bytesRead, buffer.toString().replace(/\u0000/g,''));
        })
    }
});


// "{"b":42,"d":[1,2,3]}"
