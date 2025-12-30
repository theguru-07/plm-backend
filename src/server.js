import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/db.js";

console.log("ENV CHECK:", process.env.MONGODB_URI);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
