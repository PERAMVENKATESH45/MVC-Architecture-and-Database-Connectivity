// app.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
   
  })
  .then(() => {
    console.log("MongoDB connected");

    // Start the server ONLY after DB is connected
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
