const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const renterSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  income: { type: Number, required: true },
  employment: { type: String, required: true },
  info: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Renter = mongoose.model("Renter", renterSchema);

module.exports = Renter;

//TODO:  Make sure all fields are correct.
