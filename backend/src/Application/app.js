const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//Router
const UserRouter = require("../routes/User.routes");
const TodoRouter = require("../routes/Todo.routes");

//middlware
const AuthMiddlware = require("../middleware/UserAuth.Middleware");

//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/", UserRouter);
app.use("/todo", AuthMiddlware, TodoRouter);
module.exports = app;
