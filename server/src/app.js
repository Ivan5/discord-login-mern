require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const authRoute = require("./routes/auth");

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Now listening to request on port http://localhost:${PORT}`);
});
