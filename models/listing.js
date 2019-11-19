const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    propertyName: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User" }

});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

//Use Clouinary - third party service to save images
//img: {data: Buffer, contentType: String}

