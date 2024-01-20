const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(["Hehehehe"]);
});

module.exports = router;
