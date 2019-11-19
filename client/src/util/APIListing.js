import axios from "axios";

export default {
    //function to pull all the listings from the database
    getListings: function () {
        return axios.get("/api/listings");
    },
    //gunction to get listings by given id
    getListing: function (id) {
        return axios.get("/api/listings/" + id);
    },
    //function to delete a listing with a given id
    deleteListing: function (id) {
        return axios.delete("/api/listings/" + id);
    },
    //function to save a listing to the database
    saveListing: function (listingData) {
        console.log("hitting the saveListing fiunction")
        return axios.post("/api/listings", listingData);

    },

    //TODO: move these to their own APIUser file
    //function to get current user
    getCurrentUser: function () {
        //console.log("got to here")
        return axios.get("/api/current_user");
    },
    getUser: function () {
        return axios.get("/api/user");
    }

};