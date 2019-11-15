import axios from "axios";
const keys = require("../../../config/keys");
const ip = process.env.IP || "192.168.178.1";
const timeStamp = Math.round(new Date().getTime() / 1000);
const appId = process.env.APP_ID || keys.APP_ID;
const appKey = process.env.APP_KEY || keys.APP_KEY;

//These are just for testing and will be eliminated
const firstName = "Michael";
const lastName = "Smith";
const state = "Georgia";

export default {
  getInmate: function(
    ip,
    timeStamp,
    APP_ID,
    APP_KEY,
    firstName,
    lastName,
    state
  ) {
    //return a promise object
    // return
    axios
      .get(
        `http://apijson.backgroundcheckapi.com/?App_ID=${appId}&App_Key=${appKey}&Timestamp=${timeStamp}&IP=${ip}&catalogue=BACKGROUND&FirstName=${firstName}&LastName=${lastName}&MiddleName=&State=${state}&BirthYear=&CrimeType=&ExactMatch=Yes`
      )
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        console.log("Everything you do is wrong");
      });
  }
};

//TODO: pull the values from the application into this query string
