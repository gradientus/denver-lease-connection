import axios from "axios";
<<<<<<< Updated upstream
const keys = require("../../../config/keys");
const ip = process.env.IP || "192.168.178.1";
var timeStamp = Math.round(new Date().getTime() / 1000);

export default {
  getInmate: function(firstName, lastName, state, birthYear) {
    //return a promise object
    return axios.get(
      `http://apijson.backgroundcheckapi.com/?App_ID=${keys.APP_ID}&App_Key=${keys.APP_KEY}&Timestamp=${timeStamp}&IP=${ip}&catalogue=BACKGROUND&FirstName=${firstName}&LastName=${lastName}&MiddleName=&State=${state}&BirthYear=${birthYear}&CrimeType=&ExactMatch=Yes`
    );
  }
};

//TODO: pull the values from the application into this query string
=======
//import { access } from "fs";
//TODO: Make APP_ID
//TODO: Make API_KEY
//TODO: Get IP Address from process.env
//FIXME: Add birthYear to form and mongo schema
//var timeStamp = Math.round(new Date().getTime() / 1000);


//TODO: test routes and if work bring Phil's code back and add mine to it
// export default {
//   getWeather: function(firstName, lastName, state, birthYear) {
//     //return a promise object
//     return axios.get(
//       `http://apijson.backgroundcheckapi.com/?App_ID=${APP_ID}&App_Key=${APP_KEY}&Timestamp=${timeStamp}&IP=130.253.28.1&catalogue=BACKGROUND&FirstName=${firstName}&LastName=${lastName}&MiddleName=&State=${state}&BirthYear=${birthYear}&CrimeType=&ExactMatch=Yes`
//     );
//   }
// };


export default {
  //function to pull all the listings from the database
  getListings: function () {
    return axios.get("/api/listings");
  },
  //gunction to get listings by given id
  getlisting: function (id) {
    return axios.get("/api/listings/" + id);
  },
  //function to delete a book with a given id
  deleteListing: function (id) {
    return axios.delete("/api/listings/" + id);
  },
  //function to save a book to the database
  saveListing: function (listingData) {
    return axios.post("/api/listings", listingData);
  }
};
>>>>>>> Stashed changes
