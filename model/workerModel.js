const mongoose = require("mongoose");
const workerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
  },
  role: {
    type: String,
    required: [true, "Please enter the role"],
  },
  salary: {
    type: Number,
    required: [true, "Please enter the salary"],
  },
  workingHour: {
    type: String,
    required: [true, "Please enter working hour"],
  },
  salaryPayable: {
    type: String,
    required: [true, "Please enter salary payable"],
  },
  status: {
    type: String,
    required: [true, "Please enter status"],
  },
});
module.exports = mongoose.model("Worker", workerSchema);
