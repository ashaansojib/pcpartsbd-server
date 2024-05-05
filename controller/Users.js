const UserSchema = require("../models/Users");
const asyncHandler = require("../middleware/async");
// @title: get all users, route: /api/users
exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await UserSchema.find();
    res.status(200).json({ success: true, data: users });
});
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = req.body;
    const created = await UserSchema.create(user);
    res.status(201).json({ success: true, data: created })
});
exports.removeUser = asyncHandler(async (req, res, next) => {
    const remove = await UserSchema.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true, data: remove })
});