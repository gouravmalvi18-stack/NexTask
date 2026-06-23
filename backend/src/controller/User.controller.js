require("dotenv").config();

const UserModel = require("../models/User.model");

const jwt = require("jsonwebtoken");
const bycrpt = require("bcrypt");

const CreateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Invalid  credentials",
      });
    }

    const ExistUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (ExistUser) {
      return res.status(409).json({
        message: "Your are Already register with this username or email",
      });
    }

    const HashPassword = await bycrpt.hash(password, 10);

    const NewUser = await UserModel.create({
      username,
      email,
      password: HashPassword,
    });

    const token = jwt.sign(
      {
        _id: NewUser._id,
      },
      process.env.JWT_SECRET_KEY,
    );

    res.cookie("token", token);
    res.status(201).json({
      NewUser: NewUser,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
const LoginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const User = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (!User) {
      return res.status(404).json({
        message: "Your are not a resgister user",
      });
    }
    const CheckPassword = await bycrpt.compare(password, User.password);

    if (!CheckPassword) {
      return res.status(404).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        _id: User._id,
      },
      process.env.JWT_SECRET_KEY,
    );

    res.cookie("token", token);
    res.status(200).json({
      LoginUser: User,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

module.exports = {
  CreateUser,
  LoginUser,
};
