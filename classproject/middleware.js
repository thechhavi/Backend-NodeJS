const fs = require('fs');
const resultFilter = (req, res, next) => {
  console.log("middleware called");
  next();   
};
const logfile = (req, res, next) => {
  console.log("Middleware Second call...");
  const data = new Date();
  fs.appendFile(
    'log.txt',
    `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} : ${req.method} ${req.path}\n`,
    (err) => {
      if (err) console.log(err);
      else console.log("log file generated...");
    }
  );
  next();
};
module.exports = { resultFilter, logfile };