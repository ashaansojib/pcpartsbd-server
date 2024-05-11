const asyncHandler = require("../middleware/async");
const BuyPacked = require("../models/AddCart");
// @title: get all bought item, api: /api/buy-items, access: public
exports.getBuyItems = asyncHandler(async (req, res, next) => {
  const items = await BuyPacked.find();
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.totalPrice;
  });
  res.status(200).json({
    success: true,
    totalPrice: totalPrice,
    count: items.length,
    data: items,
  });
});

// @title: create cart item, api: /api/buy-items, access: privet
exports.createBuyItem = asyncHandler(async (req, res, next) => {
  const item = req.body;
  const result = await BuyPacked.create(item);
  console.log(item);
  res.status(201).json({ success: true, data: result });
});

// @title: update quantity and price, api: /api/buy-items/:id, access: public
exports.updateQuantity = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { quantity } = req.body;
  const product = await BuyPacked.findById(id);
  product.quantity = quantity;
  product.totalPrice = product.price * quantity;
  await product.save();
  res.status(200).json({ success: true, data: product });
});

// @title: remove buy item, api: /api/buy-items, access: privet
exports.removeBuyItem = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const removeItem = await BuyPacked.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: removeItem });
});

// @title: order confirm and remove item from carts, route: /api/buy-items
exports.orderConfirm = asyncHandler(async (req, res, next) => {
  const remove = await BuyPacked.deleteMany({});
  res
    .status(200)
    .json({
      success: true,
      message: "Remove all item and bought successfully!",
      data: remove,
    });
});
