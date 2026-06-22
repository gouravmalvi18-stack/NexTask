require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STR);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DBErr", error);
  }
};

module.exports = connectDB;
