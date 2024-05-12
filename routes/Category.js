const express = require("express");
const {
  getFeaturesCategory,
  createCategory,
  removeCategory,
} = require("../controller/Category");
const router = express.Router();

router.route("/").get(getFeaturesCategory);
router.route("/").post(createCategory);
router.route("/:id").delete(removeCategory);
module.exports = router;
