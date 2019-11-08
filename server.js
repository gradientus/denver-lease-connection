//Check if we are in production environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Initialize Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Initialize Mongoose
const mongoose = require("mongoose");
mongoose.connect(
  process.env.DATABASE_URL || "mongodb://localhost/denverleaseconnection"
);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose."));

//Routers

//Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
