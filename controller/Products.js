const allProducts = require("../models/Products");
// title: Fetch all products, route: api/products/, access: public
exports.getProducts = async (req, res, next) => {
  const products = await allProducts.find();
  res
    .status(200)
    .json({ success: true, data: products, count: products.length });
};
