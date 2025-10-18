var mongoose = require("mongoose")

var productSchema = new mongoose.Schema({
    Title: String,
    Price: Number,
    version: String,
    isActive: Boolean
})

module.exports = mongoose.model("products", productSchema)