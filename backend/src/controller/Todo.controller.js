const TodoModel = require("../models/Todo.model");

//  ------ CreateTodo ------

const CreateTodo = async (req, res) => {
  try {
    const userid = req.user._id;

    const { title, task, status } = req.body;
    if (!title || !task) {
      return res.status(400).json({
        message: "title and task is required",
      });
    }
    const todo = await TodoModel.create({ title, task, status, userid });

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

// ------ GetAlltodos ------

const GetAllTodo = async (req, res) => {
  try {
    const userid = req.user._id;

    const AllTodos = await TodoModel.find({ userid });

    if (!AllTodos) {
      return res.status(404).json({
        message: "No todo Created",
      });
    }
    res.status(200).json({
      AllTodos: AllTodos,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

//   ----- Update A todo ------

const UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, task, status } = req.body;

    const UpdateTodo = await TodoModel.findByIdAndUpdate(id, {
      title,
      task,
      status,
    });

    if (!UpdateTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    const UpdatedTodo = await TodoModel.findById(id);

    res.status(200).json({
      UpdatedTodo: UpdatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

// ------ Delete a Todo ------

const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const DeletedTodo = await TodoModel.findByIdAndDelete(id);
    if (!DeletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      DeletedTodo: DeletedTodo,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
module.exports = { CreateTodo, GetAllTodo, UpdateTodo, DeleteTodo };
