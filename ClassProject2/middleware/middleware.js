const reqAge=(req,res,next)=>{
    const age =req.query.age;
    if(!age) {
       res.send("enter your age")
    }
    else if(age<18)  {
         res.send("not applicable")
        }
        else{
    next()
        }
}
module.exports=reqAge