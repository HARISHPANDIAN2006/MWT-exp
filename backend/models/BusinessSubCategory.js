// service.model.js
const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  reviews: Number,
  verified: Boolean,
  address: String,
  phone: String,
  whatsapp: String,
  categoryId: mongoose.Schema.Types.ObjectId,  // reference to Category
  subCategoryName: String,                     // match with clicked subcategory
  image: String,
});

module.exports = mongoose.model("BusinessSubCategory", ServiceSchema, "BusinessSubcategory");
