const express=require('express')
const app = express()

app.get('',(req,res)=>{
    res.send("<h1>Welcome to our page</h1>")
})

app.listen(3000,()=>{
    console.log("Server is listen on the port http://localhost:3000")
})