const mongoose=require('mongoose');

const employeeschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const employeemodel=mongoose.model("employee",employeeschema);
module.exports=employeemodel;