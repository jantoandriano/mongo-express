const express = require("express")
const AddressRouter = express.Router()
const AddressController = require("./address__controller")

AddressRouter.post("/address", AddressController.createAddress)


module.exports =  AddressRouter;