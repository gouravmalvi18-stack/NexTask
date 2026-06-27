const { Schema, model, default: mongoose } = require("mongoose");

const TodoScheme = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
    },
    estimatedtime: {
      type: Number,
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true },
);

const todeModel = model("todos", TodoScheme);

module.exports = todeModel;
