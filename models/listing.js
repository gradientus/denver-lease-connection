const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    propertyName: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


//img: {data: Buffer, contentType: String}