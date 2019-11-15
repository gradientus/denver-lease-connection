import axios from "axios";
const keys = require("../config/keys");

export default {
  getInmate: function() {
    //return a promise object
    return axios.get(
      `http://apijson.backgroundcheckapi.com/?App_ID=${keys.APP_ID}&App_Key=${keys.APP_KEY}&Timestamp=${timeStamp}&IP=${ip}&catalogue=BACKGROUND&FirstName=${firstName}&LastName=${lastName}&MiddleName=&State=${state}&BirthYear=&CrimeType=&ExactMatch=Yes`
    );
  }
};

//TODO: pull the values from the application into this query string
