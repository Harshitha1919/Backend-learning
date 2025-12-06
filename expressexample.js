import express from 'express';
const app=express();
app.get('/users',(req,res)=>{
    res.send("hello this is backend");
})
app.get('/get-users',(req,res)=>{
    res.send("hello this is Harshitha");
})
app.listen(7007,()=>{
    console.log("server running at port 7007")
});