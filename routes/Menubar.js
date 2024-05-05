const express = require("express");
const { getMenus, createMenus } = require("../controller/Menubar");
const router = express.Router();

router.route("/").get(getMenus);
router.route("/").post(createMenus);
module.exports = router;
