// Serve JSON only — no file system access, so no ENOENT on Render.
// Serve your real HTML from the frontend (e.g. Vercel) or static hosting.

exports.getHome = (req, res) => {
  res.json({ message: "Server running" });
};

exports.getAbout = (req, res) => {
  res.json({ message: "About" });
};
