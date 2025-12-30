import express from "express";

const app = express();

// Middlewares
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
