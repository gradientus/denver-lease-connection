require("dotenv").config();
//console.log("Process ENV: ", process.env);

//Initialize Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const listings = require("./routes/listingRoutes");
const path = require('path');

//Initialize mongoose
//added mlabs URI to .env
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOLAB_URI || "mongodb://localhost/denverleaseconnection"
);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose."));

//*********Google OAuth requirements********
const cookieSession = require("cookie-session");
const passport = require("passport");
//const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
// mongoose.connect(keys.mongoURI); //This is already accounted for above.

//middleware, using cookies to handle authentication
app.use(
  cookieSession({
    //cookie will last 45 days
    maxAge: 45 * 24 * 60 * 60 * 1000,
    //encrypt the id - the key can be found in the keys.js file
    keys: [process.env.cookieKey]
  })
);

//passport to use cookies to manage auth
app.use(passport.initialize());
app.use(passport.session());

//authentication routes
require("./routes/authRoutes")(app);
//routes for listings
app.use("/api/listings", listings);

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


let protected = ['favicon.ico']

app.get("*", (req, res) => {

  let path = req.params['0'].substring(1)

  if (protected.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/client/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/client/build/index.html`);
  }
});

//Routes

// const routes = require("./routes");
// app.use(routes);
//require("./routes/listingRoutes");

//Listener
const PORT = process.env.PORT || 3210;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


//random comment here