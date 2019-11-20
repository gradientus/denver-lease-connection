import axios from "axios";

export default {



    //function to get current user
    getCurrentUser: function () {
        //console.log("got to here")
        return axios.get("/api/current_user");
    },


    //TODO: for future development for admin use
    // getUser: function () {
    //     return axios.get("/api/users");
    // }

};