const express = require("express")
const router = express.Router()
const ProductController = require("/routes/products/product__controller")


router.get("/products", ProductController.getAllProduct)
router.get("/products/:productID", ProductController.getSingleProduct)
router.post("/products", ProductController.addProduct)


module.exports = router