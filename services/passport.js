const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
require("dotenv").config();

const User = mongoose.model("user");
//const User = require('../models/User');

//grabbs the id from the callback function
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//find the user in the database by their id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientId,
      clientSecret: process.env.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },

    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          //create a new user if they do not already exist in our database
          new User({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
          })
            .save()

            .then(user => {
              console.log("new user created: " + user);
              done(null, user);
            });
        }
      });

      //console.log("profile", profile);
    }
  )
);
