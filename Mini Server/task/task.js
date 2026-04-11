// // rout == home , about us , contact , services ,
// // html page for each rout ... when rhout not exidt then page 404 not founnd and givr button who directly take us on home rout 

const fs=require('fs');
const http=require('http');
const url=require('url');
const path = require('path');

const serv = http.createServer((req,res)=>{
    const date=new Date();
        const myURL = url.parse(req.url, true);
        fs.appendFile("task.txt",`${date} and ${url.path}:New Request Recieved \n`,(err)=>{
            if (err) console.log(err);
        });
        let filePath;
        switch(myURL.pathname)
        {
            case'/': 
                     filePath = path.join(__dirname, 'home.html');
                         break;
            case '/about' : 
                     filePath = path.join(__dirname,'about.html');
                        break;
            case'/contact' :
                     filePath = path.join(__dirname, 'contact.html');
                         break;
            case'/services' :
                     filePath = path.join(__dirname, 'services.html');
                        break;
            default:
                     filePath = path.join(__dirname, 'default.html');
                        res.statusCode = 404;
        }

        fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.end("Internal Server Error");
        } else {
                res.end(data);
        }
    });
});

serv.listen(4000,'localHost',(err)=>{
    if(err) console.log("error");
    console.log("Server is listening on http://localHost:4000 ");
});








