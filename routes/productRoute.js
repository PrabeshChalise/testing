const express = require("express");
const router = express.Router();
const Product = require("../model/product1Model"); // Assuming you have a Product model defined

// Route to add a product
router.post("/api/add-product", async (req, res) => {
  try {
    const { image, name, category, quantity, pricePerPiece } = req.body;

    // Create a new product object
    const newProduct = new Product({
      image,
      name,
      category,
      quantity,
      pricePerPiece,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

module.exports = router;
