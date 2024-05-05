const pcpartsbdProducts = require("../models/Products");
const asyncHandler = require("../middleware/async");
const errorResponse = require("../utils/errorResponse");

// @title: get all products, route: /api/products, access: public
exports.getProducts = asyncHandler(async (req, res, next) => {

  if (req.query) {
    const queryData = await pcpartsbdProducts.find(req.query);
    return res
      .status(200)
      .json({ success: true, data: queryData, count: queryData.length });
  }

  const products = await pcpartsbdProducts.find();
  res
    .status(200)
    .json({ success: true, data: products, count: products.length });
});

// @title: create products, route: /api/products, access: privet
exports.createProduct = asyncHandler(async (req, res, next) => {

  const product = req.body;
  const add = await pcpartsbdProducts.create(product);

  res.status(201).json({ success: true, data: add });
});

// @title: remove single product, route: /api/products/:id, access: delete
exports.singleProduct = asyncHandler(async (req, res, next) => {

  const id = req.params.id;
  const product = await pcpartsbdProducts.findOne({ _id: id });

  res.status(200).json({ success: true, data: product });
});

// @title: remove single product, route: /api/products/:id, access: delete
exports.removeProduct = asyncHandler(async (req, res, next) => {

  const id = req.params.id;
  const remove = await pcpartsbdProducts.deleteOne({ _id: id });

  res.status(200).json({ success: true, data: remove });
});