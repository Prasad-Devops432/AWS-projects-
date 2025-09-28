require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3010;
const APP_NAME = process.env.APP_NAME || "Default App";

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Optional: explicitly serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ ${APP_NAME} is running at http://localhost:${PORT}`);
});
