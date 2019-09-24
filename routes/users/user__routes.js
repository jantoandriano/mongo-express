const express = require("express")
const UserRouter = express.Router()
const UserController = require("./user__controller")

UserRouter.get("/users", UserController.getAllUsers)
UserRouter.post("/users", UserController.createUser)
UserRouter.get("/:userID", UserController.getSingleUser)
UserRouter.put("/:userID", UserController.updateUser)
UserRouter.delete("/userID", UserController.deleteUser)

module.exports =  UserRouter;