const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Middleware
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  res.status(200).json({ message: "api-is-ok" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
