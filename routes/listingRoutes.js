const router = require("express").Router();
const listingController = require("../controllers/listingController");

// Matches with "/api/listings"
router.route("/")
    .get(listingController.findAll)
    .post(listingController.create);

// Matches with "/api/listings/:id"
router
    .route("/:id")
    .get(listingController.findById)
    .get(listingController.findByUserId)
    .put(listingController.update)
//.delete(listingController.remove);

module.exports = router;