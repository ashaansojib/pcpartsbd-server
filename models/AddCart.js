const mongoose = require("mongoose");
const AddCartSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Please add a title first!"],
  },
  model: {
    type: String,
    reuqired: [true, "Please add model name"],
  },
  image: {
    type: String,
    required: [true, "Please add a image link"],
  },
  price: {
    type: Number,
    required: [true, "Price must be added!"],
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price need to added"],
  },
  quantity: {
    type: Number,
    required: [true, "need to add quantity"],
  },
  discount: {
    type: Number,
  },
});
module.exports = mongoose.model("BuyPacked", AddCartSchema);
