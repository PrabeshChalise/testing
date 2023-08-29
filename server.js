const express = require("express");
const app = express();
const port = process.env.PORT || 80;
app.get("/", (req, res) => {
  res.send("Hello its working xd");
});
app.listen(80);
