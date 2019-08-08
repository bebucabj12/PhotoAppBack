const express = require('express');
const api = express.Router();
const usersController = require('../Controllers/usersControllers.js')
const likesController = require('../Controllers/likesControllers.js')
const Likes = require('../Models/Likes')



api.get("/users/:id", usersController.findUserById);
api.post("/register", usersController.register)
api.post("/login", usersController.login)

api.get("/likes/user/:idUsername", likesController.getUserLikes);
api.post("/likes/user", likesController.postUserLikes);
api.delete("/profile", likesController.removeLikes);


module.exports = api;