import axios from "axios";

export default {
    //function to pull all the listings from the database
    getListings: function () {
        return axios.get("/api/listings");
    },
    //function to get listings by given id
    getListing: function (id) {
        console.log('getListing route hit');
        return axios.get("/api/listings/" + id);
    },
    //TODO:function to get listings associated by user id
    getListingByUser: function (id) {
        return axios.get("/api/listingsByUser/" + id);
    },
    //function to delete a listing with a given id
    deleteListing: function (id) {
        return axios.delete("/api/listings/" + id);
    },
    //function to create a new listing to the database
    saveListing: function (listingData) {
        //console.log("hitting the saveListing fiunction")
        return axios.post("/api/listings", listingData);
    },
    //function to update a listing
    updateListing: function (listingData) {
        console.log('update listing route')
        return axios.put("/api/listings/" + listingData.id, listingData)
    }

};