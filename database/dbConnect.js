const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbConnect;
