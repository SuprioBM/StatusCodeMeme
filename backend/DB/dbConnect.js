require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Connection Failed!!", err));
