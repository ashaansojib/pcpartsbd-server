const mongoose = require("mongoose");
const slugify = require("slugify");

const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Please add a title!"],
  },
  description: {
    type: String,
    required: [true, "Add a description must!"],
  },
  keyFeature: {
    type: Array,
  },
  image: {
    type: String,
    required: [true, "Please add a image link"],
  },
  category: {
    type: String,
    required: [true, "please add a category must"],
  },
  brand: {
    type: String,
    required: [true, "Please Add Brand Name!"],
  },
  status: {
    type: String,
  },
  model: {
    type: String,
  },
  fileName: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Add product price as number"],
  },
  discount: {
    default: 10,
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
ProductsSchema.pre("save", function (next) {
  this.fileName = slugify(this.title, { lower: true });
  next();
});
module.exports = mongoose.model("pcpartsbdProducts", ProductsSchema);
