const express = require("express");
const {
  getBuyItems,
  createBuyItem,
  removeBuyItem,
  updateQuantity,
  orderConfirm,
} = require("../controller/AddCart");
const router = express.Router();

router.route("/").get(getBuyItems);
router.route("/").post(createBuyItem);
router.route("/:id").put(updateQuantity);
router.route("/:id").delete(removeBuyItem);
router.route("/").delete(orderConfirm);
module.exports = router;
