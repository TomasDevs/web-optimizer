// api/functions/data-cached.js
const fs = require("fs");
const path = require("path");

const getData = (limit) => {
  try {
    const dataPath = path.join(__dirname, "../data/data.json");
    const users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    if (!isNaN(limit) && limit > 0) {
      return users.slice(0, limit);
    }
    return users;
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
};

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=60",
  };

  try {
    const limit = parseInt(event.queryStringParameters?.limit, 10) || 1000;
    console.log("Processing cached request with limit:", limit);

    const data = getData(limit);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        data,
        count: data.length,
        cached: true,
      }),
    };
  } catch (error) {
    console.error("Cached handler error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Internal server error",
        message: error.message,
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      }),
    };
  }
};
