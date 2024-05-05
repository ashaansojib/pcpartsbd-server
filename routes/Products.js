const express = require("express");
const router = express.Router();
const { getProducts, createProduct } = require("../controller/Products");

router.route("/").get(getProducts);
router.route("/").post(createProduct);
module.exports = router;
