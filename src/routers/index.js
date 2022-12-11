const Router = require("express").Router();
const stationRouter =  require("./station")
const userRouter =  require("./user")

Router.use("/stations", stationRouter);
Router.use("/user", userRouter);

module.exports = Router;