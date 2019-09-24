module.exports = {
    getAllProducts : (req, res, next) => {
        res.send("Hello from get all products")
    },
    getSingleProduct: (req, res, next) => {
        res.send("Hello from single product")
    },
    addProducts: (req, res, next) => {
        res.send("Hello from add product")
    }
}