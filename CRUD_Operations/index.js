const express=require('express')
const fs = require('fs')
const app = express()
const users = require('./Users.json')

app.use(express.urlencoded({Extender:"false"}))
app.get('/api/userData',(req,res)=>{
    return res.json(users)
})
app.get('/userName',(req,res)=>{
   const html = `
   <ul>
        ${users.map(user=>`<li>${user.name}</li>`).join(' ')}
   </ul>
   `
   res.send(html)
})

app.get('/userData/:id',(req,res)=>{
    const id =req.params.id
    console.log(id)
    const user_wise = users.find(user=> user.id==id)
    return res.json(user_wise)
})

app.post('/userData',(req,res)=>{
    const data=req.body
    // console.log(data)
    users.push(data)
    fs.appendFile("./Users.json",JSON.stringify(data),(err)=>{
        return res.json({mes:"File Successfully Written"})
    })
    return res.json({mes:"Done"})
})

app.delete('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    console.log(id)
    const users= JSON.parse(fs.readFileSync('Users.json','utf-8'))
    const FilteredUsers = users.filter(user=> user.id !== id)
    fs.writeFileSync('Users.json',JSON.stringify(FilteredUsers,null,2))
    return res.json({mes:"User deleted"})
})

app.patch('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const updates = req.body
    const users = JSON.parse(fs.readFileSync('./Users.json','utf-8'))
    const updatedUsers = users.map(user=> user.id === id ? {...user , ...updates}:user)
    fs.writeFileSync('./Users.json',JSON.stringify(updatedUsers,null,2))
    res.json({mes:"User updated"})
})

app.listen(3000,()=>{
    console.log("Server is listen on the port http://localhost:3000")
})