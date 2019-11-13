const router = require("express").Router();
const renterController = require("../controllers/renterController");

router
  .route("/api/renter")
  .get(renterController.findAll)
  .post(renterController.create);

router
  .route("/api/renter/:id")
  .get(renterController.findById)
  .put(renterController.update)
  .delete(renterController.remove);

module.exports = router;
