const express = require("express");
const {
  getBuyItems,
  createBuyItem,
  removeBuyItem,
} = require("../controller/AddCart");
const router = express.Router();

router.route("/").get(getBuyItems);
router.route("/").post(createBuyItem);
router.route("/:id").delete(removeBuyItem);
module.exports = router;
