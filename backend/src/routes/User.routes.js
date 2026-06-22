const express = require("express");
const router = express.Router();
const { CreateUser, LoginUser } = require("../controller/User.controller");

router.post("/signup", CreateUser);

router.post("/login", LoginUser);

module.exports = router;
