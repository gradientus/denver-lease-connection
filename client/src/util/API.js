import axios from "axios";
import info from "../pages/RenterApplication"; //QUESTION: Do I need this?
require("dotenv").config();

export default {
  //this is to make the call to the background check API
  getInmate: function(APP_ID, APP_KEY, timeStamp, ip, firstName, lastName) {
    return axios.get(
      `http://apijson.backgroundcheckapi.com/?App_ID=${process.env.APP_ID}&App_Key=${process.env.APP_KEY}&Timestamp=${info.timeStamp}&IP=${info.ip}&catalogue=BACKGROUND&FirstName=${info.firstName}&LastName=${info.lastName}&MiddleName=&State=${info.state}&BirthYear=&CrimeType=&ExactMatch=Yes`
    );
  },

  //this is to get the applications saved to the renters collections
  getApplications: function() {
    return axios.get("/api/renter");
  },

  //this is to post the applications save to the renter collections
  postApplications: function(applicationData) {
    const paoo = axios.post("/api/renter", applicationData);
    console.log(paoo);
    //return axios.post("/api/renter", applicationData);
    return paoo;
  }
};
