const express = require("express");
const cartRouter = express.Router();
const {
  createCart,
  getAllCarts,
  getCartById,
} = require("../controller/cartController");

// Create a new cart entry
cartRouter.post("/", createCart);

// Get all cart entries
cartRouter.get("/", getAllCarts);

// Get a specific cart entry by ID
cartRouter.get("/:id", getCartById);

module.exports = cartRouter;
