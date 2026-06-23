const express = require("express");
const router = express.Router();
const {
  CreateTodo,
  GetAllTodo,
  UpdateTodo,
  DeleteTodo,
} = require("../controller/Todo.controller");

router.post("/", CreateTodo);

router.get("/alltodos", GetAllTodo);

router.patch("/Edittodo/:id", UpdateTodo);

router.delete("/Edittodo/:id", DeleteTodo);

module.exports = router;
