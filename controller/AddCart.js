const asyncHandler = require("../middleware/async");
const BuyPacked = require("../models/AddCart");
// @title: get all bought item, api: /api/buy-items, access: public
exports.getBuyItems = asyncHandler(async (req, res, next) => {
  const items = await BuyPacked.find();
  res.status(200).json({ success: true, count: items.length, data: items });
});

// @title: create cart item, api: /api/buy-items, access: privet
exports.createBuyItem = asyncHandler(async (req, res, next) => {
  const item = req.body;
  const result = await BuyPacked.create(item);
  res.status(201).json({ success: true, data: result });
});

// @title: remove buy item, api: /api/buy-items, access: privet
exports.removeBuyItem = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const removeItem = await BuyPacked.deleteOne(id);
  res.status(200).json({ success: true, data: removeItem });
});
