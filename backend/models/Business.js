const mongoose = require("mongoose");

// Schema for each subcategory
const subCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { _id: true }); // allow Mongoose to automatically generate _id for subcategories

// Schema for the main business category
const businessCategorySchema = new mongoose.Schema({
  mainCategory: { type: String, required: true },
  description: { type: String, required: true },
  homeImage: { type: String, required: true },
  subCategories: [subCategorySchema], // array of subcategory objects
});

module.exports = mongoose.model(
  "BusinessCategory",
  businessCategorySchema,
  "Businesses" // use existing collection name
);