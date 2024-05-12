const asyncHandler = require("../middleware/async");
const featuredCategory = require("../models/Category");
// @title: get all category, api: /api/features, access: public
exports.getFeaturesCategory = asyncHandler(async (req, res, next) => {
  const query = await featuredCategory.find();
  res.status(200).json({ success: true, data: query });
});
// @title: create category, api: /api/features, access: privet
exports.createCategory = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const result = await featuredCategory.create(data);
  res.status(200).json({ success: true, data: result });
});
// @title: remove category, api: /api/features/:id, access: privet
exports.removeCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const result = await featuredCategory.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: result });
});
