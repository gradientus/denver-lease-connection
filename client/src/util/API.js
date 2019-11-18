import axios from "axios";
import info from "../pages/RenterApplication";
require("dotenv").config();

export default {
  getInmate: function() {
    //return a promise object
    return axios.get(
      `http://apijson.backgroundcheckapi.com/?App_ID=${process.env.APP_ID}&App_Key=${process.env.APP_KEY}&Timestamp=${info.timeStamp}&IP=${info.ip}&catalogue=BACKGROUND&FirstName=${info.firstName}&LastName=${info.lastName}&MiddleName=&State=${info.state}&BirthYear=&CrimeType=&ExactMatch=Yes`
    );
  }
};
