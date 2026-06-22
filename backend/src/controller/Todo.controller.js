const TodoModel = require("../models/Todo.model");

const CreateTodo = async (req, res) => {
  try {
    const userid = req.user._id;

    const { title, task, completed } = req.body;
    if (!title || !task) {
      return res.status(400).json({
        message: "title and task is required",
      });
    }
    const todo = await TodoModel.create({ title, task, completed, userid });

    res.status(201).json({
      Todo: todo,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

module.exports = { CreateTodo };
