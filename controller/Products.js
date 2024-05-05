const pcpartsbdProducts = require("../models/Products");
const asyncHandler = require("../middleware/async");
const errorResponse = require("../utils/errorResponse");

exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await pcpartsbdProducts.find();
  res
    .status(200)
    .json({ success: true, data: products, count: products.length });
});

exports.createProduct = asyncHandler(async (req, res, next) => {
  const product = req.body;
  const add = await pcpartsbdProducts.create(product);
  res.status(201).json({ success: true, data: add });
});
