var mongoose = require("mongoose")
var bookSchema = new mongoose.Schema({
    Title : String,
    Price : Number,
    Author : String,
    isActive : Boolean
})
module.exports=mongoose.model("books",bookSchema)