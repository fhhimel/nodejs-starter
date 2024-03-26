// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://fhhimel:fhhimel123@cluster0.uvlhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
