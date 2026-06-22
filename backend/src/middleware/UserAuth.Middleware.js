require("dotenv").config();
const jwt = require("jsonwebtoken");

const AuthMiddlware = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(403).json({
        message: "You are unAuthenticated",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

module.exports = AuthMiddlware;
