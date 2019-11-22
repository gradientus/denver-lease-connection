const router = require("express").Router();
const renterController = require("../controllers/renterController");
const db = require("../models/Renter");

router
  .route("/api/renter")
  .get(renterController.findAll)
  .post(renterController.create);

module.exports = router;
