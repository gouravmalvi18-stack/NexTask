const express = require("express");
const router = express.Router();
const { CreateTodo } = require("../controller/Todo.controller");

// router.get("/", (req, res) => {
//   console.log(req.user);

//   res.send("In todo route");
// });

router.post("/", CreateTodo);

module.exports = router;
