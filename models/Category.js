const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please add a name"],
  },
  image: {
    type: String,
    required: [true, "Please add a image link"],
  },
});
