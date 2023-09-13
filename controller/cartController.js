const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel");

// Create a new cart entry
const createCart = asyncHandler(async (req, res) => {
  const { items, totalAmount } = req.body;

  const cart = await Cart.create({ items, totalAmount });

  res.status(201).json(cart);
});

// Get all cart entries
const getAllCarts = asyncHandler(async (req, res) => {
  const carts = await Cart.find({});
  res.status(200).json(carts);
});

// Get a specific cart entry by ID
const getCartById = asyncHandler(async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (!cart) {
    res.status(404);
    throw new Error("Cart not found");
  }
  res.status(200).json(cart);
});

module.exports = {
  createCart,
  getAllCarts,
  getCartById,
};
