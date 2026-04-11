
const fs = require('fs');
fs.writeFile("char.txt","Hello Dummy !!!",(err)=>{
    if(err)console.log(err);
    else console.log("File Created Successfull");
});


fs.readFile("char.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        for (let ch of data) {
            console.log(ch);
        }
    }
});