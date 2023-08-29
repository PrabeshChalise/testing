const Worker = require("../model/workerModel");
const asyncHandler = require("express-async-handler");

//get all worker
const getWorker = asyncHandler(async (req, res) => {
  const worker = await Worker.find({});
  res.send(worker).status(200);
});

//get worker by id
const getWorkerById = asyncHandler(async (req, res) => {
  const worker = await Worker.findById(req.params.id);
  if (!worker) {
    res.status(404);
    throw new Error("Worker not found");
  }
  res.send(worker).status(200);
});

//post worker
const postWorker = asyncHandler(async (req, res) => {
  const { name, role, salary, workingHour, salaryPayable, status } = req.body;
  if (!name || !role || !salary || !workingHour || !salaryPayable || !status) {
    res.status(404);
    throw new Error("Please enter all data properly");
  }
  const worker = await Worker.create({
    name,
    role,
    salary,
    workingHour,
    salaryPayable,
    status,
  });
  res.send(worker).status(200);
});

//Update worker
const updateWorker = asyncHandler(async (req, res) => {
  const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!worker) {
    res.status(404);
    throw new Error("Worker not found");
  }
  res.status(200).send(worker);
});

//delete worker
const deleteWorker = asyncHandler(async (req, res) => {
  const worker = await Worker.findByIdAndDelete(req.params.id);
  if (!worker) {
    res.status(404);
    throw new Error("Worker not found");
  }
  res.status(200).send(worker);
});

module.exports = {
  getWorker,
  getWorkerById,
  postWorker,
  updateWorker,
  deleteWorker,
};
