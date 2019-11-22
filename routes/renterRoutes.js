const router = require("express").Router();
const renterController = require("../controllers/renterController");
const db = require("../models/renter");

router
  .route("/")
  .get(renterController.findAll)
  .post(renterController.create);

module.exports = router;
