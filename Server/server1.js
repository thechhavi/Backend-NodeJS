const http=require('http');
const server=http.createServer((req,res)=>{
        console.log(req);
        res.end("Welcome to my Server !");
});

server.listen(4000,'localhost',(err)=>{
    if(err) console.log("error");
    console.log("My Server is listening on  http://localhost:4000");
});