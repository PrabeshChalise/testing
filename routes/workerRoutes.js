const express = require("express");
const routerWorker = express.Router();
const {
  getWorker,
  getWorkerById,
  postWorker,
  updateWorker,
  deleteWorker,
} = require("../controller/workerController");
routerWorker.get("/", getWorker);
routerWorker.get("/:id", getWorkerById);
routerWorker.post("/", postWorker);
routerWorker.put("/:id", updateWorker);
routerWorker.delete("/:id", deleteWorker);
module.exports = routerWorker;
