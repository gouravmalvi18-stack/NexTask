require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

//Router
const UserRouter = require("../routes/User.routes");
const TodoRouter = require("../routes/Todo.routes");

//middlware
const AuthMiddlware = require("../middleware/UserAuth.Middleware");

//cors middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://nextask-t3ea.onrender.com" // your actual deployed domain
        : process.env.CLIENT_PORT,
    credentials: true,
  }),
);
//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/", UserRouter);
app.use("/todo", AuthMiddlware, TodoRouter);

// Serve React build
app.use(express.static(path.join(__dirname, "../../../Frontend/dist")));

// React Router fallback (must be last, after all API routes)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../Frontend/dist", "index.html"));
});
module.exports = app;
