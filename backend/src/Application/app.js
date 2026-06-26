require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Router
const UserRouter = require("../routes/User.routes");
const TodoRouter = require("../routes/Todo.routes");

//middlware
const AuthMiddlware = require("../middleware/UserAuth.Middleware");

//cors middleware
app.use(cors({ origin: process.env.CLIENT_PORT, credentials: true }));
//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/", UserRouter);
app.use("/todo", AuthMiddlware, TodoRouter);
module.exports = app;
