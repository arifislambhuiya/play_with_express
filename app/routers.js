const router = require("express").Router();

// Register all routes
router.use("/api/v1", require("../routes/ticket"));

router.get("/health", (_req, res) => {
  const error = new Error("Hello Error");
  error.status = 400;
  throw error;
  res.status(200).json({ message: "Success" });
});

module.exports = router;
