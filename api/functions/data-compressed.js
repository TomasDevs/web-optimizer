const fetch = require("node-fetch");
const zlib = require("zlib");
const util = require("util");
const gzip = util.promisify(zlib.gzip);

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
    "Content-Encoding": "gzip",
  };

  try {
    const limit = parseInt(event.queryStringParameters?.limit, 10) || 1000;
    console.log("Processing compressed request with limit:", limit);

    const data = await getData(limit);
    const jsonString = JSON.stringify({
      timestamp: new Date().toISOString(),
      data,
      count: data.length,
      compressed: true,
    });

    console.log("Data size before compression:", jsonString.length);
    const compressed = await gzip(jsonString);
    console.log("Data size after compression:", compressed.length);

    return {
      statusCode: 200,
      headers,
      body: compressed.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error("Compressed handler error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "Internal server error",
        message: error.message,
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      }),
    };
  }
};
