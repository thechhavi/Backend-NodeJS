const fs = require('fs');
const fd = fs.openSync("temp.txt","w+"); // (file name,flag)
fs.writeSync(fd," we are here ... CHhavi \n jhbfucabegv \n bhjvjvzfj"); 
const newMemory = Buffer.alloc(50); // 50 bytes memory
const data = fs.readSync(fd,newMemory,0,newMemory.length,0);
console.log(newMemory,toString("utf8",0,data)); //(encoding,start,,read)