const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Please add a name"],
  },
  image: {
    type: String,
    required: [true, "Please add a image link"],
  },
  link: {
    type: String,
    required: [true, "Please add a link"],
  },
});
module.exports = mongoose.model("featuredCategory", CategorySchema);
