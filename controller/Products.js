const pcpartsbdProducts = require("../models/Products");
const asyncHandler = require("../middleware/async");
const errorResponse = require("../utils/errorResponse");

// @title: get all products, route: /api/products, access: public
exports.getProducts = asyncHandler(async (req, res, next) => {
  let reqQuery = req.query;
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  if (reqQuery.category) {
    const queryData = await pcpartsbdProducts.find(JSON.parse(queryStr));
    return res
      .status(200)
      .json({ success: true, count: queryData.length, data: queryData });
  }
  if (reqQuery.search) {
    const searchData = await pcpartsbdProducts.find({
      name: { $regex: JSON.stringify(reqQuery), $options: "i" },
    });
    return res
      .status(200)
      .json({ success: true, count: searchData.length, data: searchData });
  }
  // pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await pcpartsbdProducts.countDocuments();

  const query = await pcpartsbdProducts.find().skip(startIndex).limit(limit);
  // pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }
  const products = await query;
  res.status(200).json({
    success: true,
    count: total,
    pagination,
    data: products,
  });
});

// @title: create products, route: /api/products, access: privet
exports.createProduct = asyncHandler(async (req, res, next) => {
  const product = req.body;
  const add = await pcpartsbdProducts.create(product);

  res.status(201).json({ success: true, data: add });
});

// @title: remove single product, route: /api/products/:id, access: delete
exports.singleProduct = asyncHandler(async (req, res, next) => {
  const name = req.params.id;
  const product = await pcpartsbdProducts.find({ fileName: name });
  res.status(200).json({ success: true, data: product });
});

// @title: remove single product, route: /api/products/:id, access: delete
exports.removeProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const remove = await pcpartsbdProducts.deleteOne({ _id: id });

  res.status(200).json({ success: true, data: remove });
});
