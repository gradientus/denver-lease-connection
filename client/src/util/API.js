import axios from "axios";

export default {
  getInmate: function(
    appId,
    appKey,
    timeStamp,
    ip,
    firstName,
    lastName,
    state
  ) {
    //return a promise object
    return axios.get(
      `http://apijson.backgroundcheckapi.com/?App_ID=${APP_ID}&App_Key=${APP_KEY}&Timestamp=${timeStamp}&IP=${ip}&catalogue=BACKGROUND&FirstName=${firstName}&LastName=${lastName}&MiddleName=&State=${state}&BirthYear=&CrimeType=&ExactMatch=Yes`
    );
  }
};

//TODO: pull the values from the application into this query string
