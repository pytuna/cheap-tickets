const Router = require("express").Router();
const stationRouter =  require("./station")
const userRouter =  require("./user")
const tripRouter =  require("./trip")
Router.use("/stations", stationRouter);
Router.use("/user", userRouter);
Router.use("/trips", tripRouter);
module.exports = Router;