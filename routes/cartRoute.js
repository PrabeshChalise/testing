const express = require("express");
const cartRouter = express.Router();
const {
  createCart,
  getAllCarts,
  getCartById,
} = require("../controller/cartController");

// Create a new cart entry
router.post("/", createCart);

// Get all cart entries
router.get("/", getAllCarts);

// Get a specific cart entry by ID
router.get("/:id", getCartById);

module.exports = cartRouter;
