const express = require("express");
const { getServices,getServiceById,getServicefaqsById,getServicetagsById,getTopCategoryById } = require("../controllers/serviceController");

const router = express.Router();

router.get("/topcategories/:id", getTopCategoryById);

router.get("/servicefaqs/:id", getServicefaqsById);

router.get("/servicetags/:id", getServicetagsById);

router.get("/", getServices);

router.get("/:id", getServiceById);

module.exports = router;
