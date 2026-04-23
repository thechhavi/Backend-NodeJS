const fs = require('fs')
fs.writeFileSync("config.txt","Server POrt:3000\n")
fs.appendFileSync("config.txt","Environment:Production\n")
fs.appendFileSync("config.txt","Database:MongoDB\n")

const data=fs.readFileSync("config.txt","utf-8")
console.log(data)
fs.copyFile("config.txt","config_backup.txt",(err)=>{
if(err) console.log(err)
else 
console.log("Backup Created")
})

fs.rename("config_backup.txt","backup_config.txt",()=>{})
fs.unlinkSync("config.txt")
