const express = require("express");
const { getAllCategories,getSubcategoryById } = require("../controllers/businessController");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/subcategory/:id", getSubcategoryById);

module.exports = router;