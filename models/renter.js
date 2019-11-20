const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const renterSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true, min: 00501, max: 99950 },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  income: { type: Number, required: true },
  employment: { type: String, required: true },
  info: { type: String, required: true },
  date: { type: Date, default: Date.now },
  dob: { type: String, required: false },
  currentStatus: { type: String, required: false },
  bookingDate: { type: String, required: flase },
  releaseDate: { type: String, required: false },
  bcType: { type: String, required: false }
});

const Renter = mongoose.model("Renter", renterSchema);

module.exports = Renter;
