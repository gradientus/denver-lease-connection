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
    //function to delete a book with a given id
    deleteListing: function (id) {
        return axios.delete("/api/listings/" + id);
    },
    //function to save a book to the database
    saveListing: function (listingData) {
        return axios.post("/api/listings", listingData);
    }
};