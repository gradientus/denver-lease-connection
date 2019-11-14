import axios from "axios";
const keys = require("../../../config/keys");
const ip = process.env.IP || "192.168.178.1";
var timeStamp = Math.round(new Date().getTime() / 1000);

export default {
  getInmate: function(firstName, lastName, state) {
    //return a promise object
    return axios.get(
      `http://apijson.backgroundcheckapi.com/?App_ID=${keys.APP_ID}&App_Key=${keys.APP_KEY}&Timestamp=${timeStamp}&IP=${ip}&catalogue=BACKGROUND&FirstName=${firstName}&LastName=${lastName}&MiddleName=&State=${state}&BirthYear=&CrimeType=&ExactMatch=Yes`
    );
  }
};

//TODO: pull the values from the application into this query string
//TODO: The only items I need from the API are Name, DateOfBirth, State, Gender, Type, BCType
//TODO: Specifically Type and BCType
