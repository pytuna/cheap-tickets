const Router = require("express").Router();
const userController = require("../controllers/user.controller.js")
const {auth, authenticate} = require("../middlewares/auth")

Router.post("/register", userController.registerUser)
Router.post("/login", userController.loginUser)
Router.post("/upload-avatar",authenticate, userController.uploadAvatar)
module.exports = Router;