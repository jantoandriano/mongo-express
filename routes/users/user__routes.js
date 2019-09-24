const express = require("express")
const UserRouter = express.Router()
const UserController = require("./user__controller")

UserRouter.get("/users", UserController.getAllUsers)
UserRouter.post("/users", UserController.createUser)
UserRouter.get("/users/:userID", UserController.getSingleUser)
UserRouter.put("/users/:userID", UserController.updateUser)
UserRouter.delete("/users/userID", UserController.deleteUser)

module.exports =  UserRouter;