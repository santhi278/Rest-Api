var books = require("../Model/books")
var getAllBooks = async(req,res)=> {
    var allBooks = await books.find()
    res.status(200).json(allBooks)
    
}
var getSingleBook = async(req,res)=>{
    var BookId = req.params.id
    var getSingleBook =await books.findById(BookId)
    res.status(200).json(getSingleBook)
    

}
var addBook = async(req,res)=>{
    var formData = req.body
    var newBook = await books.create(formData)
    if (newBook){
        res.status(201).json(newBook)
    
    }else{
        res.status(404).json({message:"cannot add"})
    }
}

var updateBook = async(req,res)=>{
    var bookId = req.params.id 
    var updatedData = req.body
    var updatedBook = await books.findByIdAndUpdate(bookId,updatedData)
    if(updatedBook){
        res.status(200).json(updatedBook)
    }else{
        res.status(404).json({mesage : "canot find"})
    }
}

var deleteBook = async(req,res)=>{
     var bookId = req.params.id
    var deletedBook = await books.findByIdAndDelete(bookId)
    if(deletedBook){
        res.status(200).json(deletedBook)

    }else{
        res.status(404).json({message : "cannot delete"})
    }

}


module.exports = {
    getAllBooks,getSingleBook,addBook,updateBook,deleteBook
}