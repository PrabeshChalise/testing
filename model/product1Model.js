const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  image: {
    type: String,
    required: [true, "please provide image"],
  },
  name: {
    type: String,
    required: [true, "please provide name"],
  },
  category: {
    type: String,
    required: [true, "please provide category"],
  },
  quantity: {
    type: String,
    required: [true, "please provide quantity"],
  },
  pricePerPiece: {
    type: Number,
    required: [true, "please provide price per piece"],
  },
  totalPrice: {
    type: Number,
    required: [true, "please provide totalPrice"],
  },
});

module.exports = mongoose.model("Product1", productSchema);
