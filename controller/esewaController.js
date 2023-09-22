const cloudinary = require("cloudinary").v2;
const asyncHandler = require("express-async-handler");
const Esewa = require("../model/esewaInfoModel");
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

const getEsewa = asyncHandler(async (req, res) => {
  const esewa = await Esewa.find({});
  res.send(esewa).status(200);
});

const getEsewaById = asyncHandler(async (req, res) => {
  const esewa = await Esewa.findById(req.params.id);
  if (!esewa) {
    res.status(404);
    throw new Error("Esewa details not found");
  }
  res.status(200).json(esewa);
});

const postEsewa = asyncHandler(async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "Image upload failed" });
    }
    const { name, email, location, contact, cartItems, formData } = req.body;

    // You can add other Esewa form fields here

    const image = await cloudinary.uploader.upload(req.file.path);

    const esewa = await Esewa.create({
      name,
      email,
      location,
      contact,
      image: image.secure_url,
      cartItems: JSON.parse(cartItems),
      cartDetails: formData.cartDetails,
      // Add other Esewa form fields here
    });

    res.status(201).json(esewa);
  });
});

module.exports = { getEsewa, getEsewaById, postEsewa };
