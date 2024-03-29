const express=require("express"
)

const app=express()
app.use("/",(req,res)=>{

    res.send("server is runnig");
});
app.listen(4500,console.log("Server on port 4500"));