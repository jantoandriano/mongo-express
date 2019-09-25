const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    address: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
