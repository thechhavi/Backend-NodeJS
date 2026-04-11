const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());  //Returns information about each CPU core.
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.uptime());
console.log(os.homedir());
console.log(os.userInfo());
console.log(os.networkInterfaces());  //Network details (IP addresses, adapters).
console.log(`OS: ${os.platform()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Free Memory: ${os.freemem() / 1024 / 1024} MB`);
console.log(`Running time in hr : ${os.uptime()/3600}`);