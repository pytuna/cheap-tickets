const Router = require("express").Router();
const tripController = require("../controllers/trip.controller.js")
const {auth, authenticate} = require("../middlewares/auth")

Router.post('/create',auth('Admin'), tripController.createTrip)
Router.get('/',authenticate, tripController.getAllTrip)

module.exports = Router