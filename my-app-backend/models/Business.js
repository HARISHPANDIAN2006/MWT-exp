const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model("Business", businessSchema,"businesses");
