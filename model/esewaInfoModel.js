const mongoose = require("mongoose");
const esewaSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: [true, "please enter your location"],
  },
  location: {
    type: String,
    required: [true, "please enter your location"],
  },
  contact: {
    type: Number,
    required: [true, "please enter your contact"],
  },
  detailedLocation: {
    type: String,
  },
  image: {
    type: String,
    required: [true, "please give image "],
  },
});
module.exports = mongoose.model("Esewa", esewaSchema);
