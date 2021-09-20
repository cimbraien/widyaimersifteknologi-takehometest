// Module imports
require("dotenv").config();
const express = require("express");
const app = express();

// Middlewares initialization
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database authentication
const { db } = require("./models/index");
try {
  db.authenticate().then(() =>
    console.log("Connection to mysql database established.")
  );
} catch (error) {
  console.log(error);
}

// Route initialization
const produkRoute = require("./routes/produk");
app.use("/produk", produkRoute);

// Error handler
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ ErrorMessage: err.messages || err.message });
});

// Start server on specified port
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server started at ${new Date().toUTCString()}`)
);
