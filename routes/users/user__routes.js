const express = require("express")
const UserRouter = express.Router()
const UserController = require("./user_controller")

UserRouter.get("/", UserController.getAllUsers)
UserRouter.post("/", UserController.createUser)
UserRouter.get("/:userID", UserController.getSingleUser)
UserRouter.put("/:userID", UserController.updateUser)
UserRouter.delete("/userID", UserController.deleteUser)

module.exports =  UserRouter;