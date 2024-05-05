const express = require("express");
const { getMenus, createMenus, removeMenuItem } = require("../controller/Menubar");
const router = express.Router();

router.route("/").get(getMenus);
router.route("/").post(createMenus);
router.route("/:id").delete(removeMenuItem);
module.exports = router;
