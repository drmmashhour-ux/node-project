require("dotenv").config();
const path = require("path");
const express = require("express");

const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);

app.get("/health", (req, res) => res.json({ ok: true }));
app.get("/version", (req, res) => res.json({ node: process.version }));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/", mainRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
