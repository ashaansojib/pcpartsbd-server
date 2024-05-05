const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Please add a title!"],
  },
  description: {
    type: String,
    required: [true, "Add a description must!"],
  },
  category: {
    type: String,
    required: [true, "please add a category must"],
  },
  brand: {
    type: String,
    required: [true, "Please Add Brand Name!"],
  },
  fileName: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Add product price as number"],
  },
  discount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
productSchema.pre("save", function (next) {
  this.fileName = slugify(this.title, { lower: true });
  next();
});
module.exports = mongoose.model("allProducts", productSchema);
