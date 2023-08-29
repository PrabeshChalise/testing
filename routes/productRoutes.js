const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// Define routes
router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);
router.post("/", productController.postProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
