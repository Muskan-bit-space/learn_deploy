const express = require('express');
const path = require('path');
const app = express();
const {default:mongoose}=require('mongoose')
const Todos=require('./models/todos.model')
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.get("/todos",async (req,res)=>{
    try {
       let todos=await Todos.find({})
        res.send(todos) 
    } catch (error) {
        res.status.json({
            message:"unable to get todos",
            error
        })
    }
    
})

app.post("/todos",async (req,res)=>{
   try {
    
   } catch (error) {
    res.status(500).json
   }
})


const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
}); 