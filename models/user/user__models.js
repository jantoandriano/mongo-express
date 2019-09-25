const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age : Number,
    gender: String,
    email: String,
    addresses: [{
        type: Schema.Types.ObjectId,
        ref: "Address"
    }]
}, { timestamps : true})

module.exports = mongoose.model("Users", UserSchema)