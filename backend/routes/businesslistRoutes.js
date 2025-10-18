const express = require("express");
const router = express.Router();
const { getBusinessById } = require("../controllers/businessListController");

router.get("/:id", getBusinessById);

module.exports = router;
