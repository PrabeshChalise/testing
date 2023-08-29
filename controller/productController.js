const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// get all products
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// get product by id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});

// post products
const postProduct = asyncHandler(async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      res.status(400);
      throw new Error("Image upload failed");
    }

    const { filename } = req.file; // Get the uploaded image filename
    const { name, category, quantity, pricePerPieceCP } = req.body;

    // Calculate totalPriceCP and totalPriceSP
    const totalPriceCP = parseFloat(quantity) * parseFloat(pricePerPieceCP);
    const pricePerPieceSP = parseFloat(pricePerPieceCP) * 1.05;
    const totalPriceSP = pricePerPieceSP * parseFloat(quantity);

    const product = await Product.create({
      image: filename, // Store the image filename in the database
      name,
      category,
      quantity,
      pricePerPieceCP,
      pricePerPieceSP,
      totalPriceCP,
      totalPriceSP,
    });

    res.status(201).json(product);
  });
});

// update product
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});

// delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});

module.exports = {
  getProduct,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
