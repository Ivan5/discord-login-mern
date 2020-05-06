require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/dashboard", (req, res) => {
  res.json({
    msg: "Good",
    status: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Now listening to request on port http://localhost:${PORT}`);
});
