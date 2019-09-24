const express = require("express")
const Productrouter = express.Router()
const ProductController = require("./product__controller")


Productrouter.get("/products", ProductController.getAllProducts)

module.exports = Productrouter