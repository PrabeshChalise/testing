const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String, // or ObjectId if you prefer
  email: String,
  firstName: String,
  lastName: String,
  profilePhoto: String,
  source: String,
  lastVisited: Date,
});

module.exports = mongoose.model("User", userSchema);
