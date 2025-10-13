// routes/serviceRoutes.js
const express = require("express");
const router = express.Router();
const Service = require("../models/BusinessSubCategory");

// GET services by subCategory
router.get("/:subCategoryName", async (req, res) => {
  try {
    const services = await Service.find({ subCategoryName: req.params.subCategoryName });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
