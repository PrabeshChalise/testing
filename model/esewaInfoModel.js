const mongoose = require("mongoose");

const esewaSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  location: {
    type: String,
    required: [true, "Please enter your location"],
  },
  contact: {
    type: String,
    required: [true, "Please enter your contact"],
  },
  image: {
    type: String,
    required: [true, "Please provide an image URL"],
  },
  cartItems: [
    {
      itemName: String,
      quantity: Number,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Esewa", esewaSchema);
