require("dotenv").config();
const path = require("path");
const express = require("express");

const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy when behind reverse proxy (e.g. Nginx, Heroku)
app.set("trust proxy", 1);

// Static files from public directory
app.use(express.static(path.join(__dirname, "..", "public")));

// Mount routes
app.use("/", mainRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
