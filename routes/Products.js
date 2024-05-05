const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  removeProduct,
  singleProduct,
} = require("../controller/Products");

router.route("/").get(getProducts);
router.route("/").post(createProduct);
router.route("/:id").delete(removeProduct);
router.route("/:id").get(singleProduct);
module.exports = router;
