const express = require("express");
const router = express.Router();
const {
  CreateUser,
  LoginUser,
  LogoutUser,
} = require("../controller/User.controller");

router.post("/signup", CreateUser);

router.post("/login", LoginUser);

router.delete("/todo/createtodo", LogoutUser);

module.exports = router;
