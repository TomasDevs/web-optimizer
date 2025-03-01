const axios = require("axios");
require("dotenv").config();

exports.handler = async (event) => {
  const url = event.queryStringParameters?.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "URL is required" }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  }

  try {
    console.log("🔍 Fetching PageSpeed Insights for:", url);

    const response = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${process.env.VITE_PAGESPEED_API_KEY}`
    );

    console.log("✅ API Response:", response.data);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.error("Error fetching PageSpeed Insights:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch PageSpeed Insights",
        details: error.message,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
