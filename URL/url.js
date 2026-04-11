const url=require('url');

const add='http://www.localhost:8000/default.html?year=2024&month=february';
const myURL=url.parse(add,true);
console.log(myURL);