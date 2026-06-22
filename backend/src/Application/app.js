const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const UserRouter = require("../routes/User.routes");

//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/", UserRouter);
module.exports = app;
