const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Must have a title"],
  },
  link: {
    type: String,
  },
});
module.exports = mongoose.model("pcpartsbdMenu", MenuSchema);
