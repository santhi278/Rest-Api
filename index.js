require ("dotenv").config()
var express = require("express")
var app=express()
var cors = require("cors")
var connectToDatabase = require("./DataBase/Db")

var bookRoute = require("./Routes/Book-Routes")
var productRoute = require("./Routes/Products-Routes")
connectToDatabase()
var app = express()
app.use(express.json())
app.use(cors())

app.use("/api/books",bookRoute)
app.use("/api/products",productRoute)

var PORT = process.env.PORT||3000
app.listen(PORT,()=>{
    console.log("The Server Is Running")
})