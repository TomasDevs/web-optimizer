const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Testovací API endpoint
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Spuštění serveru
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
