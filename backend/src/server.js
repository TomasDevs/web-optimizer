const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
console.log("API Key:", process.env.PAGESPEED_API_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Testovací API endpoint
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Endpoint pro volání PageSpeed Insights API
app.get("/api/pagespeed", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${process.env.PAGESPEED_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching PageSpeed Insights:", error);
    res.status(500).json({ error: "Failed to fetch PageSpeed Insights" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
