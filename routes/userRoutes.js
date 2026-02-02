const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// PROTECTED ROUTE
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to protected route!",
    user: req.user
  });
});

module.exports = router;
