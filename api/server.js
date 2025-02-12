const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Get data from the external API
async function fetchData() {
  const response = await fetch(
    "https://web-optimizer.netlify.app/data/data.json"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/data", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 1000;
    const data = await fetchData();
    const limitedData = data.slice(0, limit);

    res.json({
      timestamp: new Date().toISOString(),
      data: limitedData,
      count: limitedData.length,
      totalCount: data.length,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

app.get("/data-cached", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 1000;
    const data = await fetchData();
    const limitedData = data.slice(0, limit);

    res.set("Cache-Control", "public, max-age=60");
    res.json({
      timestamp: new Date().toISOString(),
      data: limitedData,
      count: limitedData.length,
      totalCount: data.length,
      cached: true,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

app.get("/data-compressed", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 1000;
    const data = await fetchData();
    const limitedData = data.slice(0, limit);

    res.set("Content-Encoding", "gzip");
    res.set("Cache-Control", "public, max-age=60");
    res.json({
      timestamp: new Date().toISOString(),
      data: limitedData,
      count: limitedData.length,
      totalCount: data.length,
      compressed: true,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
