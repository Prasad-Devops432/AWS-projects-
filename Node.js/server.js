require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3010;
const APP_NAME = process.env.APP_NAME || "Default App";

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`✅ ${APP_NAME} is running at http://localhost:${PORT}`);
})
