const http= require('http');
const server= http.createServer((req,res) => {
    console.log(req);
    res.end("Welcome to server NODE JS  ");
});

server.listen(8000,'localhost',(err)=>{
    if(err) console.log("error");
    console.log("Server is  listening on http://localhost:8000");
});
