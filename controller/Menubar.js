const pcpartsbdMenu = require("../models/Menubar");
const asyncHandler = require("../middleware/async");

// @title: get menus, route: /api/menuitems, access: public
exports.getMenus = asyncHandler(async (req, res, next) => {
  const data = await pcpartsbdMenu.find();

  res.status(200).json({ success: true, count: data.length, data: data });
});
// @title: create menus, route: /api/menuitems, access: privat
exports.createMenus = asyncHandler(async (req, res, next) => {
  const add = await pcpartsbdMenu.create(req.body);

  res.status(200).json({ success: true, count: add.length, data: add });
});
exports.removeMenuItem = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const remove = await pcpartsbdMenu.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: remove });
})