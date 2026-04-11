

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
fs.appendFile('log.txt', `${Date.now()} : new request recorded\n`,(err) => {
    if (err) console.log(err);
    });
    res.setHeader("Name", 'Chhavi Varshney');
    res.end('Welcome to server node js');
    console.log(req);
});

server.listen(8000, 'localhost', (err)=> {
    if(err) console.log(err)
    console.log('server created on http://localhost:8000');
})