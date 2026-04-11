const express = require("express");
const app = express();
app.set("view engine", "ejs");
const { resultFilter, logfile } = require('./middleware');
app.use(resultFilter);
app.use(logfile);
app.use((req,res,next)=>{
    console.log("middleware2 called");
    //return res.json({data:"hello"});
  //req.name="AS";
  //next();
    next();
})
app.get("/", (req, res) => {
    let student = {
        name:"chhavi varshney",
        rollno:"2415000472",
        email:"chhavi.varshney_cs24@gla.ac.in",
        age:"18",
        hobbies:["travel","sleep","playing badminton"]
    };
    res.render("home", { stu: student });
});
app.listen(3000, () => {
    console.log("http://localhost:3000");
});