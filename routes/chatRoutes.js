const router = require("express").Router();
const userController = require("../controllers/userController");

router
  .route("/api/user")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/api/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
