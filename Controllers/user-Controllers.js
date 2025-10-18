var products = require("../Model/products")

var getAllProducts = async (req, res) => {
    var allProducts = await products.find()
    res.status(200).json(allProducts)
}

var getSingleProduct = async (req, res) => {
    var productId = req.params.id
    var singleProduct = await products.findById(productId)
    res.status(200).json(singleProduct)
}

var addProduct = async (req, res) => {
    var formData = req.body
    var newProduct = await products.create(formData)
    if (newProduct) {
        res.status(201).json(newProduct)
    } else {
        res.status(404).json({ message: "cannot add" })
    }
}

var updateProduct = async (req, res) => {
    var productId = req.params.id
    var updatedData = req.body
    var updatedProduct = await products.findByIdAndUpdate(productId, updatedData)
    if (updatedProduct) {
        res.status(200).json(updatedProduct)
    } else {
        res.status(404).json({ message: "cannot find" })
    }
}

var deleteProduct = async (req, res) => {
    var productId = req.params.id
    var deletedProduct = await products.findByIdAndDelete(productId)
    if (deletedProduct) {
        res.status(200).json(deletedProduct)
    } else {
        res.status(404).json({ message: "cannot delete" })
    }
}

module.exports = {
    getAllProducts,getSingleProduct,addProduct,updateProduct,deleteProduct
}