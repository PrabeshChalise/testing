const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 80;

const dbConnect = require("./database/dbConnect");
const router = require("./routes/productRoutes");
const routerWorker = require("./routes/workerRoutes");
const User = require("./model/userModel");
const mongoose = require("mongoose"); // Import mongoose
dbConnect();
app.use(cors());
app.use(express.json());
app.use("/api/products", router);
app.use("/api/workers", routerWorker);
app.get("/api/users", async (req, res) => {
  try {
    const db = mongoose.connection.db; // Get the MongoDB database instance

    // Retrieve data from the "user" collection directly
    const users = await db.collection("user").find({}).toArray();

    console.log("Fetched users:", users);
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/uploads", express.static("uploads"));
app.listen(port, () => {
  console.log("server is running in port", port);
});
