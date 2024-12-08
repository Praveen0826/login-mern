const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const employeemodel =require("./models/employee")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/employee").then((con)=>{
    console.log("Mongodb connected on host "+con.connection.host)});

app.post('/signup',(req,res)=>{
    employeemodel.create(req.body)
    .then(employee=>res.json(employee))
    .catch(err=>res.json(err))
})    



app.post('/Login',(req,res)=>{
    const{email,password}=req.body;
    employeemodel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("successs");
            }
            else{
                res.json("the passwoed is incorrect")
            }
        }
        else{
            res.json("no record found")
        }
    })
    
}) 

app.listen(8000,()=>{
    console.log("server is running ");
    
})