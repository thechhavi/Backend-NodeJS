//Async  function depends on mods

const fs = require('fs');
fs.writeFile("dummy.txt","Hello Dummy !!!",(err)=>{
    if(err)console.log(err);
    else console.log("File Created Successfull");
});

fs.readFile("dummy.txt","utf8",(err,data)=>{
    if(err)console.log(err);
    else console.log(data);
});