const fs=require('fs');
const http=require('http');
const url =require('url');

const serv = http.createServer((req,res)=>{
    const date=new Date();
    const myURL = url.parse(req.url, true);
    fs.appendFile("userLogData.txt",`${date} and ${url.path}:New Request Recieved \n`,(err)=>{
        if (err) console.log(err);
    });
    switch(myURL.pathname)
    {
        case'/': 
                res.end ("Welcome to Home PAge");
                break;
        case '/about' : 
                res.end("Welcome yo About PAge");
                break;
        case'/contact' :
                res.end("WElcome to Contact PAge");
                break;
        default:
                res.end("404 Page Not Found");
    }

});

serv.listen(4000,'localHost',(err)=>{
    if(err) console.log("error");
    console.log("Server is listening on http://localHost:4000 ");
});