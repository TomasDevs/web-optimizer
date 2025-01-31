const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const compression = require("compression");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(compression());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Endpoint for PageSpeed Insights API
app.get("/api/pagespeed", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${process.env.VITE_PAGESPEED_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching PageSpeed Insights:", error);
    res.status(500).json({ error: "Failed to fetch PageSpeed Insights" });
  }
});

const getData = (limit) => {
  const dataPath = path.join(__dirname, "../data/data.json");
  let users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  if (!isNaN(limit) && limit > 0) {
    users = users.slice(0, limit);
  }
  return users;
};

// API endpoint for fetching data
app.get("/api/data", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 1000;
  res.json({ timestamp: new Date().toISOString(), data: getData(limit) });
});

// API endpoint for fetching cached data
app.get("/api/data/cache", (req, res) => {
  res.set("Cache-Control", "public, max-age=60");
  const limit = parseInt(req.query.limit, 10) || 1000;
  res.json({ timestamp: new Date().toISOString(), data: getData(limit) });
});

// API endpoint for fetching compressed data
app.get("/api/data/compressed", (req, res) => {
  res.set("Cache-Control", "public, max-age=60");
  res.set("Content-Type", "application/json");
  res.set("Content-Encoding", "gzip");
  const limit = parseInt(req.query.limit, 10) || 1000;
  const jsonData = JSON.stringify({
    timestamp: new Date().toISOString(),
    data: getData(limit),
  });

  // Gzip compression
  const zlib = require("zlib");
  zlib.gzip(jsonData, (err, result) => {
    if (err) {
      console.error("Chyba při kompresi:", err);
      return res.status(500).json({ error: "Kompresní chyba" });
    }
    res.send(result);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
