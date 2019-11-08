//Check if we are in production environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Initialize Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
// const routes = require("./routes");
// app.use(routes);

//Initialize Mongo
const mongoose = require("mongoose");
mongoose.connect(
  process.env.DATABASE_URL || "mongodb://localhost/denverleaseconnection"
);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose."));

//Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
