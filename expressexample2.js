import express from 'express';
const app=express();
app.use(express.json());
app.get('/get-user',(req,res)=>{
    res.send("api sucess is done");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data added into server");
})
app.delete('delete-user',(req,res)=>{

})
app.listen(7000,()=>{
    console.log("server running at port 7000")
}) 