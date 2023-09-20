const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the product model (adjust this based on your product model name)
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  // Add any other fields you need
});

module.exports = mongoose.model("Cart", cartSchema);
