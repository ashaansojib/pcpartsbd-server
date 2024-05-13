const pcpartsbdProducts = require("../models/Products");
const asyncHandler = require("../middleware/async");
const errorResponse = require("../utils/errorResponse");

// @title: get all products, route: /api/products, access: public
exports.getProducts = asyncHandler(async (req, res, next) => {
  let query = pcpartsbdProducts.find();

  // filter item by category
  if (req.query.category) {
    query = query.find(req.query);
  }

  // sort by price
  if(req.query.sortByPrice){
    const sortByPrice = req.query.sortByPrice === 'ascending' ? 1 : -1;
    query = query.sort({price: sortByPrice})
  }

  // pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await pcpartsbdProducts.countDocuments();

  query = query.skip(startIndex).limit(limit);
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
