const express = require("express");
const { getUsers, createUser, removeUser } = require("../controller/Users");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/").post(createUser);
router.route("/:id").delete(removeUser);

module.exports = router;