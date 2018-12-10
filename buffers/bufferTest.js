const fs = require("fs");
// fs.readFile("./names.txt",(err,data)=>{
//     if(err){
//
//     }else{
//         console.log(data);
//         console.log(data[0],data.readUInt8(1));
//     }
// });

// function transformCode(username,password){
//     return Buffer.from(username+":"+password).toString("base64");
// }
//
// transformCode("johnny","c-bad");

fs.open("./names.txt", "r", (err, fd) => {
    if (err) {
        return;
    } else {
        let buffer = Buffer.alloc(255);
        fs.read(fd, buffer, 0, 255, 0, (err, bytesRead, buffer) => {
            console.log(bytesRead, buffer.toString().replace(/\u0000/g,''));
        })
    }
});

// fs.readFile("./names.txt", function (err, buf) {
//     console.log(buf, buf.toString());
//     console.log(Buffer.isBuffer(buf));
// });