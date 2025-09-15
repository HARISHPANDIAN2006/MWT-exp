const express = require("express");
const router = express.Router();
const { getUserProfileById } = require("../controllers/userController");

router.get("/:userId", getUserProfileById);

module.exports = router;