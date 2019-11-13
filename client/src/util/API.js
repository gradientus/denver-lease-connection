import axios from "axios";
//TODO: Make APP_ID
//TODO: Make API_KEY
//TODO: Get IP Address from process.env
//FIXME: Add birthYear to form and mongo schema
var timeStamp = Math.round(new Date().getTime() / 1000);

export default {
  getWeather: function(firstName, lastName, state, birthYear) {
    //return a promise object
    return axios.get(
      `http://apijson.backgroundcheckapi.com/?App_ID=${APP_ID}&App_Key=${APP_KEY}&Timestamp=${timeStamp}&IP=130.253.28.1&catalogue=BACKGROUND&FirstName=${firstName}&LastName=${lastName}&MiddleName=&State=${state}&BirthYear=${birthYear}&CrimeType=&ExactMatch=Yes`
    );
  }
};
