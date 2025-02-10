const fetch = require("node-fetch");

const getData = async (limit) => {
  try {
    const response = await fetch(
      "https://web-optimizer.netlify.app/data/data.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return limit ? data.slice(0, limit) : data;
  } catch (error) {
    console.error("Error fetching data:", error);
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

    const data = await getData(limit);

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
