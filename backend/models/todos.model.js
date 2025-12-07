const {Schema,default:mongoose}=require('mongoose')

const todoschema=new Schema({
    name:String,
    description:String
})

module.exports={todoschema}