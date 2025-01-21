const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

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

module.exports = app;
