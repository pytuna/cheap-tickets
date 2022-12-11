const Router = require("express").Router();
const stationController = require("../controllers/station.controller.js")
const {checkExist} = require("../middlewares/validations/checkExist")
const {Station} = require("../models")
const {auth, authenticate} = require("../middlewares/auth")

Router.post("/create", auth("Admin"),stationController.createStation)

Router.get("/search/:id",authenticate, stationController.getOneStationById)

Router.put("/update/:id", auth("Admin"), checkExist(Station), stationController.updateOneStationById)

Router.delete("/delete/:id", auth("Admin"),stationController.deleteOneStationById)

Router.get("/", stationController.getAllStations)

module.exports = Router;