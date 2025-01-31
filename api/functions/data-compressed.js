// api/functions/data-compressed.js
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const util = require("util");
const gzip = util.promisify(zlib.gzip);

const getData = (limit) => {
  const dataPath = path.join(__dirname, "../../data/data.json");
  let users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  if (!isNaN(limit) && limit > 0) {
    users = users.slice(0, limit);
  }
  return users;
};

exports.handler = async (event) => {
  const limit = parseInt(event.queryStringParameters?.limit, 10) || 1000;

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=60",
    "Content-Encoding": "gzip",
  };

  try {
    const data = getData(limit);
    const jsonString = JSON.stringify({
      timestamp: new Date().toISOString(),
      data,
    });

    const compressed = await gzip(jsonString);

    return {
      statusCode: 200,
      headers,
      body: compressed.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
