require("dotenv").config();

const port = process.env.PORT || 5000;
const app = require("./src/Application/app");
const connectDB = require("./src/DBConfig/DB");

connectDB();
app.listen(port, () => console.log("server Up!!!"));
