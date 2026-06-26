const express = require("express");
const router = express.Router();
const {
  CreateTodo,
  GetAllTodo,
  UpdateTodo,
  DeleteTodo,
} = require("../controller/Todo.controller");

router.post("/createtodo", CreateTodo);

router.get("/alltodos", GetAllTodo);

router.delete("/alltodos/:id", DeleteTodo);

router.patch("/Edittodo/:id", UpdateTodo);

module.exports = router;
