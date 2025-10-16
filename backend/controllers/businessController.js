const BusinessCategory = require("../models/Business.js");

const getAllCategories = async (req, res) => {
  try {
    const categories = await BusinessCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCategories };