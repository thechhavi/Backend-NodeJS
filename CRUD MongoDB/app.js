const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.urlencoded({ extended: true }))

mongoose
  .connect("mongodb://127.0.0.1:27017/my_Db")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection failed"))

const newSchema= new mongoose.Schema({
    First_Name:{
        type: String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Contact:{
        type:String,
        required:true
    }},
    
     { timestamps:true})

    const model = mongoose.model('user',newSchema)

    app.post('/user',async(req,res)=>{
        const user= await user.create(req.body)
        res.json(user)
    })

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});