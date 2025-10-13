const express = require("express");
const BusinessCategory = require("../models/BusinessCategory");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await BusinessCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
