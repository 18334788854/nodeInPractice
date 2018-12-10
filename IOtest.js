let num1,num2;

process.stdout.write("请输入第一个数字:");

process.stdin.on("data",function(chunk){
   if(!num1){
       num1 = Number(chunk);
       process.stdout.write("请输入第二个数字：");
   }else{
       num2 = Number(chunk);
       process.stdout.write(`结果是：${num1+num2}`);
   }
});

// process.stdin.resume();
// process.stdin.setEncoding("utf8");
//
// process.stdin.on("data",function (chunk) {
//     process.stdout.write(chunk.toUpperCase());
// });