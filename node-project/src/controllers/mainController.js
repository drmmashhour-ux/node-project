const path = require("path");

/**
 * Serve the home page.
 */
const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

/**
 * Serve the about page.
 */
const getAbout = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "about.html"));
};

module.exports = {
  getHome,
  getAbout,
};
