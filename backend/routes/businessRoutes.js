const express = require("express");
const Business = require("../models/Business");

const router = express.Router();

// Get all businesses
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses" });
  }
});

// Add new business
router.post("/", async (req, res) => {
  try {
    const newBiz = new Business(req.body);
    await newBiz.save();
    res.status(201).json(newBiz);
  } catch (err) {
    res.status(400).json({ message: "Error adding business" });
  }
});

module.exports = router;
