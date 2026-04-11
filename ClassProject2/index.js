const express = require('express')
const app = express()
const reqAge = require('./middleware/middleware')
const router = express.Router()
router.use(reqAge)
app.get("", (req, res) => {
    res.send("Welcome to Home Page")
})
app.get("/about", reqAge, (req, res) => {
    res.send("Welcome to About Page")
})
router.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page")
})
app.use(router)
app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000")
})