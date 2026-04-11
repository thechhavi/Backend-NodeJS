const express=require("express");
const app=express();
// express ne server ki power routing ko di h 
app.get("/",(req,res)=>{
    res.send("<h1> hello home</h1><a href='/about'>about button</a>");
})
app.get("/about",(req,res)=>{
    res.send("<h1> hello about</h1><a href='/search'>search button</a>");
})
app.get("/search",(req,res)=>{
    const data=req.query.name;
    console.log(req.query.name);
    if(!data){
        res.send("Please provide a search query");
    }
    else{
        res.send("<h1>wanna search here </h1> <a href='/content'> contentbutton</a>"+req.query.age);
    }
})
app.get("/content",(req,res)=>{
    res.send("<h1> hello content</h1> <a href='/service'> service button</a>");
})
app.get("/service",(req,res)=>{
    res.send("<h1> hello service</h1> <a href='/detail'> detail button</a>");
})
app.get("/detail",(req,res)=>{
    res.send("welcome to detail page");
})

/*app.get("/*",(req,res)=>{
    res.send("404 not found");
})*/

app.listen(4000,()=>{
    console.log("Server is  listening on http://localhost:4000");

});

//console.log("Server is  listening on http://localhost:4000/search?name=aksh&age 20 ");
//console.log("Server is  listening on http://localhost:4000");