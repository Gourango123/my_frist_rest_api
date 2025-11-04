const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Async function to start server
const startServer = async () => {
  try {
    await connectDB();
    console.log(" MongoDB connected successfully");
    app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1); 
  }
};

startServer();
