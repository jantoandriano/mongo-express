const mongoose = require("mongoose")


const ProductSchema = mongoose.Schema({
    title: String,
    desc: String,
    amount: Number,
}, { timestamps: true })


module.exports = mongoose.model("Products", ProductSchema)