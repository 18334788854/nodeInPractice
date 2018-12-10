let args={
    "-h":displayHelp,
    "-r":readOnly
},
    fs=require("fs");
function displayHelp(){
    console.log("Argument processor : ",args);
}
function readOnly(file){
    if(file&&file.length){
        console.log("Reading : ",file);
        fs.createReadStream(file).pipe(process.stdout);
    }else{
        console.error("A file must be provided with the -r option.");
        process.exit(1);
    }

}
if(process.argv.length>0){
    process.argv.forEach(function(arg,index){
        if(index>1){
            if(args[arg]){
                console.log(args[arg]);
                args[arg].apply(this,process.argv.slice(index+1));
            }
        }
    });
}
