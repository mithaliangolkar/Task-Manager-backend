const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/dashboard", authMiddleware, roleMiddleware, (req, res) => {
  res.json({ message: "Welcome Admin 👑" });
});

module.exports = router;
