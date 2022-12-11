const express = require("express");
const path = require("path");
const {sequelize} = require("./models");
const rootRouter  = require("./routers")
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const public_path = path.join(__dirname, "public");

app.use(express.static(public_path));

app.use("/api/v1",rootRouter);

app.listen(3000, async ()=>{
    console.log("http://localhost:3000")
    try {
        await sequelize.authenticate();
        console.log("Connect OK");
    } catch (error) {
        console.log("Connect EROR");
    }
})