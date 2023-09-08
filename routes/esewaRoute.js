const express = require("express");
const esewaRouter = express.Router();
const {
  getEsewa,
  postEsewa,
  getEsewaById,
} = require("../controller/esewaController");

esewaRouter.get("/", getEsewa);
esewaRouter.get("/:id", getEsewaById);
esewaRouter.post("/", postEsewa);
module.exports = esewaRouter;
