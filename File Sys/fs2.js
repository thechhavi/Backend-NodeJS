// sync functions depends on flags   ..... 

const fs = require('fs');
fs.writeFileSync("dummy.txt","HEllo Dummy ! \n",{flag:"w"});
console.log(fs.readFileSync("dummy.txt","utf8"));
const fa=(fs.appendFileSync("dummy.txt","Dummy Hello !@\n"));
fs.renameSync("dummy.txt","avni.txt");
fs.cpSync("avni.txt", "avni_copy.txt");
fs.unlinkSync('avni_copy.txt');
